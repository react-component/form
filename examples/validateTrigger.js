/* eslint react/no-multi-comp:0, no-console:0 */

import {createForm} from 'rc-form';
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {regionStyle, errorStyle} from './styles';

function Email(props) {
  const {getFieldProps, getFieldError, isFieldValidating} = props.form;
  const errors = getFieldError('email');
  return (<div style={regionStyle}>
    <p>email validate onBlur</p>
    <p><input {...getFieldProps('email', {
      rules: [
        {required: true},
        {type: 'email', message: '错误的 email 格式'},
      ],
      validateTrigger: 'onBlur',
    })}/></p>
    <p style={errorStyle}>
      {errors ? errors.join(',') : null}
    </p>
    <p style={errorStyle}>
      {isFieldValidating('email') ? 'validating' : null}
    </p>
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
    const {getFieldProps, getFieldError, isFieldValidating} = this.props.form;
    const errors = getFieldError('user');
    return (<div style={regionStyle}>
      <p>user validate on submit</p>
      <p><input {...getFieldProps('user', {
        rules: [
          {required: true},
          {type: 'string', min: 5},
        ],
        validateTrigger: null,
      })}/></p>
      <p style={errorStyle}>
        {(errors) ? errors.join(',') : null}
      </p>
      <p style={errorStyle}>
        {isFieldValidating('user') ? 'validating' : null}
      </p>
    </div>);
  },
});

@createForm()
class Form extends Component {
  static propTypes = {
    form: PropTypes.object,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((error, values)=> {
      if (!error) {
        console.log('ok', values);
      } else {
        console.log('error', error, values);
      }
    });
  };

  render() {
    const {form} = this.props;
    return (<div style={{margin: 20}}>
      <h2>use validateTrigger config</h2>
      <form onSubmit={this.onSubmit}>
        <User form={form}/>

        <Email form={form}/>

        <div style={regionStyle}>
          <button>submit</button>
        </div>
      </form>
    </div>);
  }
}

ReactDOM.render(<Form />, document.getElementById('__react-content'));
