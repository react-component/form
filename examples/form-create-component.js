import React from 'react';
import ReactDOM from 'react-dom';
import { FormCreate } from '../src';

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

  formA;
  formB;

  render() {
    return (
      <div>
        <FormCreate>
          {form => {
            this.formA = form;
            return (
              <div>
                Group A
                <input {...form.getFieldProps('field_a')}/>
                {/* more fields or complex logic */}
              </div>
            );
          }}
        </FormCreate>
        <FormCreate>
          {form => {
            this.formB = form;
            return (
              <div>
                Group B
                <input {...form.getFieldProps('field_b')}/>
                {/* more fields or complex logic */}
              </div>
            );
          }}
        </FormCreate>

        <button onClick={this.resetAll}>Reset All</button>
      </div>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById('__react-content'));
