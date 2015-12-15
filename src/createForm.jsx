import React, {Component} from 'react';
import { argumentContainer, getValueFromEvent, getErrorStrs, isEmptyObject, createChainedFunction } from './utils';
import AsyncValidate from 'async-validator';

// avoid concurrency problems
let gid = 0;

function createForm(option = {}) {
  const {mapPropsToFields, onFieldsChange, formPropName = 'form'} = option;

  function decorate(WrappedComponent) {
    class Form extends Component {
      constructor(...args) {
        super(...args);
        let fields;
        if (mapPropsToFields) {
          fields = mapPropsToFields(this.props);
        }
        this.fields = fields || {};
        this.fieldsMeta = {};
        this.cachedBind = {};
        const bindMethods = [
          'getFieldProps', 'isFieldValidating',
          'getFieldError',
          'validateFieldsByName', 'getFieldsValue',
          'setFieldsValue', 'getFieldValue',
        ];
        bindMethods.forEach((m)=> {
          this[m] = this[m].bind(this);
        });
      }

      componentDidMount() {
        this.componentDidUpdate();
      }

      componentWillReceiveProps(nextProps) {
        if (mapPropsToFields) {
          const fields = mapPropsToFields(nextProps);
          if (fields) {
            this.fields = {...this.fields, ...fields};
          }
        }
      }

      componentDidUpdate() {
        const {fields, fieldsMeta} = this;
        const fieldsKeys = Object.keys(fields);
        const changedFields = {};
        fieldsKeys.forEach((s)=> {
          if (!fieldsMeta[s]) {
            delete fields[s];
            changedFields[s] = undefined;
          }
        });
        if (onFieldsChange) {
          Object.keys(fieldsMeta).forEach((name) => {
            const fieldMeta = fieldsMeta[name];
            const field = fields[name] || {};
            if (('initialValue' in fieldMeta) && !('value' in field)) {
              changedFields[name] = {
                value: fieldMeta.initialValue,
              };
            }
          });
          if (!isEmptyObject(changedFields)) {
            onFieldsChange(this.props, changedFields);
          }
        }
      }

      onChange(name, event) {
        const fieldMeta = this.getFieldMeta(name);
        const rules = fieldMeta.rules;
        const value = getValueFromEvent(event);
        const field = this.getField(name, true);
        this.setFields({
          [name]: {
            ...field,
            value,
            dirty: !!rules,
            sid: ++gid,
          },
        });
      }

      onChangeValidate(name, event) {
        const value = getValueFromEvent(event);
        const field = this.getField(name, true);
        field.value = value;
        field.dirty = true;
        this.validateFields([field]);
      }

      getCacheBind(name, action, fn) {
        const cache = this.cachedBind[name] = this.cachedBind[name] || {};
        if (!cache[action]) {
          cache[action] = fn.bind(this, name);
        }
        return cache[action];
      }

      getFieldMeta(name) {
        return this.fieldsMeta[name];
      }

      getField(name, copy) {
        const ret = this.fields[name];
        if (ret) {
          ret.name = name;
        }
        if (copy) {
          if (ret) {
            return {...ret};
          }
          return {name};
        }
        return ret;
      }

      getFieldProps(name, fieldOption = {}) {
        const {rules,
          trigger = 'onChange',
          hidden,
          initialValue,
          validateTrigger = 'onChange'} = fieldOption;
        const inputProps = {
          value: initialValue,
        };
        let originalTriggerFn;
        if (rules && validateTrigger) {
          originalTriggerFn = inputProps[validateTrigger];
          inputProps[validateTrigger] = this.getCacheBind(name, validateTrigger, this.onChangeValidate);
          if (originalTriggerFn) {
            inputProps[validateTrigger] = createChainedFunction(originalTriggerFn, inputProps[validateTrigger]);
          }
        }
        if (trigger && (validateTrigger !== trigger || !rules)) {
          originalTriggerFn = inputProps[trigger];
          inputProps[trigger] = this.getCacheBind(name, trigger, this.onChange);
          if (originalTriggerFn) {
            inputProps[trigger] = createChainedFunction(originalTriggerFn, inputProps[trigger]);
          }
        }
        const field = this.getField(name);
        if (field && 'value' in field) {
          inputProps.value = field.value;
        }
        this.fieldsMeta[name] = {
          rules,
          hidden,
          initialValue,
        };
        return inputProps;
      }

      getFieldMember(name, member) {
        const field = this.getField(name);
        return field && field[member];
      }

      getFieldError(name) {
        return this.getFieldMember(name, 'errors');
      }

      getValidFieldsName() {
        const fieldsMeta = this.fieldsMeta;
        return fieldsMeta ? Object.keys(fieldsMeta).filter((name)=> {
          return !fieldsMeta[name].hidden;
        }) : [];
      }

      getFieldsValue(names) {
        const fields = names || this.getValidFieldsName();
        const allValues = {};
        fields.forEach((f)=> {
          allValues[f] = this.getFieldValue(f);
        });
        return allValues;
      }

      getFieldValue(name) {
        const {fields, fieldsMeta} = this;
        const field = fields[name];
        if (field && 'value' in field) {
          return field.value;
        }
        const fieldMeta = fieldsMeta[name];
        return fieldMeta && fieldMeta.initialValue;
      }

      getForm() {
        return {
          getFieldsValue: this.getFieldsValue,
          getFieldValue: this.getFieldValue,
          setFieldsValue: this.setFieldsValue,
          getFieldProps: this.getFieldProps,
          getFieldError: this.getFieldError,
          isFieldValidating: this.isFieldValidating,
          validateFields: this.validateFieldsByName,
        };
      }

      setFields(fields) {
        this.fields = {...this.fields, ...fields};
        this.forceUpdate();
        if (onFieldsChange) {
          onFieldsChange(this.props, fields);
        }
      }

      setFieldsValue(fieldsValue) {
        const fields = {};
        for (const name in fieldsValue) {
          if (fieldsValue.hasOwnProperty(name)) {
            fields[name] = {
              name: name,
              value: fieldsValue[name],
            };
          }
        }
        this.setFields(fields);
      }

      validateFields(fields, callback, fieldNames) {
        const currentGlobalId = gid;
        ++gid;
        const allRules = {};
        const allValues = {};
        const allFields = {};
        const alreadyErrors = {};
        fields.forEach((field)=> {
          const name = field.name;
          if (field.dirty === false) {
            if (field.errors) {
              alreadyErrors[name] = field.errors;
            }
            return;
          }
          const fieldMeta = this.getFieldMeta(name);
          field.errors = undefined;
          field.validating = true;
          field.dirty = true;
          field.sid = currentGlobalId;
          allRules[name] = fieldMeta.rules;
          allValues[name] = field.value;
          allFields[name] = field;
        });
        this.setFields(allFields);
        if (callback && isEmptyObject(allFields)) {
          callback(isEmptyObject(alreadyErrors) ? null : alreadyErrors, this.getFieldsValue(fieldNames));
          return;
        }
        new AsyncValidate(allRules).validate(allValues, (errors)=> {
          const errorsGroup = {...alreadyErrors};
          if (errors && errors.length) {
            errors.forEach((e) => {
              const fieldName = e.field;
              const fieldErrors = errorsGroup[fieldName] || [];
              fieldErrors.push(e);
              errorsGroup[fieldName] = fieldErrors;
            });
          }
          let expired = false;
          const nowAllFields = {};
          Object.keys(allRules).forEach((name)=> {
            const fieldErrors = errorsGroup[name];
            const nowField = this.getField(name, true);
            if (nowField.sid !== currentGlobalId) {
              expired = true;
            } else {
              nowField.errors = fieldErrors && getErrorStrs(fieldErrors);
              nowField.validating = false;
              nowField.dirty = false;
              nowField.value = allValues[name];
              nowAllFields[name] = nowField;
            }
          });
          this.setFields(nowAllFields);
          if (callback && !expired) {
            callback(isEmptyObject(errorsGroup) ? null : errorsGroup, this.getFieldsValue(fieldNames));
          }
        });
      }

      validateFieldsByName(ns, cb) {
        let names = ns;
        let callback = cb;
        if (typeof names === 'function') {
          callback = names;
          names = undefined;
        }
        const fieldNames = names || this.getValidFieldsName();
        const fields = fieldNames.map((name)=> {
          const fieldMeta = this.getFieldMeta(name);
          if (!fieldMeta.rules) {
            return null;
          }
          const field = this.getField(name, true);
          field.value = this.getFieldValue(name);
          return field;
        }).filter((f)=> {
          return !!f;
        });
        if (!fields.length) {
          if (callback) {
            callback(null, this.getFieldsValue(fieldNames));
          }
          return;
        }
        this.validateFields(fields, callback, fieldNames);
      }

      isFieldValidating(name) {
        return this.getFieldMember(name, 'validating');
      }

      render() {
        const formProps = {
          [formPropName]: this.getForm(),
        };
        this.fieldsMeta = {};
        return <WrappedComponent {...formProps} {...this.props}/>;
      }
    }

    return argumentContainer(Form, WrappedComponent);
  }

  return decorate;
}

export default createForm;
