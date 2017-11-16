/* eslint react/no-multi-comp:0, no-console:0 */

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { createForm } from 'rc-form';

class Form1 extends React.Component {
  static propTypes = {
    form: PropTypes.object,
  };
  state = {
    useInput: true,
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((error, values) => {
      if (!error) {
        console.log('ok', values);
      } else {
        console.log('error', error, values);
      }
    });
  };
  changeUseInput = (e) => {
    this.setState({
      useInput: e.target.checked,
    });
  }
  render() {
    const { getFieldError, getFieldDecorator } = this.props.form;

    return (
      <form onSubmit={this.onSubmit}>
        <h2>situation 1</h2>
        {this.state.useInput ? getFieldDecorator('name', {
          initialValue: '',
          rules: [{
            required: true,
            message: 'What\'s your name?',
          }],
        })(<input />) : null}
        <span>text content</span>
        {this.state.useInput ? null : getFieldDecorator('name', {
          initialValue: '',
          rules: [{
            required: true,
            message: 'What\'s your name?',
          }],
        })(<input />)}
        <div>
          <label>
            <input type="checkbox" checked={this.state.useInput} onChange={this.changeUseInput} />
            change input
          </label>
          {(getFieldError('name') || []).join(', ')}
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

class Form2 extends React.Component {
  static propTypes = {
    form: PropTypes.object,
  };
  state = {
    useInput: true,
  };
  componentWillMount() {
    const { getFieldDecorator } = this.props.form;
    this.nameDecorator = getFieldDecorator('name', {
      initialValue: '',
      rules: [{
        required: true,
        message: 'What\'s your name?',
      }],
    });
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((error, values) => {
      if (!error) {
        console.log('ok', values);
      } else {
        console.log('error', error, values);
      }
    });
  };
  changeUseInput = (e) => {
    this.setState({
      useInput: e.target.checked,
    });
  }
  render() {
    const { getFieldError } = this.props.form;
    return (
      <form onSubmit={this.onSubmit}>
        <h2>situation 2</h2>
        {this.state.useInput ? this.nameDecorator(<input />) : null}
        <span>text content</span>
        {this.state.useInput ? null : this.nameDecorator(<input />)}
        <div>
          <label>
            <input type="checkbox" checked={this.state.useInput} onChange={this.changeUseInput} />
            change input
          </label>
          {(getFieldError('name') || []).join(', ')}
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

const WrappedForm1 = createForm()(Form1);
const WrappedForm2 = createForm()(Form2);
ReactDOM.render(
  <div>
    <WrappedForm1 />
    <WrappedForm2 />
  </div>
, document.getElementById('__react-content'));
