/* eslint-disable no-undef, react/prop-types, react/no-render-return-value */

import React from 'react';
import ReactDOM from 'react-dom';
import { Simulate } from 'react-dom/test-utils';
import async from 'async';
import createForm from '../src/createForm';

class Test extends React.Component {
  check = (rule, value, callback) => {
    setTimeout(() => {
      if (value === '1') {
        callback();
      } else {
        callback(new Error('must be 1'));
      }
    }, 100);
  }

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <input {...getFieldProps('normal')} />
        <input
          {...getFieldProps('async', {
            rules: [this.check],
          })}
        />
      </div>
    );
  }
}

Test = createForm({
  withRef: true,
})(Test);

describe('Async Validation', () => {
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

  it('works', (done) => {
    async.series([
      (callback) => {
        Simulate.change(form.getFieldInstance('async'));
        expect(form.getFieldValue('async')).toBe('');
        expect(form.getFieldError('async')).toBeFalsy();
        expect(form.isFieldValidating('async')).toBe(true);
        expect(form.isFieldsValidating()).toBe(true);
        setTimeout(callback, 200);
      },
      (callback) => {
        expect(form.getFieldError('async')).toEqual(['must be 1']);
        expect(form.isFieldValidating('async')).toBe(false);
        expect(form.isFieldsValidating()).toBe(false);
        callback();
      },
      (callback) => {
        form.getFieldInstance('async').value = '1';
        Simulate.change(form.getFieldInstance('async'));
        expect(form.getFieldValue('async')).toBe('1');
        expect(form.getFieldError('async')).toBe(undefined);
        expect(form.isFieldValidating('async')).toBe(true);
        expect(form.isFieldsValidating()).toBe(true);
        setTimeout(callback, 200);
      },
      (callback) => {
        expect(form.getFieldError('async')).toBeFalsy();
        expect(form.isFieldValidating('async')).toBe(false);
        expect(form.isFieldsValidating()).toBe(false);
        callback();
      },
    ], done);
  });
  it('validateFields works for error', (done) => {
    form.validateFields((errors, values) => {
      expect(values.normal).toBe(undefined);
      expect(values.async).toBe(undefined);
      expect(Object.keys(errors).length).toBe(1);
      expect(errors.async.errors.map(e => e.message)).toEqual(['must be 1']);
      done();
    });
  });

  it('validateFields works for ok', (done) => {
    form.getFieldInstance('async').value = '1';
    Simulate.change(form.getFieldInstance('async'));
    form.validateFields((errors, values) => {
      expect(values.normal).toBe(undefined);
      expect(values.async).toBe('1');
      expect(errors).toBeFalsy();
      done();
    });
  });

  it('promise validateFields works for ok', (done) => {
    form.getFieldInstance('async').value = '1';
    Simulate.change(form.getFieldInstance('async'));
    return form.validateFields()
      .then(values => {
        expect(values.normal).toBe(undefined);
        expect(values.async).toBe('1');
        done();
      });
  });

  it('will error if change when validating', (done) => {
    form.validateFields((errors) => {
      expect(Object.keys(errors).length).toBe(1);
      expect(errors.async.errors.map(e => e.message)).toEqual(['async need to revalidate']);
      setTimeout(() => {
        done();
      }, 500);
    });
    form.getFieldInstance('async').value = '1';
    Simulate.change(form.getFieldInstance('async'));
  });

  it('Whether to catch when an error occurs', (done) => {
    form.validateFields()
      .catch(({ errors }) => {
        expect(Object.keys(errors).length).toBe(1);
        expect(errors.async.errors.map(e => e.message)).toEqual(['async need to revalidate']);
        expect.assertions(2);
        done();
      });
    form.getFieldInstance('async').value = '1';
    Simulate.change(form.getFieldInstance('async'));
  });

  // TODO: submit and isSubmitting are deprecated
  it('submit works', (done) => {
    expect(form.isSubmitting()).toBe(false);
    form.submit((callback) => {
      expect(form.isSubmitting()).toBe(true);
      setTimeout(() => {
        callback();
        expect(form.isSubmitting()).toBe(false);
        done();
      }, 100);
    });
  });
});
