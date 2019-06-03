/* eslint-disable react/prop-types */

import React from 'react';
import StateForm, { FormInstance } from '../src/StateForm';
import Input from './components/Input';
import LabelField from './components/LabelField';

export default class Demo extends React.Component {
  private form: FormInstance;

  public setForm = (form: FormInstance) => {
    this.form = form;
  };

  public onFinish = (values: { password: string }) => {
    console.log('Finish:', values);
  };

  public render() {
    return (
      <div>
        <h3>High Perf Validate Form</h3>
        <StateForm ref={this.setForm} style={{ padding: 16 }} onFinish={this.onFinish}>
          <LabelField name="password" rules={[{ required: true }]}>
            <Input placeholder="password" />
          </LabelField>

          <LabelField
            name="password2"
            dependencies={['password']}
            rules={[
              { required: true },
              {
                validator(_, value, callback, { getFieldValue }) {
                  if (getFieldValue('password') !== value) {
                    callback('password2 is not same as password');
                    return;
                  }
                  callback();
                },
              },
            ]}
          >
            <Input placeholder="password 2" />
          </LabelField>

          <button type="submit">Submit</button>
          <button
            type="button"
            onClick={() => {
              this.form.resetFields();
            }}
          >
            Reset
          </button>
        </StateForm>
      </div>
    );
  }
}
