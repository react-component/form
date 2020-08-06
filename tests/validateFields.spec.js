/* eslint-disable no-undef, react/prop-types, react/no-render-return-value */

import React from 'react';
import ReactDOM from 'react-dom';
import { Simulate } from 'react-dom/test-utils';
import createForm from '../src/createForm';

class Test extends React.Component {
  force = (rule, value, callback) => {
    this.props.form.validateFields(['check'], {
      force: true,
    }, (errors) => {
      if (errors) {
        const es = Object.keys(errors).map((name) => {
          return errors[name].errors;
        }).reduce((result, current) => {
          return result.concat(...current.map(entity => ({
            ...entity, message: `${entity.message}_force`,
          })));
        }, []);
        callback(es);
      } else {
        callback();
      }
    });
  }

  check = (rule, value, callback) => {
    if ((value || '').length < (this.props.form.getFieldValue('force') || '').length) {
      callback('error');
    } else {
      callback();
    }
  }

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <input {...getFieldProps('normal')} />
        <input {...getFieldProps('check', {
          rules: [this.check],
        })}
        />
        <input {...getFieldProps('force', {
          rules: [this.force],
          validateTrigger: false,
        })}
        />
      </div>
    );
  }
}

Test = createForm({
  withRef: true,
})(Test);

describe('validateFields', () => {
  let container;
  let component;
  let form;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    component = ReactDOM.render(<Test />, container);
    component = component.refs.wrappedComponent;
    form = component.props.form;
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
  });

  it('forceValidate works', (done) => {
    form.getFieldInstance('check').value = '1';
    Simulate.change(form.getFieldInstance('check'));
    expect(form.getFieldError('check')).toBeFalsy();
    form.getFieldInstance('force').value = '11';
    Simulate.change(form.getFieldInstance('force'));
    expect(form.getFieldError('check')).toBeFalsy();
    form.validateFields((errors) => {
      expect(errors).toBeTruthy();
      expect(Object.keys(errors).length).toBe(1);
      expect(form.getFieldError('check')).toEqual(['error', 'error_force']);
      expect(errors.check.errors.map(e => e.message)).toEqual(['error', 'error_force']);
      expect(form.getFieldError('force')).toBeFalsy();
      done();
    });
  });
});
