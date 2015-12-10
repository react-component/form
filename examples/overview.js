/* eslint react/no-multi-comp:0, no-console:0 */

import {createForm} from 'rc-form';
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Select, {Option} from 'rc-select';
import 'rc-select/assets/index.css';

const region = {
  border: '1px solid red',
  marginTop: 10,
  padding: 10,
};

function Email(props) {
  const {getFieldProps, getFieldError, isFieldValidating} = props.form;
  const errors = getFieldError('email');
  return (<div style={region}>
    <p>email sync validate</p>
    <p><input {...getFieldProps('email', {
      rules: [
        {required: true},
        {type: 'email', message: '错误的 email 格式'},
      ],
    })}/></p>
    <p>
      {errors ? errors.join(',') : null}
    </p>
    <p>
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
    const {getFieldProps, getFieldError, isFieldValidating} = this.props.form;
    const errors = getFieldError('user');
    return (<div style={region}>
      <p>user async validate</p>
      <p><input {...getFieldProps('user', {
        initialValue: 'x',
        rules: [
          {required: true},
          {validator: this.userExists},
        ],
      })}/></p>
      <p>
        {(errors) ? errors.join(',') : null}
      </p>
      <p>
        {isFieldValidating('user') ? 'validating' : null}
      </p>
    </div>);
  },
});

function CustomInput(props) {
  const {getFieldProps, getFieldError, isFieldValidating} = props.form;
  const errors = getFieldError('select');
  return (<div style={region}>
    <p>rc-select sync validate</p>
    <p><Select placeholder="please select" style={{width: 200}} {...getFieldProps('select', {
      rules: [
        {required: true},
      ],
    })}>
      <Option value="1">1</Option>
      <Option value="2">2</Option>
    </Select></p>
    <p>
      {(errors) ? errors.join(',') : null}
    </p>
    <p>
      {isFieldValidating('select') ? 'validating' : null}
    </p>
  </div>);
}

CustomInput.propTypes = {
  form: PropTypes.object,
};

@createForm()
class Form extends Component {
  static propTypes = {
    form: PropTypes.object,
  }

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((error, values)=> {
      if (!error) {
        console.log('ok', values);
      } else {
        console.log('error', error, values);
      }
    });
  }

  render() {
    const {form} = this.props;
    const {getFieldProps} = form;
    return (<div style={{margin: 20}}>
      <h2>overview</h2>
      <form onSubmit={this.onSubmit}>
        <div style={region}>
          <p>normal input, no validate</p>
          <p>
            <input {...getFieldProps('normal')}/>
          </p>
        </div>

        <User form={form}/>

        <Email form={form}/>

        <CustomInput form={form}/>

        <div style={region}>
          <button>submit</button>
        </div>
      </form>
    </div>);
  }
}


ReactDOM.render(<Form />, document.getElementById('__react-content'));
