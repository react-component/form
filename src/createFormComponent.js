import React from 'react';
import createDOMForm from './createDOMForm';

class FormCreate extends React.Component {
  constructor(props) {
    super(props);
    this.create(props);
  }

  WrappedComponent

  create = ({ children, ...options }) => {
    this.WrappedComponent = createDOMForm(options)(({ form }) => children(form));
  }

  render() {
    return <this.WrappedComponent />;
  }
}

export default FormCreate;
