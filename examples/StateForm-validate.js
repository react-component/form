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
            console.log('=>', values, form);

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
