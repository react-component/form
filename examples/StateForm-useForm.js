import React from 'react';
import StateForm from '../src/StateForm';
import Input from './components/Input';

const { Field, useForm } = StateForm;

const list = new Array(0).fill();

export default () => {
  const [form] = useForm();

  return (
    <div>
      <h3>useForm ({list.length} inputs)</h3>

      <button type="button" onClick={() => {
        form.setFieldsValue({
          username: 'light',
          password: 'bamboo',
        });
      }}>
        Fill Values
      </button>

      <StateForm form={form}>
        <React.Fragment>
          <Field name="username">
            <Input placeholder="Username" />
          </Field>
          <Field name="password">
            <Input placeholder="Password" />
          </Field>
          <Field name="username">
            <Input placeholder="Shadow of Username" />
          </Field>
          <Field name={[ 'path1', 'path2' ]}>
            <Input placeholder="nest" />
          </Field>

          {list.map((_, index) => (
            <Field key={index} name={`field_${index}`}>
              <Input placeholder={`field_${index}`} />
            </Field>
          ))}
        </React.Fragment>
      </StateForm>
    </div>
  );
};
