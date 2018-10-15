/* eslint react/no-multi-comp:0, no-console:0, react/prefer-stateless-function:0 */

import { createForm, formShape } from 'rc-form';
import React from 'react';
import ReactDOM from 'react-dom';
import { regionStyle, errorStyle } from './styles';

class Form extends React.Component {
  static propTypes = {
    form: formShape,
  };

  componentDidUpdate() {
    console.log('didUpdate');
  }

  setEmail = () => {
    this.props.form.setFieldsValue({
      email: 'yiminghe@gmail.com',
    }, () => console.log('after'));
    console.log('before');
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
        />
      </div>
      <div style={errorStyle}>
        {(errors) ? errors.join(',') : null}
      </div>

      <button onClick={this.setEmail}>set</button>
    </div>);
  }
}

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
