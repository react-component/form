import React from 'react';
import ReactDOM from 'react-dom';
import { FormScope } from '../src';

class Page extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.formA.setFieldsValue({ field_a: 'this is field_a.' });
      this.formB.setFieldsValue({ field_b: 'this is field_b.' });
    }, 2000);
  }
  resetAll = () => {
    this.formA.resetFields();
    this.formB.resetFields();
  }

  formA
  formB

  render() {
    return (
      <div>
        <FormScope ref={form => this.formA = form}>
          {({ getFieldProps }) => (
            <div>
              Group A
              <input {...getFieldProps('field_a')}/>
              {/* more fields or complex logic */}
            </div>
          )}
        </FormScope>
        <FormScope ref={form => this.formB = form}>
          {({ getFieldProps }) => (
            <div>
              Group B
              <input {...getFieldProps('field_b')}/>
              {/* more fields or complex logic */}
            </div>
          )}
        </FormScope>

        <button onClick={this.resetAll}>Reset All</button>
      </div>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById('__react-content'));
