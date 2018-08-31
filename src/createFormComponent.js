import React from 'react';
import createDOMForm from './createDOMForm';

const FormCreate = ({ children, setRef, ...options }) => {
  const WrappedComponent = createDOMForm(options)(({ form }) => {
    if (setRef) {
      if (typeof setRef === 'function') {
        setRef(form);
      } else if (setRef.current === null) {
        setRef.current = form;
      }
    }
    return children(form);
  });
  return <WrappedComponent />;
};

export default FormCreate;
