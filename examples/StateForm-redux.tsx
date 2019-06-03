/* eslint-disable react/prop-types */

import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import StateForm from '../src/StateForm';
import Input from './components/Input';
import LabelField from './components/LabelField';

function formReducer(fields = {}, action: any) {
  switch (action.type) {
    case 'updateFields':
      return {
        ...fields,
        ...action.fields,
      };
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
        console.log('changed!', values);
      }}
      onFieldsChange={(changedFields, allFields) => {
        dispatch();
      }}
    >
      <LabelField name="field">
        <Input />
      </LabelField>
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
