import React from 'react';
import createDOMForm from './createDOMForm';

const FormCreate = ({ children, ...options }) => {
  const WrappedComponent = createDOMForm(options)(({ form }) => children(form));
  return <WrappedComponent />;
};

export default FormCreate;
