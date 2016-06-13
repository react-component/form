/* eslint react/no-multi-comp:0, no-console:0 */

import { createForm } from 'rc-form';
import React, { PropTypes } from 'react';
import { createRootContainer, createContainer } from 'react-data-binding';
import ReactDOM from 'react-dom';
import { regionStyle } from './styles';
import Switch from 'antd/lib/switch';
import 'antd/dist/antd.css';

const createFormContainer = createContainer((state) => {
  return {
    on: ((state.formState || {}).on || {}).value || false,
  };
});

let TopForm = React.createClass({
  propTypes: {
    form: PropTypes.object,
    on: PropTypes.bool,
  },

  render() {
    const { form, on } = this.props;
    const { getFieldProps } = form;
    return (<div style={ regionStyle }>
      <div>has email? </div>
      <div>
        <Switch {...getFieldProps('on', {
          initialValue: on,
          valuePropName: 'checked',
        })}
        /></div>
    </div>);
  },
});
TopForm = createFormContainer(TopForm);

let BottomForm = React.createClass({
  propTypes: {
    form: PropTypes.object,
    on: PropTypes.bool,
  },

  render() {
    const { form, on } = this.props;
    const style = {
      ...regionStyle,
      display: on ? 'block' : 'none',
    };
    return (<div style={ style }>
      <div>email: </div>
      <div>
        <input {...form.getFieldProps('email', {
          rules: [{
            type: 'email',
          }],
          hidden: !on,
        })}
        /></div>
    </div>);
  },
});

BottomForm = createFormContainer(BottomForm);

let Form = React.createClass({
  propTypes: {
    form: PropTypes.object,
  },
  onSubmit(e) {
    e.preventDefault();
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { form } = this.props;
    return (<div>
      <TopForm form={ form }/>
      <BottomForm form={ form }/>
      <div style={ regionStyle }>
        <button onClick={this.onSubmit}>submit</button>
      </div>
    </div>);
  },
});

Form = createForm({
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
})(Form);

Form = createContainer((state) => {
  return {
    formState: state.formState,
  };
})(Form);

class App extends React.Component {
  render() {
    return (<div>
      <h2>integrate with react-data-binding</h2>
      <Form />
    </div>);
  }
}

const NewApp = createRootContainer({
  formState: {
    on: { value: true },
  },
})(App);

ReactDOM.render(<NewApp />, document.getElementById('__react-content'));
