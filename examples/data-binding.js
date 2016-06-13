/* eslint react/no-multi-comp:0, no-console:0 */

import { createForm } from 'rc-form';
import React, { Component, PropTypes } from 'react';
import { createRootContainer, createContainer } from 'react-data-binding';
import ReactDOM from 'react-dom';
import { regionStyle, errorStyle } from './styles';

class Form extends Component {
  static propTypes = {
    form: PropTypes.object,
    formInitialState: PropTypes.object,
  };

  reset = () => {
    this.props.form.resetFields();
  };

  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    const { formInitialState } = this.props;
    const errors = getFieldError('email');
    return (<div style={ regionStyle }>
      <div>email:</div>
      <div>
        <input {...getFieldProps('email', {
          initialValue: formInitialState.email.value,
          rules: [{
            type: 'email',
          }],
        })}
        /></div>
      <div style={errorStyle}>
        {(errors) ? errors.join(',') : null}
      </div>

      <div>
        <button onClick={this.reset}>reset</button>
      </div>
    </div>);
  }
}

let Out = React.createClass({
  propTypes: {
    email: PropTypes.object,
    setStoreState: PropTypes.func,
    getStoreState: PropTypes.func,
  },

  setEmail() {
    this.props.setStoreState({
      formState: {
        ...this.props.getStoreState().formState,
        email: {
          value: 'yiminghe@gmail.com',
        },
      },
    });
  },

  render() {
    const { email } = this.props;
    return (<div style={ regionStyle }>
      <div>
        email: {email && email.value}
      </div>
      <button onClick={this.setEmail}>set</button>
    </div>);
  },
});

Out = createContainer((state) => {
  return {
    email: (state.formState || {}).email,
  };
})(Out);

const NewForm = createContainer((state) => {
  return {
    formState: state.formState,
    formInitialState: state.formInitialState,
  };
})(createForm({
  mapPropsToFields(props) {
    console.log('mapPropsToFields', props);
    return props.formState;
  },
  onFieldsChange(props, fields) {
    console.log('onFieldsChange', fields);
    props.setStoreState({
      formState: {
        ...props.formState,
        ...fields,
      },
    });
  },
})(Form));

class App extends React.Component {
  render() {
    return (<div>
      <h2>integrate with react-data-binding</h2>
      <NewForm />
      <Out />
    </div>);
  }
}

const NewApp = createRootContainer({
  formInitialState: {
    email: {
      value: 'initial@gmail.com',
    },
  },
})(App);

ReactDOM.render(<NewApp />, document.getElementById('__react-content'));
