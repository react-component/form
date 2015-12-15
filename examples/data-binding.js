/* eslint react/no-multi-comp:0, no-console:0 */

import { createForm } from 'rc-form';
import React, {Component, PropTypes} from 'react';
import {createRootContainer, createContainer} from 'react-data-binding';
import ReactDOM from 'react-dom';
import {regionStyle, errorStyle} from './styles';

@createContainer((state) => {
  return {
    formState: state.formState,
  };
})
@createForm({
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
})
class Form extends Component {
  static propTypes = {
    form: PropTypes.object,
  }

  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    const errors = getFieldError('email');
    return (<div style={regionStyle}>
      <p>email:</p>
      <p><input {...getFieldProps('email', {
        initialValue: 'x',
        rules: [{
          type: 'email',
        }],
      })}/></p>
      <p style={errorStyle}>
        {(errors) ? errors.join(',') : null}
      </p>
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
    const {email} = this.props;
    return (<div style={regionStyle}>
      <p>
        email: {email && email.value}
      </p>
      <button onClick={this.setEmail}>set</button>
    </div>);
  },
});

Out = createContainer((state) => {
  return {
    email: (state.formState || {}).email,
  };
})(Out);

@createRootContainer()
class App extends React.Component {
  render() {
    return (<div>
      <h2>integrate with react-data-binding</h2>
      <Form />
      <Out />
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('__react-content'));
