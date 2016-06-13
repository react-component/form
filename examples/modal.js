/* eslint react/no-multi-comp:0, no-console:0 */

import createDOMForm from 'rc-form/src/createDOMForm';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'antd/lib/modal';
import 'antd/dist/antd.css';
import { regionStyle, errorStyle } from './styles';

class Form extends Component {
  static propTypes = {
    form: PropTypes.object,
  };

  constructor() {
    super();
    this.state = {
      visible: false,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((error, values) => {
      if (!error) {
        console.log('ok', values);
      } else {
        console.log('error', error, values);
      }
    });
  };

  onCancel = () => {
    this.setState({
      visible: false,
    });
  };

  open = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    return (<div style={{ margin: 20 }}>
      <h2>modal</h2>
      <Modal
        visible={this.state.visible}
        bodyStyle={{
          height: 200,
          overflow: 'auto',
        }}
        onCancel={this.onCancel}
        title="modal"
      >
        <div ref="dialogContent">
          <form onSubmit={this.onSubmit}>
            <input
              {...getFieldProps('required', {
                rules: [{
                  required: true,
                  message: '必填',
                }],
              })}
            />
            <div style={errorStyle}>
              {getFieldError('required') ? getFieldError('required').join(',') :
                <b style={{ visibility: 'hidden' }}>1</b>}
            </div>
            <div style={{ marginTop: 300 }}>
              <button>submit</button>
            </div>
          </form>
        </div>
      </Modal>
      <div style={ regionStyle }>
        <button onClick={this.open}>open</button>
      </div>
    </div>);
  }
}

const NewForm = createDOMForm()(Form);

ReactDOM.render(<NewForm />, document.getElementById('__react-content'));
