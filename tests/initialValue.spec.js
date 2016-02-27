import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { createForm } from '../';
import { Simulate } from 'react-addons-test-utils';

let Test = React.createClass({
  propTypes: {
    form: React.PropTypes.object,
  },
  check(rule, value, callback) {
    setTimeout(() => {
      if (value === '1') {
        callback();
      } else {
        callback('must be 1');
      }
    }, 100);
  },

  render() {
    const { getFieldProps } = this.props.form;
    return (<div>
      <input {...getFieldProps('normal', {
        initialValue: '1',
        // test empty rules
        rules: [],
      })}
      />
    </div>);
  },
});

Test = createForm({
  withRef: true,
})(Test);

describe('initialValue usage', () => {
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

  it('resetFields works', () => {
    form.getFieldInstance('normal').value = '2';
    Simulate.change(form.getFieldInstance('normal'));
    expect(form.getFieldValue('normal')).to.be('2');
    form.resetFields();
    expect(form.getFieldValue('normal')).to.be('1');
  });
});
