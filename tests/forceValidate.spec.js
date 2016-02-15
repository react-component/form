import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { createForm } from '../';
import { Simulate } from 'react-addons-test-utils';

let Test = React.createClass({
  propTypes: {
    form: React.PropTypes.object,
  },

  force(rule, value, callback) {
    this.props.form.validateFields(['check'], {
      force: true,
    }, (errors) => {
      if (errors) {
        const es = Object.keys(errors).map((name) => {
          return errors[name].errors;
        }).reduce((result, current) => {
          return result.concat.apply(result, current);
        }, []);
        callback(es);
      } else {
        callback();
      }
    });
  },

  check(rule, value, callback) {
    if ((value || '').length < (this.props.form.getFieldValue('force') || '').length) {
      callback('error');
    } else {
      callback();
    }
  },

  render() {
    const { getFieldProps } = this.props.form;
    return (<div>
      <input {...getFieldProps('normal')} ref="normal"/>
      <input {...getFieldProps('check', {
        rules: [this.check],
      })} ref="check"
      />
      <input {...getFieldProps('force', {
        rules: [this.force],
        validateTrigger: false,
      })} ref="force"
      />
    </div>);
  },
});

Test = createForm({
  withRef: true,
})(Test);

describe('async usage', () => {
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
    component.refs.check.value = '1';
    Simulate.change(component.refs.check);
    expect(form.getFieldError('check')).not.to.be.ok();
    component.refs.force.value = '11';
    Simulate.change(component.refs.force);
    expect(form.getFieldError('check')).not.to.be.ok();
    form.validateFields((errors) => {
      expect(Object.keys(errors).length).to.be(1);
      expect(form.getFieldError('check')).to.eql(['error']);
      expect(errors.check.errors.map(e => e.message)).to.eql(['error']);
      expect(form.getFieldError('force')).not.to.be.ok();
      done();
    });
  });
});
