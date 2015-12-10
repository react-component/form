import React, {Component} from 'react';
import { argumentContainer, getValueFromEvent, getErrorStrs, isEmptyObject } from './utils';
import AsyncValidate from 'async-validator';

// avoid concurrency problems
let actionId = 0;

function createForm(option = {}) {
  const {mapPropsToFields, onFieldsChange, formPropName = 'form'} = option;

  function decorate(WrappedComponent) {
    class Form extends Component {
      constructor(...args) {
        super(...args);
        let state;
        if (mapPropsToFields) {
          state = mapPropsToFields(this.props);
        }
        this.state = state || {};
        this.fieldsMeta = {};
        this.cachedBind = {};
        const bindMethods = [
          'getFieldProps', 'isFieldValidating',
          'getFieldError', 'removeField',
          'validateFieldsByName',
        ];
        bindMethods.forEach((m)=> {
          this[m] = this[m].bind(this);
        });
      }

      componentWillReceiveProps(nextProps) {
        if (mapPropsToFields) {
          const state = mapPropsToFields(nextProps);
          if (state) {
            this.setState(state);
          }
        }
      }

      onChange(name, event) {
        const fieldMeta = this.getFieldMeta(name);
        const rules = fieldMeta.rules;
        if (rules) {
          fieldMeta.actionId = ++actionId;
        }
        const value = getValueFromEvent(event);
        this.setField(name, {
          name,
          value,
          dirty: !!rules,
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
        const ret = this.state[name];
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
          initialValue = '',
          validateTrigger = 'onChange'} = fieldOption;
        const inputProps = {
          value: initialValue,
        };
        if (rules && validateTrigger) {
          inputProps[validateTrigger] = this.getCacheBind(name, validateTrigger, this.onChangeValidate);
        }
        if (validateTrigger !== trigger || !rules) {
          inputProps[trigger] = this.getCacheBind(name, trigger, this.onChange);
        }
        const field = this.getField(name);
        if (field && 'value' in field) {
          inputProps.value = field.value;
        }
        const fieldMeta = this.fieldsMeta[name] || {};
        fieldMeta.rules = rules;
        fieldMeta.initialValue = initialValue;
        this.fieldsMeta[name] = fieldMeta;
        return inputProps;
      }

      getFieldMember(name, member) {
        const field = this.getField(name);
        return field && field[member];
      }

      getFieldError(name) {
        return this.getFieldMember(name, 'errors');
      }

      getFieldsValue(fs) {
        const fields = fs || Object.keys(this.state);
        const allValues = {};
        fields.forEach((f)=> {
          allValues[f] = this.getFieldValue(f);
        });
        return allValues;
      }

      getFieldValue(name) {
        const {state, fieldsMeta} = this;
        const field = state[name];
        if (field && 'value' in field) {
          return field.value;
        }
        return fieldsMeta[name].initialValue;
      }

      getForm() {
        return {
          getFieldProps: this.getFieldProps,
          getFieldError: this.getFieldError,
          isFieldValidating: this.isFieldValidating,
          removeField: this.removeField,
          validateFields: this.validateFieldsByName,
        };
      }

      setField(name, field) {
        let state = {
          [name]: field,
        };
        if (typeof name === 'object') {
          state = name;
        }
        this.setState(state);
        if (onFieldsChange) {
          onFieldsChange(this.props, state);
        }
      }

      validateFields(fields, callback, fieldNames) {
        const currentActionId = actionId;
        ++actionId;
        const allRules = {};
        const allValues = {};
        const allFields = {};

        fields.forEach((field)=> {
          const name = field.name;
          if (field.dirty === false) {
            return;
          }
          const fieldMeta = this.getFieldMeta(name);
          field.errors = undefined;
          field.validating = true;
          field.dirty = true;
          fieldMeta.actionId = currentActionId;
          allRules[name] = fieldMeta.rules;
          allValues[name] = field.value;
          allFields[name] = field;
        });

        this.setField(allFields);

        if (callback && isEmptyObject(allFields)) {
          callback(null, this.getFieldsValue(fieldNames));
          return;
        }

        new AsyncValidate(allRules).validate(allValues, (errors)=> {
          const errorsGroup = {};
          if (errors && errors.length) {
            errors.forEach((e) => {
              const fieldName = e.field;
              const fieldErrors = errorsGroup[fieldName] || [];
              fieldErrors.push(e);
              errorsGroup[fieldName] = fieldErrors;
            });
          }
          let expired = false;

          Object.keys(allRules).forEach((name)=> {
            const nowFieldMeta = this.getFieldMeta(name);
            // prevent concurrency call
            if (nowFieldMeta && nowFieldMeta.actionId !== currentActionId) {
              expired = true;
            }
          });

          if (expired) {
            return;
          }

          const nowAllFields = {};

          Object.keys(allRules).forEach((name)=> {
            const fieldErrors = errorsGroup[name];
            const nowFieldStatus = this.getField(name, true);
            nowFieldStatus.errors = fieldErrors && getErrorStrs(fieldErrors);
            nowFieldStatus.validating = false;
            nowFieldStatus.dirty = false;
            nowFieldStatus.value = allValues[name];
            nowAllFields[name] = nowFieldStatus;
          });
          this.setField(nowAllFields);
          if (callback) {
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
        const fieldNames = names || Object.keys(this.fieldsMeta);
        const fields = fieldNames.map((name)=> {
          const fieldMeta = this.getFieldMeta(name);
          if (!fieldMeta.rules) {
            return null;
          }
          const field = this.getField(name, true);
          if (!('value' in field) && 'initialValue' in fieldMeta) {
            field.value = fieldMeta.initialValue;
          }
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

      removeField(name) {
        if (this.fieldsMeta[name]) {
          delete this.fieldsMeta[name];
          this.setField(name, undefined);
        }
      }

      render() {
        const formProps = {
          [formPropName]: this.getForm(),
        };
        return <WrappedComponent {...formProps} {...this.props}/>;
      }
    }

    return argumentContainer(Form, WrappedComponent);
  }

  return decorate;
}

export default createForm;
