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
    expect(form.getFieldValue('normal')).to.eql('b');
    form.getFieldInstance('normal.a').checked = true;
    Simulate.change(form.getFieldInstance('normal.a'));
    expect(form.getFieldValue('normal')).to.eql('a');
    form.getFieldInstance('normal.b').checked = true;
    Simulate.change(form.getFieldInstance('normal.b'));
    expect(form.getFieldValue('normal')).to.eql('b');
    expect(form.getFieldInstance('normal.a').checked).to.be(false);
  });

  it('validateFields works for ok', (callback) => {
    form.getFieldInstance('normal.a').checked = true;
    Simulate.change(form.getFieldInstance('normal.a'));
    form.validateFields((errors, values) => {
      expect(errors).not.to.be.ok();
      expect(values.normal).to.be('a');
      callback();
    });
  });

  it('resetFields works', () => {
    expect(form.getFieldValue('normal')).to.eql('b');
    form.getFieldInstance('normal.a').checked = true;
    Simulate.change(form.getFieldInstance('normal.a'));
    expect(form.getFieldValue('normal')).to.eql('a');
    form.resetFields();
    expect(form.getFieldValue('normal')).to.be('b');
  });
});
