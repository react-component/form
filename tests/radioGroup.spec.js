/* eslint-disable no-undef */

import React from 'react';
import ReactDOM from 'react-dom';
import { Simulate } from 'react-addons-test-utils';
import createForm from '../src/createForm';

let Test = React.createClass({
  propTypes: {
    form: React.PropTypes.object,
  },
  render() {
    const { getFieldProps } = this.props.form;
    getFieldProps('normal', {
      initialValue: 'b',
    });
    return (<div>
      <p>
        <label>
          a:
          <input
            type="radio"
            {...getFieldProps('normal.a', {
              exclusive: true,
              getValueFromEvent(e) {
                return e.target.checked ? 'a' : '';
              },
              getValueProps(value) {
                return {
                  checked: value === 'a',
                };
              },
            })}
          />
        </label>

        <br/>

        <label>
          b:
          <input
            type="radio"
            {...getFieldProps('normal.b', {
              exclusive: true,
              getValueFromEvent(e) {
                return e.target.checked ? 'b' : '';
              },
              getValueProps(value) {
                return {
                  checked: value === 'b',
                };
              },
            })}
          />
        </label>
      </p>
    </div>);
  },
});

Test = createForm({
  withRef: true,
})(Test);

describe('radio-group usage', () => {
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
    expect(form.getFieldValue('normal')).toEqual('b');
    form.getFieldInstance('normal.a').checked = true;
    Simulate.change(form.getFieldInstance('normal.a'));
    expect(form.getFieldValue('normal')).toEqual('a');
    form.getFieldInstance('normal.b').checked = true;
    Simulate.change(form.getFieldInstance('normal.b'));
    expect(form.getFieldValue('normal')).toEqual('b');
    expect(form.getFieldInstance('normal.a').checked).toBe(false);
  });

  it('validateFields works for ok', (callback) => {
    form.getFieldInstance('normal.a').checked = true;
    Simulate.change(form.getFieldInstance('normal.a'));
    form.validateFields((errors, values) => {
      expect(errors).toBeFalsy();
      expect(values.normal).toBe('a');
      callback();
    });
  });

  it('resetFields works', () => {
    expect(form.getFieldValue('normal')).toEqual('b');
    form.getFieldInstance('normal.a').checked = true;
    Simulate.change(form.getFieldInstance('normal.a'));
    expect(form.getFieldValue('normal')).toEqual('a');
    form.resetFields();
    expect(form.getFieldValue('normal')).toBe('b');
  });
});
