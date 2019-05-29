/* eslint-disable react/prop-types */

import React from 'react';
import StateForm from '../src/StateForm';
import Input from './components/Input';

const { Field } = StateForm;

const Error = ({ children }) => (
  <ul style={{ color: 'red' }}>{children.map((error) => <li>{error}</li>)}</ul>
);

export default class Demo extends React.Component {
  onFinish = (values) => {
    console.log('Finish:', values);
  };

  render() {
    return (
      <div>
        <h3>Validate Form</h3>
        <StateForm style={{ padding: 16 }} onFinish={this.onFinish}>
          {(values, form) => {
            const usernameError = form.getFieldError('username');
            const passwordError = form.getFieldError('password');
            const password2Error = form.getFieldError('password2');
            const errors = form.getFieldsError();
            if (errors) {
              console.log('Render with Errors:', values, form.getFieldsError());
            }

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

                <Field
                  name="password"
                  rules={[
                    { required: true },
                    {
                      validator(_, __, callback) {
                        form.validateFields([ 'password2' ]);
                        callback();
                      },
                    },
                  ]}
                >
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

                <Field
                  name="validateTrigger"
                  validateTrigger={[ 'onSubmit', 'onChange' ]}
                  rules={[
                    { required: true, validateTrigger: 'onSubmit' },
                    {
                      validator(rule, value, callback) {
                        if (Number(value).toString() === value) {
                          callback();
                        }
                        callback('Integer number only!');
                      },
                      validateTrigger: 'onChange',
                    },
                  ]}
                >
                  {(control, meta) => {
                    return (
                      <div>
                        Multiple `validateTrigger`:
                        <ul>
                          <li>Required check on submit</li>
                          <li>Number check on change</li>
                        </ul>
                        <Input {...control} placeholder="validateTrigger" />
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
