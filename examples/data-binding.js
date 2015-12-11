/* eslint react/no-multi-comp:0, no-console:0 */

import { createForm } from 'rc-form';
import React, {Component, PropTypes} from 'react';
import {createRootContainer, createContainer} from 'react-data-binding';
import ReactDOM from 'react-dom';

const region = {
  border: '1px solid red',
  marginTop: 10,
  padding: 10,
};

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
    return (<div style={region}>
      <p>email:</p>
      <p><input {...getFieldProps('email', {
        rules: [{
          type: 'email',
        }],
      })}/></p>
      <p>
        {(errors) ? errors.join(',') : null}
      </p>
    </div>);
  }
}

let Out = React.createClass({
  propTypes: {
    email: PropTypes.object,
    setStoreState: PropTypes.func,
  },

  setEmail() {
    this.props.setStoreState({
      formState: {
        ...this.props.setStoreState().formState,
        email: {
          value: 'yiminghe@gmail.com',
        },
      },
    });
  },

  render() {
    const {email} = this.props;
    return (<div style={region}>
      <p>
        email: {email && email.value}
      </p>
      <button onClick={this.setEmail}>set</button>
    </div>);
  },
});

Out = createContainer((state) => {
  return {
    email: state.formState.email,
  };
})(Out);

@createRootContainer({
  formState: {},
})
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
