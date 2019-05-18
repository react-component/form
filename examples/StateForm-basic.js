import React from 'react';
import StateForm from '../src/StateForm';

const { Field } = StateForm;

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
    const list = new Array(1).fill();

    return (
      <div>
        <h3>State Form</h3>
        <StateForm>
          {() => {
            return (
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
            );
          }}
        </StateForm>

        <h3>Render Props</h3>
        <StateForm>
          {(store) => {
            return (
              <React.Fragment>
                <Field name="field_1">
                  <CustomizeInput placeholder="Field 1" />
                </Field>
                <Field name="field_1">
                  <CustomizeInput placeholder="Shadow of Field 1" />
                </Field>
                <Field name="field_2">
                  <CustomizeInput placeholder="Field 2" />
                </Field>
                {JSON.stringify(store, null, 2)}
              </React.Fragment>
            );
          }}
        </StateForm>

        {/* <h3>Not State Form</h3>
        <Field>
          <input />
        </Field>
        <Field>
          <input />
        </Field> */}
      </div>
    );
  }
}
