/* eslint react/no-multi-comp:0, no-console:0 */

import createDOMForm from 'rc-form/src/createDOMForm';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { regionStyle } from './styles';

class Form extends Component {
  static propTypes = {
    form: PropTypes.object,
  };

  onSubmit = (e) => {
    console.log('submit');
    e.preventDefault();
    this.props.form.validateFieldsAndScroll({ scroll: { offsetTop: 20 } }, (error, values) => {
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

  render() {
    const { form } = this.props;
    const { getFieldProps } = form;
    getFieldProps('normal', {
      initialValue: 'b',
    });
    return (<div style={{ margin: 20 }}>
      <h2>radio-group</h2>
      <form onSubmit={this.onSubmit}>
        <div style={ regionStyle }>
          <div>radio-group</div>
          <div>
            <label>
              a:
              <input
                type="radio"
                {...getFieldProps('normal.a', {
                  exclusive: true,
                  getValueFromEvent(e) {
                    return e.target.checked ? 'a' : '';
                  },
                  getValueProps(value) {
                    return {
                      checked: value === 'a',
                    };
                  },
                })}
              />
            </label>

            <br/>

            <label>
              b:
              <input
                type="radio"
                {...getFieldProps('normal.b', {
                  exclusive: true,
                  getValueFromEvent(e) {
                    return e.target.checked ? 'b' : '';
                  },
                  getValueProps(value) {
                    return {
                      checked: value === 'b',
                    };
                  },
                })}
              />
            </label>
          </div>
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
