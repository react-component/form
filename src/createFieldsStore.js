import set from 'lodash/set';
import { isFormField } from './createFormField';
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
  getUndirtyFields() {
    const undirtyFields = Object.keys(this.fieldsMeta)
      .filter(key => !this.fields[key])
      .map(key => ({ dirty: false, name: key, value: this.fieldsMeta[key].initialValue }));
    const ret = {};
    undirtyFields.forEach(value => set(ret, value.name, value));
    return ret;
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
  getValueFromFieldsAll = () => {
    const { fieldsMeta, fields } = this;
    const ret = {};
    Object.keys(fieldsMeta).forEach(fieldKey => {
      ret[fieldKey] = this.getValueFromFieldsInternal(fieldKey, fields);
    });
    return ret;
  }

  getValidFieldsName() {
    const fieldsMeta = this.fieldsMeta;
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
  getFieldAll() {
    return {
      ...this.fields,
      ...this.getUndirtyFields(),
    };
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
