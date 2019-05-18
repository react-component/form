import React from 'react';
import StateForm from '../src/StateForm';

const { Field } = StateForm;

const list = new Array(1111).fill();

const Input = (props) => {
  return <input {...props} />;
};

const CustomizeInput = (props) => (
  <div style={{ padding: 10 }}>
    <Input style={{ outline: 'none' }} {...props} />
  </div>
);

export default class Demo extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <h3>State Form ({list.length} inputs)</h3>
        <StateForm>
          <React.Fragment>
            <Field name="username">
              <CustomizeInput placeholder="Username" />
            </Field>
            <Field name="password">
              <CustomizeInput placeholder="Password" />
            </Field>
            <Field name="username">
              <CustomizeInput placeholder="Shadow of Username" />
            </Field>
            <Field name={[ 'path1', 'path2' ]}>
              <CustomizeInput placeholder="nest" />
            </Field>

            {list.map((_, index) => (
              <Field name={`field_${index}`}>
                <CustomizeInput placeholder={`field_${index}`} />
              </Field>
            ))}
          </React.Fragment>
        </StateForm>
      </div>
    );
  }
}
