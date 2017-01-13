import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import createForm from '../src/createForm';
import { Simulate } from 'react-addons-test-utils';
import async from 'async';

let Test = React.createClass({
  propTypes: {
    form: React.PropTypes.object,
  },
  check(rule, value, callback) {
    setTimeout(() => {
      if (value === '1') {
        callback();
      } else {
        callback(new Error('must be 1'));
      }
    }, 100);
  },

  render() {
    const { getFieldProps } = this.props.form;
    return (<div>
      <input {...getFieldProps('normal')} />
      <input {...getFieldProps('async', {
        rules: [this.check],
      })}
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

  it('works', (done) => {
    async.series([
      (callback) => {
        Simulate.change(form.getFieldInstance('async'));
        expect(form.getFieldValue('async')).to.be('');
        expect(form.getFieldError('async')).not.to.be.ok();
        expect(form.isFieldValidating('async')).to.be(true);
        expect(form.isFieldsValidating()).to.be(true);
        setTimeout(callback, 200);
      },
      (callback) => {
        expect(form.getFieldError('async')).to.eql(['must be 1']);
        expect(form.isFieldValidating('async')).to.be(false);
        expect(form.isFieldsValidating()).to.be(false);
        callback();
      },
      (callback) => {
        form.getFieldInstance('async').value = '1';
        Simulate.change(form.getFieldInstance('async'));
        expect(form.getFieldValue('async')).to.be('1');
        expect(form.getFieldError('async')).to.be(undefined);
        expect(form.isFieldValidating('async')).to.be(true);
        expect(form.isFieldsValidating()).to.be(true);
        setTimeout(callback, 200);
      },
      (callback) => {
        expect(form.getFieldError('async')).not.to.be.ok();
        expect(form.isFieldValidating('async')).to.be(false);
        expect(form.isFieldsValidating()).to.be(false);
        callback();
      },
    ], done);
  });
  it('validateFields works for error', (done) => {
    form.validateFields((errors, values) => {
      expect(values.normal).to.be(undefined);
      expect(values.async).to.be(undefined);
      expect(Object.keys(errors).length).to.be(1);
      expect(errors.async.errors.map(e => e.message)).to.eql(['must be 1']);
      done();
    });
  });

  it('validateFields works for ok', (done) => {
    form.getFieldInstance('async').value = '1';
    Simulate.change(form.getFieldInstance('async'));
    form.validateFields((errors, values) => {
      expect(values.normal).to.be(undefined);
      expect(values.async).to.be('1');
      expect(errors).not.to.be.ok();
      done();
    });
  });

  it('submit works', (done) => {
    expect(form.isSubmitting()).to.be(false);
    form.submit((callback) => {
      expect(form.isSubmitting()).to.be(true);
      setTimeout(() => {
        callback();
        expect(form.isSubmitting()).to.be(false);
        done();
      }, 100);
    });
  });

  it('will error if change when validating', (done) => {
    form.validateFields((errors) => {
      expect(Object.keys(errors).length).to.be(1);
      expect(errors.async.errors.map(e => e.message)).to.eql(['async need to revalidate']);
      setTimeout(() => {
        done();
      }, 500);
    });
    form.getFieldInstance('async').value = '1';
    Simulate.change(form.getFieldInstance('async'));
  });
});
