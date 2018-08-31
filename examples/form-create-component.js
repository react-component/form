import React from 'react';
import ReactDOM from 'react-dom';
import { FormCreate } from '../src';

class Page extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.formA.current.setFieldsValue({ field_a: 'this is field_a.' });
      this.formB.current.setFieldsValue({ field_b: 'this is field_b.' });
    }, 2000);
  }
  resetAll = () => {
    this.formA.current.resetFields();
    this.formB.current.resetFields();
  }

  formA = React.createRef();
  formB = React.createRef();

  render() {
    return (
      <div>
        <FormCreate setRef={this.formA}>
          {({ getFieldProps }) => (
            <div>
              Group A
              <input {...getFieldProps('field_a')}/>
              {/* more fields or complex logic */}
            </div>
          )}
        </FormCreate>
        <FormCreate setRef={this.formB}>
          {({ getFieldProps }) => (
            <div>
              Group B
              <input {...getFieldProps('field_b')}/>
              {/* more fields or complex logic */}
            </div>
          )}
        </FormCreate>

        <button onClick={this.resetAll}>Reset All</button>
      </div>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById('__react-content'));
