/* eslint react/no-multi-comp:0, no-console:0 */

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createForm } from 'rc-form';

class Form extends React.Component {
  static propTypes = {
    form: PropTypes.object,
  };

  componentWillMount() {
    this.nameDecorator = this.props.form.getFieldDecorator('name', {
      initialValue: '',
      rules: [{
        required: true,
        message: 'What\'s your name?',
      }],
    });
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
  };

  onChange(e) {
    console.log(e.target.value);
  }

  render() {
    const { getFieldError } = this.props.form;

    return (
      <form onSubmit={this.onSubmit}>
        {this.nameDecorator(
          <input
            onChange={this.onChange}
          />
        )}
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
