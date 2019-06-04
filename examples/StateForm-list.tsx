/* eslint-disable react/prop-types */

import React from 'react';
import StateForm from '../src/StateForm';
import Input from './components/Input';
import LabelField from './components/LabelField';

const { List, useForm } = StateForm;

const Demo = () => {
  const [form] = useForm();

  return (
    <div>
      <StateForm
        form={form}
        onValuesChange={(_, values) => {
          console.log('values:', values);
        }}
      >
        <h3>List of Form</h3>
        <p>You can set Field as List</p>

        <List name="users">
          {(fields, { add, remove }) => {
            return (
              <div>
                <h4>List of `users`</h4>
                {fields.map(field => (
                  <LabelField {...field}>
                    <Input />
                  </LabelField>
                ))}

                <button
                  type="button"
                  onClick={() => {
                    add();
                  }}
                >
                  + New User
                </button>
              </div>
            );
          }}
        </List>
      </StateForm>

      <button
        onClick={() => {
          form.setFieldsValue({
            users: ['light', 'bamboo'],
          });
        }}
      >
        Set out of Form
      </button>
    </div>
  );
};

export default Demo;
