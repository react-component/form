/* eslint react/no-multi-comp:0, no-console:0 */

import { createForm } from 'rc-form';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { regionStyle, errorStyle } from './styles';

function Email(props) {
  const { getFieldProps, getFieldError } = props.form;
  const errors = getFieldError('email');
  return (<div style={ regionStyle }>
    <div>email sync validate</div>
    <div>
      <input {...getFieldProps('email', {
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
      /></div>
    <div style={errorStyle}>
      {errors ? errors.join(',') : null}
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

  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    const errors = getFieldError('user');
    return (<div style={ regionStyle }>
      <div>user async validate</div>
      <div>
        <input {...getFieldProps('user', {
          rules: [{
            required: true,
          }],
        })}
        />
      </div>
      <div style={errorStyle}>
        {(errors) ? errors.join(',') : null}
      </div>
    </div>);
  },
});

class Form extends Component {
  static propTypes = {
    form: PropTypes.object,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((error, values) => {
      if (!error) {
        console.log('ok', values);
        setTimeout(() => {
          // server validate
          if (values.user === 'yiminghe') {
            this.props.form.setFields({
              user: {
                value: values.user,
                errors: [new Error('forbid ha')],
              },
            });
          }
        }, 500);
      } else {
        console.log('error', error, values);
      }
    });
  };

  render() {
    const { form } = this.props;
    return (<div style={{ margin: 20 }}>
      <h2>setFields</h2>
      <form onSubmit={this.onSubmit}>
        <User form={ form }/>

        <Email form={ form }/>

        <div style={ regionStyle }>
          <button>submit</button>
        </div>
      </form>
    </div>);
  }
}

const NewForm = createForm()(Form);

ReactDOM.render(<NewForm />, document.getElementById('__react-content'));
