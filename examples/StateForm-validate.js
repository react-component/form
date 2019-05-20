import React from 'react';
import StateForm from '../src/StateForm';
import Input from './components/Input';

const { Field } = StateForm;

export default class Demo extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <h3>Validate Form</h3>
        <StateForm>
          {(values, form) => {
            const usernameError = form.getFieldError('username');
            console.log('=>', values, form.getFieldsError(), usernameError);

            return (
              <React.Fragment>
                <Field
                  name="username"
                  rules={[ { required: true }, { required: true, message: 'Hello world!' } ]}
                >
                  <Input
                    placeholder="Username"
                    onChange={({ target: { value } }) => {
                      console.log('Username change:', value);
                    }}
                  />
                </Field>
                <Field name="password">
                  <Input placeholder="Password" />
                </Field>
                <Field name="password2">
                  <Input placeholder="Password 2" />
                </Field>

                <button type="button">Validate All</button>
              </React.Fragment>
            );
          }}
        </StateForm>
      </div>
    );
  }
}
