/* eslint-disable no-undef, react/prop-types */

import React from 'react';
import ReactDOM from 'react-dom';
import { Simulate } from 'react-dom/test-utils';
import createForm from '../src/createForm';

class TestComponent extends React.Component {
  render() {
    const { getFieldProps } = this.props.form;
    return <input {...getFieldProps('employee.name', { initialValue: '' })} />;
  }
}

describe('onValuesChange', () => {
  let container;
  let component;
  let form;
  let values;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    const Test = createForm({
      withRef: true,
      onValuesChange(props, changedValues) {
        values = changedValues;
      },
    })(TestComponent);
    component = ReactDOM.render(<Test />, container);
    component = component.refs.wrappedComponent;
    form = component.props.form;
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
    values = undefined;
  });

  it('should trigger `onValuesChange` when value change', () => {
    Simulate.change(form.getFieldInstance('employee.name'), { target: { value: 'Benjy' } });
    expect(values).toEqual({ employee: { name: 'Benjy' } });
  });

  it('should trigger `onValuesChange` when `setFieldsValue`', () => {
    form.setFieldsValue({ employee: { name: 'Benjy' } });
    expect(values).toEqual({ employee: { name: 'Benjy' } });
  });
});
