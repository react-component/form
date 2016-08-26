/* eslint react/no-multi-comp:0, no-console:0 */

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createForm } from 'rc-form';

class Form extends React.Component {
  static propTypes = {
    form: PropTypes.object,
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((error, values) => {
      if (!error) {
        console.log('ok', values);
      } else {
        console.log('error', error, values);
      }
    });
  }
  render() {
    const { getFormControl, getFieldError } = this.props.form;

    return (
      <form onSubmit={this.onSubmit}>
        {getFormControl(<input onChange={console.log.bind(console)} />, {
          name: 'name',
          initialValue: '',
          rules: [{
            required: true,
            message: 'What\'s your name?',
          }],
        })}
        <div style={{ color: 'red' }}>
          {(getFieldError('name') || []).join(', ')}
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

const WrappedForm = createForm()(Form);
ReactDOM.render(<WrappedForm />, document.getElementById('__react-content'));
