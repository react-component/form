/* eslint react/no-multi-comp:0, no-console:0 */

import { createForm } from 'rc-form';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Select, { Option } from 'antd/lib/select';

import 'antd/dist/antd.css';
import { regionStyle, errorStyle } from './styles';
const emailTpl = ['@gmail.com', '@outlook.com', '@qq.com'];

const CustomInput = React.createClass({
  propTypes: {
    form: PropTypes.object,
  },
  getInitialState() {
    return {
      data: [],
    };
  },
  onChange(v) {
    if (v.indexOf('@') === -1) {
      this.setState({
        data: emailTpl.map(m => v + m),
      });
    } else if (this.state.data.length) {
      this.setState({
        data: [],
      });
    }
  },
  render() {
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
    const errors = getFieldError('select');
    return (<div style={ regionStyle }>
      <div>custom select sync validate</div>
      <div>
        <Select
          placeholder="please select"
          combobox
          filterOption={false}
          style={{
            width: 200,
          }}
          {...getFieldProps('select', {
            onChange: this.onChange,
            rules: [
              {
                type: 'email',
              },
              {
                required: true,
              },
            ],
          })}
        >
          {this.state.data.map((d) => {
            return <Option key={d} value={d}>{d}</Option>;
          })}
        </Select>
      </div>
      <div style={errorStyle}>
        {(errors) ? errors.join(',') :
          <b
            style={{
              visibility: 'hidden',
            }}
          >
            1
          </b>}
      </div>
      <div style={errorStyle}>
        {isFieldValidating('select') ? 'validating' : <b
          style={{
            visibility: 'hidden',
          }}
        >
          1
        </b>}
      </div>
    </div>);
  },
});

class Form extends Component {
  static propTypes = {
    form: PropTypes.object,
  };

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

  render() {
    const { form } = this.props;
    return (<div style={{ margin: 20 }}>
      <h2>suggest</h2>
      <form onSubmit={this.onSubmit}>
        <CustomInput form={ form }/>

        <div style={ regionStyle }>
          <button>submit</button>
        </div>
      </form>
    </div>);
  }
}

const NewForm = createForm()(Form);

ReactDOM.render(<NewForm />, document.getElementById('__react-content'));
