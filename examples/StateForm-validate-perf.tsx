/* eslint-disable react/prop-types */

import React from 'react';
import StateForm, { FormInstance } from '../src/StateForm';
import Input from './components/Input';

const { Field } = StateForm;

const Error = ({ children }) => (
  <ul style={{ color: 'red' }}>
    {children.map(error => (
      <li>{error}</li>
    ))}
  </ul>
);

const FieldState = ({ form, name }: { form: FormInstance; name: string }) => {
  const touched = form.isFieldTouched(name);
  const validating = form.isFieldValidating(name);

  return (
    <div style={{ color: 'green', position: 'absolute', marginTop: -35, left: 200 }}>
      {touched ? <span>Touched!</span> : null}
      {validating ? <span>Validating!</span> : null}
    </div>
  );
};

export default class Demo extends React.Component {
  private form: FormInstance;

  public setForm = (form: FormInstance) => {
    this.form = form;
  };

  public onFinish = (values: { password: string }) => {
    console.log('Finish:', values);
  };

  public render() {
    return (
      <div>
        <h3>High Perf Validate Form</h3>
        <StateForm ref={this.setForm} style={{ padding: 16 }} onFinish={this.onFinish}>
          <Field name="password" rules={[{ required: true }]}>
            {(control, meta, form) => {
              return (
                <div>
                  <Input {...control} placeholder="password" />
                  <FieldState form={form} name="password" />
                  <Error>{meta.errors}</Error>
                </div>
              );
            }}
          </Field>

          <Field
            name="password2"
            dependencies={['password']}
            rules={[
              { required: true },
              {
                validator(_, value, callback, { getFieldValue }) {
                  if (getFieldValue('password') !== value) {
                    callback('password2 is not same as password');
                    return;
                  }
                  callback();
                },
              },
            ]}
          >
            {(control, meta, form) => {
              return (
                <div>
                  <Input {...control} placeholder="password 2" />
                  <FieldState form={form} name="password2" />
                  <Error>{meta.errors}</Error>
                </div>
              );
            }}
          </Field>

          <Field name="renderProps" rules={[{ required: true }]}>
            {(control, meta, form) => {
              return (
                <div>
                  <Input {...control} placeholder="render props" />
                  <FieldState form={form} name="renderProps" />
                  <Error>{meta.errors}</Error>
                </div>
              );
            }}
          </Field>

          <button type="submit">Submit</button>
          <button
            type="button"
            onClick={() => {
              this.form.resetFields();
            }}
          >
            Reset
          </button>
        </StateForm>
      </div>
    );
  }
}
