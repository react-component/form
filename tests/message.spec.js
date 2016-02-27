/* eslint react/no-multi-comp:0 */

import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { createForm } from '../';
import { Simulate } from 'react-addons-test-utils';

describe('message usage', () => {
  let container;
  let component;
  let form;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
  });

  it('validateMessages works', () => {
    let Test = React.createClass({
      propTypes: {
        form: React.PropTypes.object,
      },

      render() {
        const { getFieldProps } = this.props.form;
        return (<div>
          <input {...getFieldProps('required', {
            rules: [{
              required: true,
            }],
          })}
          />
        </div>);
      },
    });
    Test = createForm({
      withRef: true,
      validateMessages: {
        required: '%s required!',
      },
    })(Test);
    component = ReactDOM.render(<Test />, container);
    component = component.refs.wrappedComponent;
    form = component.props.form;
    Simulate.change(form.getFieldInstance('required'));
    expect(form.getFieldError('required').length).to.be(1);
    expect(form.getFieldError('required')[0]).to.be('required required!');
  });

  it('jsx works', () => {
    let Test = React.createClass({
      propTypes: {
        form: React.PropTypes.object,
      },

      render() {
        const { getFieldProps } = this.props.form;
        return (<div>
          <input {...getFieldProps('required', {
            rules: [{
              required: true,
              message: <b>1</b>,
            }],
          })}
          />
        </div>);
      },
    });
    Test = createForm({
      withRef: true,
    })(Test);
    component = ReactDOM.render(<Test />, container);
    component = component.refs.wrappedComponent;
    form = component.props.form;
    Simulate.change(form.getFieldInstance('required'));
    expect(form.getFieldError('required').length).to.be(1);
    expect(form.getFieldError('required')[0].type).to.be('b');
  });
});
