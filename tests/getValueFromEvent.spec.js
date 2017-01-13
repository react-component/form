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
    return (<div>
      <input {...getFieldProps('normal', {
        getValueProps(v) {
          return {
            value: `${v}1`,
          };
        },
        initialValue: '0',
        getValueFromEvent(e) {
          return `${e.target.value}2`;
        },
      })}
      />
    </div>);
  },
});

Test = createForm({
  withRef: true,
})(Test);

describe('getValueFromEvent usage', () => {
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

  it('works', () => {
    form.getFieldInstance('normal').value = '3';
    Simulate.change(form.getFieldInstance('normal'));
    expect(form.getFieldValue('normal')).toBe('32');
    expect(form.getFieldInstance('normal').value).toBe('321');
    form.resetFields();
    expect(form.getFieldValue('normal')).toBe('0');
    expect(form.getFieldInstance('normal').value).toBe('01');
  });
});
