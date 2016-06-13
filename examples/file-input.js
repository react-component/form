/* eslint react/no-multi-comp:0, no-console:0 */

import { createForm } from 'rc-form';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { regionStyle, errorStyle } from './styles';

function getFileValueProps(value) {
  if (value && value.target) {
    return {
      value: value.target.value,
    };
  }
  return {
    value,
  };
}

function getValueFromFileEvent({ target }) {
  return {
    target,
  };
}

let Form = React.createClass({
  propTypes: {
    form: PropTypes.object,
  },

  onSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((error, values) => {
      console.log(error, values);
      if (!error) {
        const data = new FormData();
        data.append('file', values.attachment.target.files[0]);
        fetch('/post.htm', {
          method: 'post',
          body: data,
        });
      }
    });
  },

  checkSize(rule, value, callback) {
    if (value && value.target) {
      const files = value.target.files;
      if (files[0]) {
        callback(files[0].size > 1000000 ? 'file size must be less than 1M' : undefined);
      } else {
        callback();
      }
    } else {
      callback();
    }
  },

  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    const errors = getFieldError('attachment');
    return (<div
      style={ regionStyle }
    >
      <div>attachment:</div>
      <div>
        <input type="file" {...getFieldProps('attachment', {
          getValueProps: getFileValueProps,
          getValueFromEvent: getValueFromFileEvent,
          rules: [this.checkSize],
        })}
        />
      </div>
      <div style={errorStyle}>
        {(errors) ? errors.join(',') : null}
      </div>
      <button onClick={this.onSubmit}>submit</button>
    </div>);
  },
});

Form = createForm()(Form);

class App extends React.Component {
  render() {
    return (<div>
      <h2>input[type="file"]</h2>
      <Form />
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('__react-content'));
