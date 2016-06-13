/* eslint react/no-multi-comp:0, no-console:0 */

import { createForm } from 'rc-form';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { regionStyle } from './styles';
import Switch from 'antd/lib/switch';
import 'antd/dist/antd.css';

const TopForm = React.createClass({
  propTypes: {
    form: PropTypes.object,
  },

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
  },
});

const BottomForm = React.createClass({
  propTypes: {
    form: PropTypes.object,
    on: PropTypes.bool,
  },

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
  },
});

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
