/* eslint react/no-multi-comp:0, no-console:0 */

import { createForm } from 'rc-form';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { regionStyle, errorStyle } from './styles';

function Email(props) {
  const { getFieldProps, getFieldError, isFieldValidating } = props.form;
  const errors = getFieldError('email');
  return (<div style={ regionStyle }>
    <div>email sync validate</div>
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
        ],
      })}
      />
    </div>
    <div style={errorStyle}>
      {errors ? errors.join(',') : null}
    </div>
    <div style={errorStyle}>
      {isFieldValidating('email') ? 'validating' : null}
    </div>
  </div>);
}

Email.propTypes = {
  form: PropTypes.object,
};

const User = React.createClass({
  propTypes: {
    form: PropTypes.object,
  },

  userExists(rule, value, callback) {
    setTimeout(() => {
      if (value === '1') {
        callback([new Error('are you kidding?')]);
      } else if (value === 'yiminghe') {
        callback([new Error('forbid yiminghe')]);
      } else {
        callback();
      }
    }, 300);
  },

  render() {
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
    const errors = getFieldError('user');
    return (<div style={ regionStyle }>
      <div>user async validate</div>
      <div>
        <input {...getFieldProps('user', {
          rules: [
            {
              required: true,
              min: 2,
            },
            {
              validator: this.userExists,
            },
          ],
        })}
        />
      </div>
      <div style={errorStyle}>
        {(errors) ? errors.join(',') : null}
      </div>
      <div style={errorStyle}>
        {isFieldValidating('user') ? 'validating' : null}
      </div>
    </div>);
  },
});

class Form extends Component {
  static propTypes = {
    form: PropTypes.object,
  };

  onSubmit = (e) => {
    console.log('submit');
    e.preventDefault();
    this.props.form.validateFields({
      // firstFields: false,
    }, (error, values) => {
      if (!error) {
        console.log('ok', values);
      } else {
        console.log('error', error, values);
      }
    });
  };

  reset = (e) => {
    e.preventDefault();
    this.props.form.resetFields();
  };

  render() {
    const { form } = this.props;
    return (<div style={{ margin: 20 }}>
      <h2>validateFirst</h2>
      <form onSubmit={this.onSubmit}>
        <User form={ form }/>

        <Email form={ form }/>

        <div style={ regionStyle }>
          <button onClick={this.reset}>reset</button>
          &nbsp;
          <input type="submit" value="submit"/>
        </div>
      </form>
    </div>);
  }
}

const NewForm = createForm()(Form);

ReactDOM.render(<NewForm />, document.getElementById('__react-content'));
