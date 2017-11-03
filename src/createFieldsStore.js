import set from 'lodash/set';
import createFormField, { isFormField } from './createFormField';
import {
  flattenFields,
  getErrorStrs,
} from './utils';

class FieldsStore {
  constructor(fields) {
    this.fields = flattenFields(fields, this.isFieldTypeLeaf);
    this.fieldsMeta = {};
  }

  updateFields(fields) {
    this.fields = flattenFields(fields, this.isFieldTypeLeaf);
  }

  isFieldTypeLeaf(_, node) {
    return isFormField(node);
  }

  flattenRegisteredFields(fields) {
    const validFieldsName = this.getValidFieldsName();
    return flattenFields(fields, path => validFieldsName.includes(path));
  }

  setFields(fields) {
    const fieldsMeta = this.fieldsMeta;
    const nowFields = {
      ...this.fields,
      ...fields,
    };
    const nowValues = {};
    Object.keys(fieldsMeta)
      .forEach((f) => nowValues[f] = this.getValueFromFields(f, nowFields));
    Object.keys(nowValues).forEach((f) => {
      const value = nowValues[f];
      const fieldMeta = fieldsMeta[f];
      if (fieldMeta && fieldMeta.normalize) {
        const nowValue =
                fieldMeta.normalize(value, this.getValueFromFields(f, this.fields), nowValues);
        if (nowValue !== value) {
          nowFields[f] = {
            ...nowFields[f],
            value: nowValue,
          };
        }
      }
    });
    this.fields = nowFields;
  }
  resetFields(ns) {
    const newFields = {};
    const { fields } = this;
    const names = ns || Object.keys(fields);
    names.forEach((name) => {
      const field = fields[name];
      if (field && 'value' in field) {
        newFields[name] = {};
      }
    });
    return newFields;
  }
  getValueFromFieldsInternal(name, fields) {
    const field = fields[name];
    if (field && 'value' in field) {
      return field.value;
    }
    const fieldMeta = this.fieldsMeta[name];
    return fieldMeta && fieldMeta.initialValue;
  }
  getValueFromFields(name, fields) {
    return this.getValueFromFieldsInternal(name, fields);
  }
  getAllValues = () => {
    const { fieldsMeta, fields } = this;
    return Object.keys(fieldsMeta)
      .reduce((acc, name) => set(acc, name, this.getValueFromFieldsInternal(name, fields)), {});
  }

  getValidFieldsName() {
    const { fieldsMeta } = this;
    return fieldsMeta ? Object.keys(fieldsMeta) : [];
  }

  getFieldValuePropValue(fieldMeta) {
    const { name, getValueProps, valuePropName } = fieldMeta;
    const field = this.getField(name);
    const fieldValue = 'value' in field ?
      field.value : fieldMeta.initialValue;
    if (getValueProps) {
      return getValueProps(fieldValue);
    }
    return { [valuePropName]: fieldValue };
  }

  getField(name) {
    return {
      ...this.fields[name],
      name,
    };
  }

  getNotCollectedFields() {
    return this.getValidFieldsName()
      .filter(name => !this.fields[name])
      .map(name => ({
        name,
        dirty: false,
        value: this.fieldsMeta[name].initialValue,
      }))
      .reduce((acc, field) => set(acc, field.name, createFormField(field)), {});
  }

  getAllFields() {
    return Object.keys(this.fields)
      .reduce(
        (acc, name) => set(acc, name, createFormField(this.fields[name])),
        this.getNotCollectedFields()
      );
  }

  getFieldMember(name, member) {
    return this.getField(name)[member];
  }

  getFieldsValue = (names) => {
    const fields = names || this.getValidFieldsName();
    const allValues = {};
    fields.forEach((f) => {
      set(allValues, f, this.getFieldValue(f));
    });
    return allValues;
  }

  getFieldValue = (name) => {
    const { fields } = this;
    return this.getValueFromFields(name, fields);
  }

  getFieldsError = (names) => {
    const fields = names || this.getValidFieldsName();
    const allErrors = {};
    fields.forEach((f) => {
      set(allErrors, f, this.getFieldError(f));
    });
    return allErrors;
  }
  getFieldError = (name) => {
    return getErrorStrs(this.getFieldMember(name, 'errors'));
  }

  getFieldMeta(name) {
    if (!this.fieldsMeta[name]) {
      this.fieldsMeta[name] = {};
    }
    return this.fieldsMeta[name];
  }

  setFieldMeta(name, meta) {
    this.fieldsMeta[name] = meta;
  }

  setFieldsInitialValue = (initialValues) => {
    const fieldsMeta = this.fieldsMeta;
    Object.keys(initialValues).forEach(name => {
      if (fieldsMeta[name]) {
        fieldsMeta[name] = {
          ...fieldsMeta[name],
          initialValue: initialValues[name],
        };
      }
    });
  }

  isFieldValidating = (name) => {
    return this.getFieldMember(name, 'validating');
  }

  isFieldsValidating = (ns) => {
    const names = ns || this.getValidFieldsName();
    return names.some((n) => {
      return this.isFieldValidating(n);
    });
  }

  isFieldTouched = (name) => {
    return this.getFieldMember(name, 'touched');
  }

  isFieldsTouched = (ns) => {
    const names = ns || this.getValidFieldsName();
    return names.some((n) => {
      return this.isFieldTouched(n);
    });
  }

  clearField(name) {
    delete this.fields[name];
    delete this.fieldsMeta[name];
  }
}

export default function createFieldsStore(fields) {
  return new FieldsStore(fields);
}
