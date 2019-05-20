import React from 'react';

const Input = (props) => {
  return <input {...props} />;
};

const CustomizeInput = (props) => (
  <div style={{ padding: 10 }}>
    <Input style={{ outline: 'none' }} {...props} />
  </div>
);

export default CustomizeInput;
