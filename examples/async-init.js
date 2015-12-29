/* eslint react/no-multi-comp:0, no-console:0 */

import {createForm} from 'rc-form';
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {regionStyle, errorStyle} from './styles';

const Email = React.createClass({
  propTypes: {
    form: PropTypes.object,
  },

  getInitialState() {
    return {
      initialValue: '',
      loading: true,
    };
  },

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        initialValue: 'x@gmail.com',
        loading: false,
      });
    }, 500);
  },

  render() {
    if (this.state.loading) {
      return null;
    }
    const {getFieldProps, getFieldError, isFieldValidating} = this.props.form;
    const errors = getFieldError('email');
    return (<div style={regionStyle}>
      <p>email validate onBlur</p>
      <p><input {...getFieldProps('email', {
        rules: [
          {required: true},
          {type: 'email', message: '错误的 email 格式'},
        ],
        initialValue: this.state.initialValue,
        validateTrigger: 'onBlur',
      })}/></p>
      <p style={errorStyle}>
        {errors ? errors.join(',') : null}
      </p>
      <p>
        {isFieldValidating('email') ? 'validating' : null}
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
      <h2>async init field</h2>
      <form onSubmit={this.onSubmit}>
        <Email form={form}/>

        <div style={regionStyle}>
          <button>submit</button>
        </div>
      </form>
    </div>);
  }
}

ReactDOM.render(<Form />, document.getElementById('__react-content'));
