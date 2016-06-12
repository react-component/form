import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { createForm } from '../';
import { Simulate } from 'react-addons-test-utils';

let Test = React.createClass({
  propTypes: {
    form: React.PropTypes.object,
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (<div>
      <p>
        <label>
          a:
          <input
            type="checkbox"
            {...getFieldProps('normal.a', {
              initialValue: false,
              valuePropName: 'checked',
            })}
          />
        </label>

        <br/>

        <label>
          b:
          <input
            type="checkbox"
            {...getFieldProps('normal.b', {
              getValueFromEvent(e) {
                return e.target.checked ? 'b' : '';
              },
              getValueProps(value) {
                return {
                  checked: !!value,
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

describe('checkbox-group usage', () => {
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
    expect(form.getFieldValue('normal')).to.eql({ a: false, b: undefined });
    form.getFieldInstance('normal.a').checked = true;
    Simulate.change(form.getFieldInstance('normal.a'));
    expect(form.getFieldValue('normal')).to.eql({ a: true, b: undefined });
    form.getFieldInstance('normal.b').checked = true;
    Simulate.change(form.getFieldInstance('normal.b'));
    expect(form.getFieldValue('normal')).to.eql({ a: true, b: 'b' });
    expect(form.getFieldInstance('normal.a').checked).to.be(true);
  });

  it('validateFields works for ok', (callback) => {
    form.getFieldInstance('normal.a').checked = true;
    Simulate.change(form.getFieldInstance('normal.a'));
    form.validateFields((errors, values) => {
      expect(errors).not.to.be.ok();
      expect(values.normal).to.eql({ a: true, b: undefined });
      callback();
    });
  });

  it('resetFields works', () => {
    expect(form.getFieldValue('normal')).to.eql({ a: false, b: undefined });
    form.getFieldInstance('normal.a').checked = true;
    Simulate.change(form.getFieldInstance('normal.a'));
    expect(form.getFieldValue('normal')).to.eql({ a: true, b: undefined });
    form.resetFields();
    expect(form.getFieldValue('normal')).to.eql({ a: false, b: undefined });
  });
});
