/* eslint react/no-multi-comp:0, no-console:0 */

import {createForm} from 'rc-form';
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {regionStyle, errorStyle} from './styles';

function Email(props) {
  const {hidden, form} = props;
  const {getFieldProps, getFieldError, isFieldValidating} = form;
  const errors = getFieldError('email');
  const style = {
    ...regionStyle,
    display: hidden ? 'none' : '',
  };
  return (<div style={style}>
    <p>email: <input {...getFieldProps('email', {
      rules: [
        {required: true},
        {type: 'email', message: '错误的 email 格式'},
      ],
      hidden,
    })}/></p>

    {errors ? <p style={errorStyle}>{errors.join(',')}</p> : null}

    {isFieldValidating('email') ? <p style={errorStyle}>validating</p> : null}
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
      <p>user: <input {...getFieldProps('user', {
        initialValue: 'x',
        rules: [
          {required: true},
        ],
      })}/></p>
      {errors ? <p style={errorStyle}>{errors.join(',')}</p> : null}

      {isFieldValidating('user') ? <p style={errorStyle}>validating</p> : null}
    </div>);
  },
});

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
    const {getFieldProps, getFieldValue} = form;
    return (<div style={{margin: 20}}>
      <h2>overview</h2>
      <form onSubmit={this.onSubmit}>
        <div style={regionStyle}>
          <p>
            <label>remove/add user: <input type="checkbox" {...getFieldProps('remove_user', {
              // initialValue:true,
              valuePropName: 'checked',
            })}/></label>
          </p>
        </div>

        {getFieldValue('remove_user') ? null : <User form={form}/>}

        <div style={regionStyle}>
          <p>
            <label>hide/show email: <input type="checkbox" {...getFieldProps('hide_email', {
              // initialValue:true,
              valuePropName: 'checked',
            })}/></label>
          </p>
        </div>

        <Email form={form} hidden={!!getFieldValue('hide_email')}/>

        <div style={regionStyle}>
          <button>submit</button>
        </div>
      </form>
    </div>);
  }
}

const NewForm = createForm()(Form);

ReactDOM.render(<NewForm />, document.getElementById('__react-content'));
