import get from 'lodash/get';
import has from 'lodash/has';
import set from 'lodash/set';
import {
  flatFieldNames,
  getErrorStrs,
  getNameIfNested,
  getVirtualPaths,
} from './utils';

const atom = {};

class FieldsStore {
  constructor(fields) {
    this.fields = fields;
    this.fieldsMeta = {};
  }
  updateFields(fields) {
    Object.assign(this.fields, fields);
  }

  setFields(fields) {
    const fieldsMeta = this.fieldsMeta;
    const nowFields = {
      ...this.fields,
      ...fields,
    };
    const nowValues = {};
    Object.keys(fieldsMeta).forEach((f) => {
      const { name, isNested } = getNameIfNested(f);
      if (isNested && fieldsMeta[name].exclusive) {
        return;
      }
      nowValues[f] = this.getValueFromFields(f, nowFields);
    });
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
  getUndirtyFields() {
    const undirtyFields = {};
    const undirtyValues = Object.keys(this.fieldsMeta).filter(key =>
      !this.fields[key] && this.fieldsMeta[key].initialValue)
      .map(key => ({ dirty: false, name: key, value: this.fieldsMeta[key].initialValue }));
    undirtyValues.forEach(value => undirtyFields[value.name] = value);
    return undirtyFields;
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
    const { fieldsMeta } = this;
    if (fieldsMeta[name] && fieldsMeta[name].virtual) {
      const ret = {};
      Object.keys(fieldsMeta).forEach(fieldKey => {
        const nameIfNested = getNameIfNested(fieldKey);
        if (nameIfNested.name === name && nameIfNested.isNested) {
          set(ret, fieldKey, this.getValueFromFieldsInternal(fieldKey, fields));
        }
      });
      return ret[name];
    }
    return this.getValueFromFieldsInternal(name, fields);
  }
  getValueFromFieldsAll = () => {
    const { fieldsMeta, fields } = this;
    const ret = {};
    let fieldKeyValue;
    Object.keys(fieldsMeta).forEach(fieldKey => {
      fieldKeyValue = this.getValueFromFieldsInternal(fieldKey, fields);
      ret[fieldKey] = fieldKeyValue;
    });
    return ret;
  }

  getValidFieldsName() {
    const fieldsMeta = this.fieldsMeta;
    return fieldsMeta ?
      Object.keys(fieldsMeta).filter(name => !fieldsMeta[name].hidden) :
      [];
  }

  getFieldValuePropValue(fieldMeta) {
    const { exclusive, leadingName, name, getValueProps, valuePropName } = fieldMeta;
    const { fieldsMeta } = this;
    const field = exclusive ? this.getField(leadingName) : this.getField(name);
    let fieldValue = atom;
    if (field && 'value' in field) {
      fieldValue = field.value;
    }
    if (fieldValue === atom) {
      fieldValue = exclusive ? fieldsMeta[leadingName].initialValue : fieldMeta.initialValue;
    }
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
    return Object.assign({}, this.fields, this.getUndirtyFields());
  }
  getFieldMember(name, member) {
    return this.getField(name)[member];
  }

  getFieldsValue = (names) => {
    const fields = names || flatFieldNames(this.getValidFieldsName());
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
    const fields = names || flatFieldNames(this.getValidFieldsName());
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
    const virtualPaths = getVirtualPaths(fieldsMeta);
    Object.keys(initialValues).forEach(name => {
      if (fieldsMeta[name] && fieldsMeta[name].virtual) {
        for (let i = 0, len = virtualPaths[name].length; i < len; i++) {
          const path = virtualPaths[name][i];
          if (has(initialValues, path)) {
            fieldsMeta[path] = {
              ...fieldsMeta[path],
              initialValue: get(initialValues, path),
            };
          }
        }
      } else if (fieldsMeta[name]) {
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
