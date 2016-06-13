/* eslint react/no-multi-comp:0, no-console:0 */

import { createForm } from 'rc-form';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { regionStyle, errorStyle } from './styles';

const CustomInput = React.createClass({
  propTypes: {
    form: PropTypes.object,
  },
  getInitialState() {
    return {
      data: [],
    };
  },
  checkUpper(rule, value, callback) {
    if (value !== value.toUpperCase()) {
      callback(new Error('need to be upper!'));
    } else {
      callback();
    }
  },
  toUpper(v, prev) {
    if (v === prev) {
      return v;
    }
    return v.toUpperCase();
  },
  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    const errors = getFieldError('upper');
    return (<div style={ regionStyle }>
      <div>upper normalize</div>
      <div>
        <input {...getFieldProps('upper', {
          normalize: this.toUpper,
          rules: [{
            validator: this.checkUpper,
          }],
        })}
        />
      </div>
      <div style={errorStyle}>
        {(errors) ? errors.join(',') : null}
      </div>
    </div>);
  },
});

const MaxMin = React.createClass({
  propTypes: {
    form: PropTypes.object,
  },
  normalizeMin(value, prevValue, allValues) {
    console.log('normalizeMin', allValues.min, allValues.max);
    const previousAllValues = this.props.form.getFieldsValue();
    if (allValues.max !== previousAllValues.max) {
      // max changed
      if (value === '' || Number(allValues.max) < Number(value)) {
        return allValues.max;
      }
    }
    return value;
  },
  normalizeMax(value, prevValue, allValues) {
    console.log('normalizeMax', allValues.min, allValues.max);
    const previousAllValues = this.props.form.getFieldsValue();
    if (allValues.min !== previousAllValues.min) {
      // min changed
      if (value === '' || Number(allValues.min) > Number(value)) {
        return allValues.min;
      }
    }
    return value;
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (<div style={ regionStyle }>
      <div>min: <select
        {...getFieldProps('min', {
          normalize: this.normalizeMin,
          initialValue: '',
        })}
      >
        <option value="">empty</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      </div>
      <div>max: <select
        {...getFieldProps('max', {
          initialValue: '',
          normalize: this.normalizeMax,
        })}
      >
        <option value="">empty</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      </div>
    </div>);
  },
});

class Form extends Component {
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
    const { form } = this.props;
    return (<div style={{ margin: 20 }}>
      <h2>normalize</h2>
      <form onSubmit={this.onSubmit}>
        <CustomInput form={ form }/>

        <MaxMin form={ form }/>

        <div style={ regionStyle }>
          <button>submit</button>
        </div>
      </form>
    </div>);
  }
}

const NewForm = createForm()(Form);

ReactDOM.render(<NewForm />, document.getElementById('__react-content'));
