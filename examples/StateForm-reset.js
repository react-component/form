/* eslint-disable react/prop-types */
import React from 'react';
import StateForm from '../src/StateForm';
import Input from './components/Input';

const { Field } = StateForm;

function Item({ children, ...restProps }) {
  return (
    <Field {...restProps}>
      {(control, meta) => {
        return (
          <div>
            <div>{React.cloneElement(children, { ...control })}</div>

            {meta.touched && 'touched!'}
            {meta.validating && 'validating!'}
            {meta.errors}
          </div>
        );
      }}
    </Field>
  );
}

const Demo = () => {
  const [form] = StateForm.useForm();
  return (
    <div>
      <h3>Reset / Set Form</h3>
      <StateForm form={form} initialValues={{ username: 'strange', path1: { path2: '233' } }}>
        <Item name="username" rules={[{ required: true }]}>
          <Input placeholder="Username" />
        </Item>
        <Item name="password" rules={[{ required: true }]}>
          <Input placeholder="Password" />
        </Item>
        <Item name={['path1', 'path2']} rules={[{ required: true }]}>
          <Input placeholder="nest" />
        </Item>
        <button
          type="button"
          onClick={() => {
            form.resetFields(['password']);
          }}
        >
          Reset Password
        </button>
        <button
          type="button"
          onClick={() => {
            form.resetFields();
          }}
        >
          Reset All
        </button>
        <button
          type="button"
          onClick={() => {
            form.setFields([
              { name: 'password', value: 'ERROR ME', touched: false, errors: ['Good for you!', 'Good for me!'] },
            ]);
          }}
        >
          Set Password with Errors
        </button>
      </StateForm>
    </div>
  );
};

export default Demo;
