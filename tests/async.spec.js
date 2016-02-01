import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import {createForm} from '../';
import {Simulate} from 'react-addons-test-utils';
import async from 'async';

let Test = React.createClass({
  propTypes: {
    form: React.PropTypes.object,
  },
  check(rule, value, callback) {
    setTimeout(()=> {
      if (value === '1') {
        callback();
      } else {
        callback(new Error('must be 1'));
      }
    }, 100);
  },

  render() {
    const {getFieldProps} = this.props.form;
    return (<div>
      <input {...getFieldProps('normal')} ref="normal"/>
      <input {...getFieldProps('async', {
        rules: [this.check],
      })} ref="async"/>
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
        Simulate.change(component.refs.async);
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
        component.refs.async.value = '1';
        Simulate.change(component.refs.async);
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
      expect(errors.async.map(e => e.message)).to.eql(['must be 1']);
      done();
    });
  });

  it('validateFields works for ok', (done) => {
    component.refs.async.value = '1';
    Simulate.change(component.refs.async);
    form.validateFields((errors, values) => {
      expect(values.normal).to.be(undefined);
      expect(values.async).to.be('1');
      expect(errors).not.to.be.ok();
      done();
    });
  });

  it('submit works', (done) => {
    expect(form.isSubmitting()).to.be(false);
    form.submit((callback)=> {
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
      expect(errors.async.map(e => e.message)).to.eql(['async need to revalidate']);
      setTimeout(() => {
        done();
      }, 500);
    });
    component.refs.async.value = '1';
    Simulate.change(component.refs.async);
  });
});
