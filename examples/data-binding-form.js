/* eslint react/no-multi-comp:0, no-console:0 */

import { createForm } from 'rc-form';
import React, {PropTypes} from 'react';
import {createRootContainer, createContainer} from 'react-data-binding';
import ReactDOM from 'react-dom';
import {regionStyle} from './styles';
import Switch from 'antd/lib/switch';
import 'antd/lib/index.css';

const TopForm = React.createClass({
  propTypes: {
    form: PropTypes.object,
  },

  render() {
    const { getFieldProps } = this.props.form;
    return (<div style={regionStyle}>
      <p>has email? </p>
      <p><Switch {...getFieldProps('on', {
        initialValue: true,
        valuePropName: 'checked',
      })}/></p>
    </div>);
  },
});

let BottomForm = React.createClass({
  propTypes: {
    form: PropTypes.object,
    on: PropTypes.bool,
  },

  render() {
    const {form, on} = this.props;
    const style = {
      ...regionStyle,
      display: on ? 'block' : 'none',
    };
    return (<div style={style}>
      <p>email: </p>
      <p><input {...form.getFieldProps('email', {
        rules: [{type: 'email'}],
        hidden: !on,
      })}/></p>
    </div>);
  },
});

BottomForm = createContainer((state) => {
  return {
    on: ((state.formState || {}).on || {}).value || false,
  };
})(BottomForm);

let Form = React.createClass({
  propTypes: {
    form: PropTypes.object,
  },
  onSubmit(e) {
    e.preventDefault();
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const {form} = this.props;
    return (<div>
      <TopForm form={form}/>
      <BottomForm form={form}/>
      <div style={regionStyle}>
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

@createRootContainer()
class App extends React.Component {
  render() {
    return (<div>
      <h2>integrate with react-data-binding</h2>
      <Form />
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('__react-content'));
