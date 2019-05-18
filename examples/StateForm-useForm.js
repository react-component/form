import React from 'react';
import StateForm from '../src/StateForm';

const { Field, useForm } = StateForm;

const list = new Array(0).fill();

const Input = (props) => {
  return <input {...props} />;
};

const CustomizeInput = (props) => (
  <div style={{ padding: 10 }}>
    <Input style={{ outline: 'none' }} {...props} />
  </div>
);

export default () => {
  const form = useForm();

  return (
    <div>
      <h3>useForm ({list.length} inputs)</h3>

      <button type="button" onClick={() => {
        form.updateValue('username', 'hello');
      }}>
        Fill Value
      </button>

      <button type="button" onClick={() => {
        form.updateValues({
          username: 'light',
          password: 'bamboo',
        });
      }}>
        Fill Values
      </button>

      <StateForm form={form}>
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
};
