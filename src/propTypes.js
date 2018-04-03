import PropTypes from 'prop-types';

const formShape = PropTypes.shape({
  getFieldsValue: PropTypes.func,
  getFieldValue: PropTypes.func,
  getFieldInstance: PropTypes.func,
  setFieldsValue: PropTypes.func,
  setFields: PropTypes.func,
  setFieldsInitialValue: PropTypes.func,
  getFieldDecorator: PropTypes.func,
  getFieldProps: PropTypes.func,
  getFieldsError: PropTypes.func,
  getFieldError: PropTypes.func,
  isFieldValidating: PropTypes.func,
  isFieldsValidating: PropTypes.func,
  isFieldsTouched: PropTypes.func,
  isFieldTouched: PropTypes.func,
  isSubmitting: PropTypes.func,
  submit: PropTypes.func,
  validateFields: PropTypes.func,
  resetFields: PropTypes.func,
});

export default formShape;
