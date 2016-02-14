import createBaseForm from './createBaseForm';

export const mixin = {
  getForm() {
    return {
      getFieldsValue: this.getFieldsValue,
      getFieldValue: this.getFieldValue,
      setFieldsValue: this.setFieldsValue,
      setFields: this.setFields,
      setFieldsInitialValue: this.setFieldsInitialValue,
      getFieldProps: this.getFieldProps,
      getFieldError: this.getFieldError,
      isFieldValidating: this.isFieldValidating,
      isFieldsValidating: this.isFieldsValidating,
      isSubmitting: this.isSubmitting,
      submit: this.submit,
      validateFields: this.validateFields,
      resetFields: this.resetFields,
    };
  },
};

function createForm(options) {
  return createBaseForm(options, [mixin]);
}

export default createForm;
