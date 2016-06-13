/* eslint react/no-multi-comp:0, no-console:0 */

import { createForm } from 'rc-form';
import React, { Component, PropTypes } from 'react';
import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { regionStyle, errorStyle } from './styles';

function form(state = {
  email: {
    value: 'x@gmail.com',
  },
}, action) {
  switch (action.type) {
    case 'save_fields':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

class Form extends Component {
  static propTypes = {
    form: PropTypes.object,
  }

  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    const errors = getFieldError('email');
    return (<div style={ regionStyle }>
      <div>email:</div>
      <div>
        <input {...getFieldProps('email', {
          rules: [{
            type: 'email',
          }],
        })}
        /></div>
      <div style={errorStyle}>
        {(errors) ? errors.join(',') : null}
      </div>
    </div>);
  }
}

let Out = React.createClass({
  propTypes: {
    email: PropTypes.object,
    dispatch: PropTypes.func,
  },

  setEmail() {
    this.props.dispatch({
      type: 'save_fields',
      payload: {
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

Out = connect((state) => {
  return {
    email: state.form.email,
  };
})(Out);

const store = createStore(combineReducers({
  form,
}));

const NewForm = connect((state) => {
  return {
    formState: {
      email: state.form.email,
    },
  };
})(createForm({
  mapPropsToFields(props) {
    console.log('mapPropsToFields', props);
    return {
      email: props.formState.email,
    };
  },
  onFieldsChange(props, fields) {
    console.log('onFieldsChange', fields);
    props.dispatch({
      type: 'save_fields',
      payload: fields,
    });
  },
})(Form));

class App extends React.Component {
  render() {
    return (<Provider store={store}>
      <div>
        <h2>integrate with redux</h2>
        <NewForm />
        <Out />
      </div>
    </Provider>);
  }
}

ReactDOM.render(<App />, document.getElementById('__react-content'));
