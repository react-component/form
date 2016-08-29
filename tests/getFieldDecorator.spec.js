import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { createForm } from '../';
import { Simulate } from 'react-addons-test-utils';

let Test = React.createClass({
  propTypes: {
    form: React.PropTypes.object,
  },
  componentWillMount() {
    const { getFieldDecorator } = this.props.form;
    this.normalInput = getFieldDecorator('normal');
    this.requiredInput = getFieldDecorator('required', {
      rules: [{
        required: true,
      }],
    });
    this.blurRequiredInput = getFieldDecorator('blurRequired', {
      validate: [{
        trigger: 'onBlur',
        rules: [{
          required: true,
        }],
      }],
    });
  },
  render() {
    return (<div>
      {this.normalInput(
        <input />
      )}

      {this.requiredInput(
        <input />
      )}

      {this.blurRequiredInput(
        <input/>
      )}
      />
    </div>);
  },
});

Test = createForm({
  withRef: true,
})(Test);

describe('getFieldDecorator', () => {
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
    Simulate.change(form.getFieldInstance('normal'));
    expect(form.getFieldValue('normal')).to.be('');
    form.getFieldInstance('normal').value = '1';
    Simulate.change(form.getFieldInstance('normal'));
    expect(form.getFieldValue('normal')).to.be('1');
  });

  it('validate value', () => {
    expect(form.getFieldValue('required')).to.be(undefined);
    Simulate.change(form.getFieldInstance('required'));
    expect(form.getFieldValue('required')).to.be('');
    expect(form.getFieldError('required')).to.eql(['required is required']);
    form.getFieldInstance('required').value = '1';
    Simulate.change(form.getFieldInstance('required'));
    expect(form.getFieldValue('required')).to.be('1');
    expect(form.getFieldError('required')).to.be(undefined);
  });


  it('validate trigger value', () => {
    expect(form.getFieldValue('blurRequired')).to.be(undefined);
    Simulate.change(form.getFieldInstance('blurRequired'));
    expect(form.getFieldValue('blurRequired')).to.be('');
    expect(form.getFieldError('blurRequired')).to.be(undefined);
    Simulate.blur(form.getFieldInstance('blurRequired'));
    expect(form.getFieldValue('blurRequired')).to.be('');
    expect(form.getFieldError('blurRequired')).to.eql(['blurRequired is required']);
    form.getFieldInstance('blurRequired').value = '1';
    Simulate.change(form.getFieldInstance('blurRequired'));
    Simulate.blur(form.getFieldInstance('blurRequired'));
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
    form.getFieldInstance('required').value = '2';
    form.getFieldInstance('blurRequired').value = '1';
    Simulate.change(form.getFieldInstance('blurRequired'));
    Simulate.change(form.getFieldInstance('required'));
    form.validateFields((errors, values) => {
      expect(errors).not.to.be.ok();
      expect(values.normal).to.be(undefined);
      expect(values.blurRequired).to.be('1');
      expect(values.required).to.be('2');
      callback();
    });
  });

  it('resetFields works', () => {
    form.getFieldInstance('required').value = '1';
    Simulate.change(form.getFieldInstance('required'));
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
    form.getFieldInstance('normal').value = '2';
    Simulate.change(form.getFieldInstance('normal'));
    expect(form.getFieldValue('normal')).to.be('2');
    form.resetFields();
    expect(form.getFieldValue('normal')).to.be('4');
  });
});
