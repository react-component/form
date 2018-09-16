import React from 'react';
import createDOMForm from './createDOMForm';
import PropTypes from 'prop-types';

class FormScope extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    validateMessages: PropTypes.object,
    onFieldsChange: PropTypes.func,
    onValuesChange: PropTypes.func,
    mapProps: PropTypes.func,
    mapPropsToFields: PropTypes.func,
    fieldNameProp: PropTypes.string,
    fieldMetaProp: PropTypes.string,
    fieldDataProp: PropTypes.string,
    withRef: PropTypes.bool,
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

export default FormScope;
