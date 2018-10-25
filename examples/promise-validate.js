/* eslint no-console:0 */

import { createForm, formShape } from 'rc-form';
import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
  static propTypes = {
    form: formShape,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { validateFields } = this.props.form;
    validateFields()
      .then(console.log)
      .catch(console.error);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <form onSubmit={this.handleSubmit}>
        {getFieldDecorator('name', {
          rules: [{
            required: true,
          }],
        })(<input/>)}
        <button type="submit">submit</button>
      </form>
    );
  }
}

const NewForm = createForm()(Form);

ReactDOM.render(<NewForm />, document.getElementById('__react-content'));
