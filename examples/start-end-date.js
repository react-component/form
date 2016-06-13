/* eslint no-console:0 */

import DatePicker from 'antd/lib/date-picker';
import 'antd/dist/antd.css';
import createDOMForm from 'rc-form/src/createDOMForm';
import { regionStyle, errorStyle } from './styles';
import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';

class Form extends Component {
  static propTypes = {
    form: PropTypes.object,
  };

  onSubmit = (e) => {
    console.log('submit');
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((error, values) => {
      if (!error) {
        console.log('ok', values);
      } else {
        console.log('error', error, values);
      }
    });
  };

  reset = (e) => {
    e.preventDefault();
    this.props.form.resetFields();
  };

  checkStart = (rule, value, callback) => {
    const { validateFields } = this.props.form;
    validateFields(['end'], {
      force: true,
    });
    callback();
  };

  checkEnd = (rule, value, callback) => {
    const end = value;
    const { getFieldValue } = this.props.form;
    const start = getFieldValue('start');
    if (!end || !start) {
      callback('please select both start and end time');
    } else if (end.getTime() < start.getTime()) {
      callback('start time should be less than end time');
    } else {
      callback();
    }
  };

  render() {
    const { form } = this.props;
    const { getFieldProps, getFieldError } = form;
    return (<div style={{ margin: 20 }}>
      <h2>startTime and endTime validation</h2>
      <form onSubmit={this.onSubmit}>
        <div style={ regionStyle }>
          <div>start: </div>
          <div>
            <DatePicker {...getFieldProps('start', {
              rules: [this.checkStart],
            })}
            />
          </div>
        </div>

        <div style={ regionStyle }>
          <div>end: </div>
          <div>
            <DatePicker {...getFieldProps('end', {
              rules: [this.checkEnd],
            })}
            />
          </div>
        </div>

        <div style={errorStyle}>
          {getFieldError('end') ? getFieldError('end').join(',') : ''}
        </div>

        <div style={ regionStyle }>
          <button onClick={this.reset}>reset</button>
          &nbsp;
          <input type="submit" value="submit"/>
        </div>
      </form>
    </div>);
  }
}

const NewForm = createDOMForm()(Form);

ReactDOM.render(<NewForm />, document.getElementById('__react-content'));
