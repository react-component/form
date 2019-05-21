/* eslint-disable react/prop-types */

import React from 'react';
import StateForm from '../src/StateForm';
import Input from './components/Input';

const { Field } = StateForm;

const Change = ({ changed }) => <div>{changed ? '123' : 'abc'}</div>;

export default class Demo extends React.Component {
  state = {
    changed: false,
  };

  render() {
    const { changed } = this.state;
    return (
      <div>
        <h3>Validate Form</h3>
        <button
          type="button"
          onClick={() => {
            this.setState({ changed: !changed });
          }}
        >
          Change String
        </button>
        <StateForm>
          {(values, form) => {
            const usernameError = form.getFieldError('username');
            const passwordError = form.getFieldError('password');
            const password2Error = form.getFieldError('password2');
            console.log('=>', values, form.getFieldsError(), usernameError);

            return (
              <div style={{ padding: 16 }}>
                <Field name="username" rules={[ { required: true } ]}>
                  <Input
                    placeholder="Username"
                    onChange={({ target: { value } }) => {
                      console.log('Username change:', value);
                    }}
                  />
                </Field>
                {usernameError}

                <Field name="password" rules={[ { required: true } ]}>
                  <Input placeholder="Password" />
                </Field>
                {passwordError}

                <Field name="password2" rules={[ { required: true } ]}>
                  <Input placeholder="Password 2" />
                </Field>
                {password2Error}

                <Change changed={changed} />
                <Field name="renderProps" rules={[ { required: true } ]}>
                  {(control) => {
                    return (
                      <div>
                        <Change changed={changed} />
                        <Input {...control} placeholder="render props" />
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
              </div>
            );
          }}
        </StateForm>
      </div>
    );
  }
}
