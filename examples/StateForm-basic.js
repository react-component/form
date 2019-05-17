import React from 'react';
import StateForm from '../src/StateForm';

const { Field } = StateForm;

export default class Demo extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <h3>State Form</h3>
        <StateForm>
          {() => {
            return (
              <React.Fragment>
                <Field name="username">
                  <input placeholder="Username" />
                </Field>
                <Field name="password">
                  <input placeholder="Password" />
                </Field>
                <Field name={['path1', 'path2']}>
                  <input placeholder="nest" />
                </Field>
              </React.Fragment>
            );
          }}
        </StateForm>

        <h3>Not State Form</h3>
        <Field>
          <input />
        </Field>
      </div>
    );
  }
}
