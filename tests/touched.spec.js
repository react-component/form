/* eslint-disable no-undef, react/prop-types */

import React from 'react';
import ReactDOM from 'react-dom';
import { Simulate } from 'react-dom/test-utils';
import createForm from '../src/createForm';

class Test extends React.Component {
  render() {
    const { getFieldProps } = this.props.form;
    return (<div>
      <input {...getFieldProps('input', {
        initialValue: '1',
        validateTrigger: ['onChange', 'onBlur'],
        rules: [{
          required: true,
        }],
      })}
      />
    </div>);
  }
}

Test = createForm({
  withRef: true,
})(Test);

describe('touched feature', () => {
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

  it('isFieldsTouched works', () => {
    expect(form.isFieldsTouched()).toBe(false);
    form.getFieldInstance('input').value = '2';
    Simulate.change(form.getFieldInstance('input'));
    expect(form.isFieldsTouched()).toBe(true);
    form.resetFields();
    expect(form.isFieldsTouched()).toBe(false);
  });

  it(`changing a field value back to it's initial value restores the untouched state`, () => {
    const formField = form.getFieldInstance('input');
    const initialValue = form.getFieldInitialValue('input');

    formField.value = '2';
    Simulate.change(formField);
    expect(form.isFieldsTouched()).toBe(true);
    formField.value = initialValue;
    Simulate.change(formField);
    expect(form.isFieldsTouched()).toBe(false);
  });

  it(`focus and blurring a field with validation rules without changing the value
     should not cause it to be 'touched'`, () => {
    const formField = form.getFieldInstance('input');

    expect(form.isFieldsTouched()).toBe(false);
    Simulate.focus(formField);
    Simulate.blur(formField);
    expect(form.isFieldsTouched()).toBe(false);
  });
});
