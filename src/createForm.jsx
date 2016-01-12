import React, {Component} from 'react';
import { argumentContainer, getValueFromEvent, getErrorStrs,
         isEmptyObject, flattenArray } from './utils';
import AsyncValidate from 'async-validator';

// avoid concurrency problems
let gid = 0;
const defaultValidateTrigger = 'onChange';
const defaultTrigger = defaultValidateTrigger;

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
          'getFieldError', 'setFields', 'resetFields',
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
        fieldsKeys.forEach((s)=> {
          if (!fieldsMeta[s]) {
            delete fields[s];
          }
        });
        // do not notify store
      }

      onChange(name, action, event) {
        const fieldMeta = this.getFieldMeta(name);
        const { validate } = fieldMeta;
        if (fieldMeta[action]) {
          fieldMeta[action](event);
        }
        const value = getValueFromEvent(event);
        const field = this.getField(name, true);
        this.setFields({
          [name]: {
            ...field,
            value,
            dirty: this.hasRules(validate),
            sid: ++gid,
          },
        });
      }

      onChangeValidate(name, action, event) {
        const fieldMeta = this.getFieldMeta(name);
        if (fieldMeta[action]) {
          fieldMeta[action](event);
        }
        const value = getValueFromEvent(event);
        const field = this.getField(name, true);
        field.value = value;
        field.dirty = true;
        this.validateFields([field], undefined, undefined, action);
      }

      getCacheBind(name, action, fn) {
        const cache = this.cachedBind[name] = this.cachedBind[name] || {};
        if (!cache[action]) {
          cache[action] = fn.bind(this, name, action);
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
          trigger = defaultTrigger,
          valuePropName = 'value',
          validateTrigger = defaultValidateTrigger,
          validate = []} = fieldOption;
        const inputProps = {
          [valuePropName]: fieldOption.initialValue,
        };

        // For backward compatibility
        const validateRules = validate.map((item)=> {
          if (item.trigger === undefined) {
            item.trigger = defaultValidateTrigger;
          }
          return item;
        });
        validateRules.push({
          trigger: validateTrigger,
          rules,
        });

        validateRules.filter((item)=> {
          return item.rules && item.trigger;
        }).map((item)=> {
          return item.trigger.split(/\s+/);
        }).reduce((pre, curr)=> {
          return pre.concat(curr);
        }, []).forEach((action)=> {
          if (inputProps[action]) return;
          inputProps[action] = this.getCacheBind(name, action, this.onChangeValidate);
        });

        if (trigger && validateRules.every((item) => {
          return item.trigger !== trigger || !item.rules;
        })) {
          inputProps[trigger] = this.getCacheBind(name, trigger, this.onChange);
        }
        const field = this.getField(name);
        if (field && 'value' in field) {
          inputProps[valuePropName] = field.value;
        }
        this.fieldsMeta[name] = {
          ...fieldOption,
          validate: validateRules,
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
        const {fields} = this;
        return this.getValueFromFields(name, fields);
      }

      getValueFromFields(name, fields) {
        const {fieldsMeta} = this;
        const field = fields[name];
        if (field && 'value' in field) {
          return field.value;
        }
        const fieldMeta = fieldsMeta[name];
        return fieldMeta && fieldMeta.initialValue;
      }

      getRules(fieldMeta, action) {
        const actionRules = fieldMeta.validate.filter((item)=> {
          const trigger = item.trigger;
          return !!item.rules &&
            (trigger === null || trigger === false || trigger.indexOf(action) >= 0);
        }).map((item)=> item.rules);

        return flattenArray(actionRules);
      }

      getForm() {
        return {
          getFieldsValue: this.getFieldsValue,
          getFieldValue: this.getFieldValue,
          setFieldsValue: this.setFieldsValue,
          setFields: this.setFields,
          getFieldProps: this.getFieldProps,
          getFieldError: this.getFieldError,
          isFieldValidating: this.isFieldValidating,
          validateFields: this.validateFieldsByName,
          resetFields: this.resetFields,
        };
      }

      setFields(fields) {
        const originalFields = this.fields;
        const nowFields = {...originalFields, ...fields};
        const fieldsMeta = this.fieldsMeta;
        const nowValues = {};
        Object.keys(fieldsMeta).forEach((f)=> {
          nowValues[f] = this.getValueFromFields(f, nowFields);
        });
        const changedFieldsName = Object.keys(fields);
        Object.keys(nowValues).forEach((f)=> {
          const value = nowValues[f];
          const fieldMeta = fieldsMeta[f];
          if (fieldMeta && fieldMeta.normalize) {
            const nowValue = fieldMeta.normalize(value, this.getValueFromFields(f, originalFields), nowValues);
            if (nowValue !== value) {
              nowFields[f] = {...nowFields[f], value: nowValue};
              if (changedFieldsName.indexOf(f) === -1) {
                changedFieldsName.push(f);
              }
            }
          }
        });
        this.fields = nowFields;
        if (onFieldsChange) {
          const changedFields = {};
          changedFieldsName.forEach((f)=> {
            changedFields[f] = nowFields[f];
          });
          onFieldsChange(this.props, changedFields);
        }
        this.forceUpdate();
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

      hasRules(validate) {
        return validate.some((item)=> {
          return !!item.rules;
        });
      }

      validateFields(fields, callback, fieldNames, action) {
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
          allRules[name] = this.getRules(fieldMeta, action);
          allValues[name] = field.value;
          allFields[name] = field;
        });
        this.setFields(allFields);
        const nowFields = this.fields;
        // incase normalize
        Object.keys(allValues).forEach((f)=> {
          allValues[f] = nowFields[f].value;
        });
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

      resetFields(ns) {
        const newFields = {};
        const {fields} = this;
        let changed = false;
        const names = ns || Object.keys(fields);
        names.forEach((name)=> {
          const field = fields[name];
          if (field && 'value' in field) {
            changed = true;
            newFields[name] = {};
          }
        });
        if (changed) {
          this.setFields(newFields);
        }
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
