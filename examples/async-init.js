/* eslint react/no-multi-comp:0, no-console:0 */

import { createForm } from 'rc-form';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { regionStyle, errorStyle } from './styles';

const Email = React.createClass({
  propTypes: {
    form: PropTypes.object,
  },

  checkSpecial(rule, value, callback) {
    setTimeout(() => {
      if (value === 'yiminghe@gmail.com') {
        callback('can not be!');
      } else {
        callback();
      }
    }, 1000);
  },

  render() {
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
    const errors = getFieldError('email');
    return (<div style={ regionStyle }>
      <div>email validate onBlur</div>
      <div>
        <input {...getFieldProps('email', {
          validateFirst: true,
          rules: [
            {
              required: true,
            },
            {
              type: 'email',
              message: '错误的 email 格式',
            },
            this.checkSpecial,
          ],
          validateTrigger: 'onBlur',
        })}
        /></div>
      <div style={errorStyle}>
        {errors ? errors.join(',') : null}
      </div>
      <div style={errorStyle}>
        {isFieldValidating('email') ? 'validating' : null}
      </div>
    </div>);
  },
});

class Form extends Component {
  static propTypes = {
    form: PropTypes.object,
  };

  componentDidMount() {
    setTimeout(() => {
      this.props.form.setFieldsInitialValue({
        email: 'xx@gmail.com',
      });
      this.setState({
        loading: false,
      });
    }, 1000);
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.form.submit((callback) => {
      setTimeout(() => {
        this.props.form.validateFields((error, values) => {
          if (!error) {
            console.log('ok', values);
          } else {
            console.log('error', error, values);
          }
          callback();
        });
      }, 1000);
    });
  };

  reset = (e) => {
    e.preventDefault();
    this.props.form.resetFields();
  };

  render() {
    if (!this.state || this.state.loading !== false) {
      return <b>loading</b>;
    }
    const { form } = this.props;
    const disabled = form.isFieldsValidating() || form.isSubmitting();
    return (<div style={{ margin: 20 }}>
      <h2>async init field</h2>
      <form onSubmit={this.onSubmit}>
        <Email form={ form }/>

        <div style={ regionStyle }>
          <button disabled={disabled} type="submit">submit</button>
          &nbsp;{disabled ? <span style={{ color: 'red' }}>disabled</span> : null}&nbsp;
          <button disabled={disabled} onClick={this.reset}>reset</button>
        </div>
      </form>
    </div>);
  }
}

const NewForm = createForm()(Form);

ReactDOM.render(<NewForm />, document.getElementById('__react-content'));
