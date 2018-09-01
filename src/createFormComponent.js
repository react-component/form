import React from 'react';
import createDOMForm from './createDOMForm';
import PropTypes from 'prop-types';

class FormCreate extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };
  render() {
    const { children, ...options } = this.props;
    const WrappedComponent = createDOMForm(options)(({ form }) => {
      Object.assign(this, form);
      return children(form);
    });
    return <WrappedComponent />;
  }
}

export default FormCreate;
