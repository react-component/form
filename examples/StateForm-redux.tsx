/* eslint-disable react/prop-types */

import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import StateForm from '../src/StateForm';
import Input from './components/Input';
import LabelField from './components/LabelField';

function formReducer(fields = [], action: any) {
  switch (action.type) {
    case 'updateFields':
      return [...action.fields];
    default:
      return fields;
  }
}

const store = createStore(formReducer);

let App: any = ({ dispatch, fields }) => {
  console.log('=>', fields);

  return (
    <StateForm
      fields={fields}
      onValuesChange={values => {
        console.log('Value Change:', values);
      }}
      onFieldsChange={(changedFields, allFields) => {
        console.log('Field Change:', changedFields, allFields);
        dispatch({
          type: 'updateFields',
          fields: allFields,
        });
      }}
    >
      <h3>Redux Form</h3>
      <p>It's no need to put data into redux store. But you can still do this.</p>

      <LabelField name="field">
        <Input />
      </LabelField>

      <button onClick={() => {
        dispatch({
          type: 'updateFields',
          fields: [{
            name: 'field',
            value: 'redux it!',
          }],
        });
      }}>dispatch to change</button>
    </StateForm>
  );
};
App = connect((fields: any) => ({ fields }))(App);

const Demo = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Demo;
