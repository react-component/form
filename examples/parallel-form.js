/* eslint react/no-multi-comp:0, no-console:0, react/prefer-stateless-function:0 */

import { createForm, formShape } from 'rc-form';
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Switch from 'antd/lib/switch';
import 'antd/dist/antd.css';
import { regionStyle } from './styles';

class TopForm extends React.Component {
  static propTypes = {
    form: formShape,
  };
  render() {
    const { getFieldProps } = this.props.form;
    return (<div style={ regionStyle }>
      <div>has email? </div>
      <div>
        <Switch {...getFieldProps('on', {
          initialValue: true,
          valuePropName: 'checked',
        })}
        />
      </div>
    </div>);
  }
}

class BottomForm extends React.Component {
  static propTypes = {
    form: formShape,
    on: PropTypes.bool,
  };
  render() {
    const { form } = this.props;
    const on = form.getFieldValue('on');
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
        />
      </div>
    </div>);
  }
}

class Form extends React.Component {
  static propTypes = {
    form: formShape,
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.props.form.getFieldsValue());
  }
  render() {
    const { form } = this.props;
    return (<div>
      <TopForm form={ form }/>
      <BottomForm form={ form }/>
      <div style={ regionStyle }>
        <button onClick={this.onSubmit}>submit</button>
      </div>
    </div>);
  }
}

Form = createForm()(Form);

class App extends React.Component {
  render() {
    return (<div>
      <h2>parallel form</h2>
      <Form />
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('__react-content'));
