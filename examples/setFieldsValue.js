/* eslint react/no-multi-comp:0, no-console:0 */

import { createForm } from 'rc-form';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { regionStyle, errorStyle } from './styles';

let Form = React.createClass({
  propTypes: {
    form: PropTypes.object,
  },

  setEmail() {
    this.props.form.setFieldsValue({
      email: 'yiminghe@gmail.com',
    });
  },

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
        />
      </div>
      <div style={errorStyle}>
        {(errors) ? errors.join(',') : null}
      </div>

      <button onClick={this.setEmail}>set</button>
    </div>);
  },
});

Form = createForm()(Form);

class App extends React.Component {
  render() {
    return (<div>
      <h2>setFieldsValue</h2>
      <Form />
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('__react-content'));
