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
      <h3>List of Form</h3>
      <p>You can set Field as List</p>

      <StateForm
        form={form}
        onValuesChange={(_, values) => {
          console.log('values:', values);
        }}
        style={{ border: '1px solid red', padding: 15 }}
      >
        <List name="users">
          {(fields, { add, remove }) => {
            return (
              <div>
                <h4>List of `users`</h4>
                {fields.map((field, index) => (
                  <LabelField {...field}>
                    {control => (
                      <div style={{ position: 'relative' }}>
                        <Input {...control} />
                        <a style={{ position: 'absolute', top: 12, right: -300 }} onClick={() => {
                          remove(index);
                        }}>
                          Remove
                        </a>
                      </div>
                    )}
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
                <button
                  type="button"
                  onClick={() => {
                    remove(1);
                  }}
                >
                  Remove index: 1
                </button>
              </div>
            );
          }}
        </List>
      </StateForm>

      <div style={{ border: '1px solid #000', padding: 15 }}>
        <h4>Out Of Form</h4>
        <button
          onClick={() => {
            form.setFieldsValue({
              users: ['light', 'bamboo'],
            });
          }}
        >
          Set List Value
        </button>
      </div>
    </div>
  );
};

export default Demo;
