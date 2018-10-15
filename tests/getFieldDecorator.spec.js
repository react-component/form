/* eslint-disable no-undef, react/prop-types, react/no-multi-comp, react/no-render-return-value */

import React from 'react';
import ReactDOM from 'react-dom';
import { Simulate } from 'react-dom/test-utils';
import createForm from '../src/createForm';

describe('getFieldDecorator', () => {
  class Test extends React.Component {
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
    }
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
      </div>);
    }
  }

  Test = createForm({
    withRef: true,
  })(Test);

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
    expect(form.getFieldValue('normal')).toBe(undefined);
    Simulate.change(form.getFieldInstance('normal'));
    expect(form.getFieldValue('normal')).toBe('');
    form.getFieldInstance('normal').value = '1';
    Simulate.change(form.getFieldInstance('normal'));
    expect(form.getFieldValue('normal')).toBe('1');
  });

  it('validate value', () => {
    expect(form.getFieldValue('required')).toBe(undefined);
    Simulate.change(form.getFieldInstance('required'));
    expect(form.getFieldValue('required')).toBe('');
    expect(form.getFieldError('required')).toEqual(['required is required']);
    form.getFieldInstance('required').value = '1';
    Simulate.change(form.getFieldInstance('required'));
    expect(form.getFieldValue('required')).toBe('1');
    expect(form.getFieldError('required')).toBe(undefined);
  });


  it('validate trigger value', () => {
    expect(form.getFieldValue('blurRequired')).toBe(undefined);
    Simulate.change(form.getFieldInstance('blurRequired'));
    expect(form.getFieldValue('blurRequired')).toBe('');
    expect(form.getFieldError('blurRequired')).toBe(undefined);
    Simulate.blur(form.getFieldInstance('blurRequired'));
    expect(form.getFieldValue('blurRequired')).toBe('');
    expect(form.getFieldError('blurRequired')).toEqual(['blurRequired is required']);
    form.getFieldInstance('blurRequired').value = '1';
    Simulate.change(form.getFieldInstance('blurRequired'));
    Simulate.blur(form.getFieldInstance('blurRequired'));
    expect(form.getFieldValue('blurRequired')).toBe('1');
    expect(form.getFieldError('blurRequired')).toBe(undefined);
  });

  it('validateFields works for error', (callback) => {
    form.validateFields((errors, values) => {
      expect(Object.keys(errors).length).toBe(2);
      expect(errors.required.errors.map(e => e.message)).toEqual(['required is required']);
      expect(errors.blurRequired.errors.map(e => e.message)).toEqual(['blurRequired is required']);
      expect(values.normal).toBe(undefined);
      expect(values.blurRequired).toBe(undefined);
      expect(values.required).toBe(undefined);
      callback();
    });
  });

  it('validateFields works for ok', (callback) => {
    form.getFieldInstance('required').value = '2';
    form.getFieldInstance('blurRequired').value = '1';
    Simulate.change(form.getFieldInstance('blurRequired'));
    Simulate.change(form.getFieldInstance('required'));
    form.validateFields((errors, values) => {
      expect(errors).toBeFalsy();
      expect(values.normal).toBe(undefined);
      expect(values.blurRequired).toBe('1');
      expect(values.required).toBe('2');
      callback();
    });
  });

  it('resetFields works', () => {
    form.getFieldInstance('required').value = '1';
    Simulate.change(form.getFieldInstance('required'));
    expect(form.getFieldValue('required')).toBe('1');
    expect(form.getFieldError('required')).toBe(undefined);
    form.resetFields();
    expect(form.getFieldValue('required')).toBe(undefined);
    expect(form.getFieldError('required')).toBe(undefined);
  });

  it('setFieldsInitialValue works', () => {
    form.setFieldsInitialValue({
      normal: '4',
    });
    form.getFieldInstance('normal').value = '2';
    Simulate.change(form.getFieldInstance('normal'));
    expect(form.getFieldValue('normal')).toBe('2');
    form.resetFields();
    expect(form.getFieldValue('normal')).toBe('4');
  });
});

describe('dynamic', () => {
  it('change validateTrigger', () => {
    class Test extends React.Component {
      state = {
        inited: false,
      };

      render() {
        const { getFieldDecorator } = this.props.form;
        return (
          <div>
            {getFieldDecorator('title', {
              validateTrigger: this.state.inited ? 'onChange' : 'onBlur',
              rules: [
                { required: true, message: 'Title is required' },
                { min: 3, message: 'Title should be 3+ characters' },
              ],
            })(<input />)}
          </div>
        );
      }
    }

    Test = createForm({
      withRef: true,
    })(Test);

    const container = document.createElement('div');
    document.body.appendChild(container);
    const app = ReactDOM.render(<Test />, container);
    const component = app.refs.wrappedComponent;
    const form = component.props.form;

    Simulate.blur(form.getFieldInstance('title'));
    expect(form.getFieldError('title')).toEqual(['Title is required']);

    component.setState({ inited: true });

    form.getFieldInstance('title').value = '1';
    Simulate.change(form.getFieldInstance('title'));
    expect(form.getFieldValue('title')).toBe('1');
    expect(form.getFieldError('title')).toEqual(['Title should be 3+ characters']);
  });
});
