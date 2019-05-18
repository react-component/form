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
    const list = new Array(1000).fill();

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

        <h3>Not State Form</h3>
        <Field>
          <input />
        </Field>
        <Field>
          <input />
        </Field>
      </div>
    );
  }
}
