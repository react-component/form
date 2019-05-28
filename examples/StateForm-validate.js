/* eslint-disable react/prop-types */

import React from 'react';
import StateForm from '../src/StateForm';
import Input from './components/Input';

const { Field } = StateForm;

const Error = ({ children }) => <div style={{ color: 'red' }}>{children}</div>;

export default class Demo extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <h3>Validate Form</h3>
        <StateForm style={{ padding: 16 }}>
          {(values, form) => {
            const usernameError = form.getFieldError('username');
            const passwordError = form.getFieldError('password');
            const password2Error = form.getFieldError('password2');
            console.log('=>', values, form.getFieldsError(), usernameError);

            return (
              <React.Fragment>
                <Field name="username" rules={[ { required: true } ]}>
                  <Input
                    placeholder="Username"
                    onChange={({ target: { value } }) => {
                      console.log('Username change:', value);
                    }}
                  />
                </Field>
                <Error>{usernameError}</Error>

                <Field name="password" rules={[ { required: true } ]}>
                  <Input placeholder="Password" />
                </Field>
                <Error>{passwordError}</Error>

                <Field
                  name="password2"
                  rules={[
                    { required: true },
                    {
                      validator(rule, value, callback, context) {
                        const { password } = context.getFieldsValue();
                        if (password !== value) {
                          callback('Not Same as password1!!!');
                        }
                        callback();
                      },
                    },
                  ]}
                >
                  <Input placeholder="Password 2" />
                </Field>
                <Error>{password2Error}</Error>

                <Field name="renderProps" rules={[ { required: true } ]}>
                  {(control, meta) => {
                    return (
                      <div>
                        Use Meta:
                        <Input {...control} placeholder="render props" />
                        <Error>{meta.errors}</Error>
                      </div>
                    );
                  }}
                </Field>

                <br />

                <button
                  type="button"
                  onClick={() => {
                    form.validateFields();
                  }}
                >
                  Validate All
                </button>

                <button type="submit">Submit</button>
              </React.Fragment>
            );
          }}
        </StateForm>
      </div>
    );
  }
}
