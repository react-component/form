import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import {createForm} from '../';
import {Simulate} from 'react-addons-test-utils';

let Test = React.createClass({
  propTypes: {
    form: React.PropTypes.object,
  },
  render() {
    const {getFieldProps} = this.props.form;
    return (<div>
      <input {...getFieldProps('normal')} ref="normal"/>

      <input {...getFieldProps('required', {rules: [{required: true}]})} ref="required"/>

      <input {...getFieldProps('blurRequired', {
        validate: [{
          trigger: 'onBlur',
          rules: [{required: true}],
        }],
      })} ref="blurRequired"/>
    </div>);
  },
});

Test = createForm({
  withRef: true,
})(Test);

describe('overview usage', () => {
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

  it('collect value', () => {
    expect(form.getFieldValue('normal')).to.be(undefined);
    Simulate.change(component.refs.normal);
    expect(form.getFieldValue('normal')).to.be('');
    component.refs.normal.value = '1';
    Simulate.change(component.refs.normal);
    expect(form.getFieldValue('normal')).to.be('1');
  });

  it('validate value', () => {
    expect(form.getFieldValue('required')).to.be(undefined);
    Simulate.change(component.refs.required);
    expect(form.getFieldValue('required')).to.be('');
    expect(form.getFieldError('required')).to.eql(['required is required']);
    component.refs.required.value = '1';
    Simulate.change(component.refs.required);
    expect(form.getFieldValue('required')).to.be('1');
    expect(form.getFieldError('required')).to.be(undefined);
  });


  it('validate trigger value', () => {
    expect(form.getFieldValue('blurRequired')).to.be(undefined);
    Simulate.change(component.refs.blurRequired);
    expect(form.getFieldValue('blurRequired')).to.be('');
    expect(form.getFieldError('blurRequired')).to.be(undefined);
    Simulate.blur(component.refs.blurRequired);
    expect(form.getFieldValue('blurRequired')).to.be('');
    expect(form.getFieldError('blurRequired')).to.eql(['blurRequired is required']);
    component.refs.blurRequired.value = '1';
    Simulate.change(component.refs.blurRequired);
    Simulate.blur(component.refs.blurRequired);
    expect(form.getFieldValue('blurRequired')).to.be('1');
    expect(form.getFieldError('blurRequired')).to.be(undefined);
  });

  it('validateFields works for error', (callback) => {
    form.validateFields((errors, values) => {
      expect(Object.keys(errors).length).to.be(2);
      expect(errors.required.errors.map(e => e.message)).to.eql(['required is required']);
      expect(errors.blurRequired.errors.map(e => e.message)).to.eql(['blurRequired is required']);
      expect(values.normal).to.be(undefined);
      expect(values.blurRequired).to.be(undefined);
      expect(values.required).to.be(undefined);
      callback();
    });
  });

  it('validateFields works for ok', (callback) => {
    component.refs.required.value = '2';
    component.refs.blurRequired.value = '1';
    Simulate.change(component.refs.blurRequired);
    Simulate.change(component.refs.required);
    form.validateFields((errors, values) => {
      expect(errors).not.to.be.ok();
      expect(values.normal).to.be(undefined);
      expect(values.blurRequired).to.be('1');
      expect(values.required).to.be('2');
      callback();
    });
  });

  it('resetFields works', ()=> {
    component.refs.required.value = '1';
    Simulate.change(component.refs.required);
    expect(form.getFieldValue('required')).to.be('1');
    expect(form.getFieldError('required')).to.be(undefined);
    form.resetFields();
    expect(form.getFieldValue('required')).to.be(undefined);
    expect(form.getFieldError('required')).to.be(undefined);
  });

  it('setFieldsInitialValue works', () => {
    form.setFieldsInitialValue({
      normal: '4',
    });
    component.refs.normal.value = '2';
    Simulate.change(component.refs.normal);
    expect(form.getFieldValue('normal')).to.be('2');
    form.resetFields();
    expect(form.getFieldValue('normal')).to.be('4');
  });
});
