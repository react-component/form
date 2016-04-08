import React from 'react';
import {
  argumentContainer, mirror,
  getValueFromEvent, getErrorStrs,
  hasRules, getParams,
  isEmptyObject, flattenArray,
} from './utils';
import AsyncValidator from 'async-validator';

const defaultValidateTrigger = 'onChange';
const defaultTrigger = defaultValidateTrigger;

function createBaseForm(option = {}, mixins = []) {
  const {
    mapPropsToFields, onFieldsChange,
    fieldNameProp, fieldMetaProp,
    validateMessages, mapProps = mirror,
    formPropName = 'form', withRef,
  } = option;

  function decorate(WrappedComponent) {
    const Form = React.createClass({
      mixins,

      getInitialState() {
        let fields;
        if (mapPropsToFields) {
          fields = mapPropsToFields(this.props);
        }
        this.fields = fields || {};
        this.fieldsMeta = {};
        this.cachedBind = {};
        return {
          submitting: false,
        };
      },

      componentWillReceiveProps(nextProps) {
        if (mapPropsToFields) {
          const fields = mapPropsToFields(nextProps);
          if (fields) {
            const instanceFields = this.fields = {
              ...this.fields,
            };
            for (const fieldName in fields) {
              if (fields.hasOwnProperty(fieldName)) {
                instanceFields[fieldName] = {
                  ...fields[fieldName],
                  // keep instance
                  instance: instanceFields[fieldName] && instanceFields[fieldName].instance,
                };
              }
            }
          }
        }
      },

      onChange(name, action, ...args) {
        const fieldMeta = this.getFieldMeta(name);
        const { validate } = fieldMeta;
        if (fieldMeta[action]) {
          fieldMeta[action](...args);
        }
        const value = fieldMeta.getValueFromEvent ?
          fieldMeta.getValueFromEvent(...args) :
          getValueFromEvent(...args);
        const field = this.getField(name, true);
        this.setFields({
          [name]: {
            ...field,
            value,
            dirty: hasRules(validate),
          },
        });
      },

      onChangeValidate(name, action, ...args) {
        const fieldMeta = this.getFieldMeta(name);
        if (fieldMeta[action]) {
          fieldMeta[action](...args);
        }
        const value = fieldMeta.getValueFromEvent ?
          fieldMeta.getValueFromEvent(...args) :
          getValueFromEvent(...args);
        const field = this.getField(name, true);
        field.value = value;
        field.dirty = true;
        this.validateFieldsInternal([field], {
          action,
          options: {
            firstFields: !!fieldMeta.validateFirst,
          },
        });
      },

      getCacheBind(name, action, fn) {
        const cache = this.cachedBind[name] = this.cachedBind[name] || {};
        if (!cache[action]) {
          cache[action] = fn.bind(this, name, action);
        }
        return cache[action];
      },

      getFieldMeta(name) {
        return this.fieldsMeta[name];
      },

      getField(name, copy) {
        const ret = this.fields[name];
        if (ret) {
          ret.name = name;
        }
        if (copy) {
          if (ret) {
            return {
              ...ret,
            };
          }
          return {
            name,
          };
        }
        return ret;
      },

      getFieldProps(name, fieldOption = {}) {
        if (!name) {
          throw new Error('must call getFieldProps with valid name string!');
        }

        const {
          rules,
          trigger = defaultTrigger,
          valuePropName = 'value',
          getValueProps,
          validateTrigger = defaultValidateTrigger,
          validate = [],
        } = fieldOption;

        const fieldMeta = this.fieldsMeta[name] || {};

        if ('initialValue' in fieldOption) {
          fieldMeta.initialValue = fieldOption.initialValue;
        }

        let inputProps = {};

        if (fieldNameProp) {
          inputProps[fieldNameProp] = name;
        }

        const validateRules = validate.map((item) => {
          const newItem = {
            ...item,
            trigger: item.trigger || [],
          };
          if (typeof newItem.trigger === 'string') {
            newItem.trigger = [newItem.trigger];
          }
          return newItem;
        });

        if (rules) {
          validateRules.push({
            trigger: validateTrigger ? [].concat(validateTrigger) : [],
            rules,
          });
        }

        validateRules.filter((item) => {
          return !!item.rules && item.rules.length;
        }).map((item) => {
          return item.trigger;
        }).reduce((pre, curr) => {
          return pre.concat(curr);
        }, []).forEach((action) => {
          inputProps[action] = this.getCacheBind(name, action, this.onChangeValidate);
        });

        function checkRule(item) {
          return item.trigger.indexOf(trigger) === -1 || !item.rules || !item.rules.length;
        }

        if (trigger && validateRules.every(checkRule)) {
          inputProps[trigger] = this.getCacheBind(name, trigger, this.onChange);
        }
        const field = this.getField(name);
        let fieldValue = fieldMeta.initialValue;
        if (field && 'value' in field) {
          fieldValue = field.value;
        }
        if (getValueProps) {
          inputProps = {
            ...inputProps,
            ...getValueProps(fieldValue),
          };
        } else {
          inputProps[valuePropName] = fieldValue;
        }

        inputProps.ref = this.getCacheBind(name, `${name}__ref`, this.saveRef);

        const meta = {
          ...fieldMeta,
          ...fieldOption,
          validate: validateRules,
        };

        this.fieldsMeta[name] = meta;

        if (fieldMetaProp) {
          inputProps[fieldMetaProp] = meta;
        }

        return inputProps;
      },

      getFieldMember(name, member) {
        const field = this.getField(name);
        return field && field[member];
      },

      getFieldError(name) {
        return getErrorStrs(this.getFieldMember(name, 'errors'));
      },

      getValidFieldsName() {
        const fieldsMeta = this.fieldsMeta;
        return fieldsMeta ? Object.keys(fieldsMeta).filter((name) => {
          return !fieldsMeta[name].hidden;
        }) : [];
      },

      getFieldsValue(names) {
        const fields = names || this.getValidFieldsName();
        const allValues = {};
        fields.forEach((f) => {
          allValues[f] = this.getFieldValue(f);
        });
        return allValues;
      },

      getFieldValue(name) {
        const { fields } = this;
        return this.getValueFromFields(name, fields);
      },

      getFieldInstance(name) {
        const { fields } = this;
        return fields[name] && fields[name].instance;
      },

      getValueFromFields(name, fields) {
        const { fieldsMeta } = this;
        const field = fields[name];
        if (field && 'value' in field) {
          return field.value;
        }
        const fieldMeta = fieldsMeta[name];
        return fieldMeta && fieldMeta.initialValue;
      },

      getRules(fieldMeta, action) {
        const actionRules = fieldMeta.validate.filter((item) => {
          return !action || item.trigger.indexOf(action) >= 0;
        }).map((item) => item.rules);
        return flattenArray(actionRules);
      },
      setFields(fields) {
        const originalFields = this.fields;
        const nowFields = {
          ...originalFields,
          ...fields,
        };
        const fieldsMeta = this.fieldsMeta;
        const nowValues = {};
        Object.keys(fieldsMeta).forEach((f) => {
          nowValues[f] = this.getValueFromFields(f, nowFields);
        });
        const changedFieldsName = Object.keys(fields);
        Object.keys(nowValues).forEach((f) => {
          const value = nowValues[f];
          const fieldMeta = fieldsMeta[f];
          if (fieldMeta && fieldMeta.normalize) {
            const nowValue = fieldMeta.normalize(value,
              this.getValueFromFields(f, originalFields), nowValues);
            if (nowValue !== value) {
              nowFields[f] = {
                ...nowFields[f],
                value: nowValue,
              };
              if (changedFieldsName.indexOf(f) === -1) {
                changedFieldsName.push(f);
              }
            }
          }
        });
        this.fields = nowFields;
        if (onFieldsChange) {
          const changedFields = {};
          changedFieldsName.forEach((f) => {
            changedFields[f] = nowFields[f];
          });
          onFieldsChange(this.props, changedFields);
        }
        this.forceUpdate();
      },

      setFieldsValue(fieldsValue) {
        const fields = {};
        for (const name in fieldsValue) {
          if (fieldsValue.hasOwnProperty(name)) {
            fields[name] = {
              name,
              value: fieldsValue[name],
            };
          }
        }
        this.setFields(fields);
      },

      setFieldsInitialValue(initialValues) {
        const fieldsMeta = this.fieldsMeta;
        for (const name in initialValues) {
          if (initialValues.hasOwnProperty(name)) {
            const fieldMeta = fieldsMeta[name];
            fieldsMeta[name] = {
              ...fieldMeta,
              initialValue: initialValues[name],
            };
          }
        }
      },

      saveRef(name, _, component) {
        if (!component) {
          // after destroy, delete data
          delete this.fieldsMeta[name];
          delete this.fields[name];
          return;
        }
        const fieldMeta = this.getFieldMeta(name);
        if (fieldMeta && fieldMeta.ref) {
          if (typeof fieldMeta.ref === 'string') {
            throw new Error(`can not set ref string for ${name}`);
          }
          fieldMeta.ref(component);
        }
        this.fields[name] = this.fields[name] || {};
        this.fields[name].instance = component;
      },

      validateFieldsInternal(fields, {
        fieldNames,
        action,
        options = {},
      }, callback) {
        const allRules = {};
        const allValues = {};
        const allFields = {};
        const alreadyErrors = {};
        fields.forEach((field) => {
          const name = field.name;
          if (options.force !== true && field.dirty === false) {
            if (field.errors) {
              alreadyErrors[name] = {
                errors: field.errors,
                instance: field.instance,
              };
            }
            return;
          }
          const fieldMeta = this.getFieldMeta(name);
          const newField = {
            ...field,
          };
          newField.errors = undefined;
          newField.validating = true;
          newField.dirty = true;
          allRules[name] = this.getRules(fieldMeta, action);
          allValues[name] = newField.value;
          allFields[name] = newField;
        });
        this.setFields(allFields);
        const nowFields = this.fields;
        // in case normalize
        Object.keys(allValues).forEach((f) => {
          allValues[f] = nowFields[f].value;
        });
        if (callback && isEmptyObject(allFields)) {
          callback(isEmptyObject(alreadyErrors) ? null : alreadyErrors,
            this.getFieldsValue(fieldNames));
          return;
        }
        const validator = new AsyncValidator(allRules);
        if (validateMessages) {
          validator.messages(validateMessages);
        }
        validator.validate(allValues, options, (errors) => {
          const errorsGroup = {
            ...alreadyErrors,
          };
          if (errors && errors.length) {
            errors.forEach((e) => {
              const fieldName = e.field;
              if (!errorsGroup[fieldName]) {
                errorsGroup[fieldName] = {
                  errors: [],
                };
              }
              const fieldErrors = errorsGroup[fieldName].errors;
              fieldErrors.push(e);
            });
          }
          const expired = [];
          const nowAllFields = {};
          Object.keys(allRules).forEach((name) => {
            const fieldErrors = errorsGroup[name];
            const nowField = this.getField(name, true);
            // avoid concurrency problems
            if (nowField.value !== allValues[name]) {
              expired.push({
                name,
                instance: nowField.instance,
              });
            } else {
              nowField.errors = fieldErrors && fieldErrors.errors;
              nowField.value = allValues[name];
              nowField.validating = false;
              nowField.dirty = false;
              nowAllFields[name] = nowField;
            }
            if (fieldErrors) {
              fieldErrors.instance = nowField.instance;
            }
          });
          this.setFields(nowAllFields);
          if (callback) {
            if (expired.length) {
              expired.forEach(({ name, instance }) => {
                const fieldErrors = [{
                  message: `${name} need to revalidate`,
                  field: name,
                }];
                errorsGroup[name] = {
                  expired: true,
                  instance,
                  errors: fieldErrors,
                };
              });
            }
            callback(isEmptyObject(errorsGroup) ? null : errorsGroup,
              this.getFieldsValue(fieldNames));
          }
        });
      },

      validateFields(ns, opt, cb) {
        const { names, callback, options } = getParams(ns, opt, cb);
        const fieldNames = names || this.getValidFieldsName();
        const fields = fieldNames.map((name) => {
          const fieldMeta = this.getFieldMeta(name);
          if (!hasRules(fieldMeta.validate)) {
            return null;
          }
          const field = this.getField(name, true);
          field.value = this.getFieldValue(name);
          return field;
        }).filter((f) => {
          return !!f;
        });
        if (!fields.length) {
          if (callback) {
            callback(null, this.getFieldsValue(fieldNames));
          }
          return;
        }
        if (!('firstFields' in options)) {
          options.firstFields = fieldNames.filter((name) => {
            const fieldMeta = this.getFieldMeta(name);
            return !!fieldMeta.validateFirst;
          });
        }
        this.validateFieldsInternal(fields, {
          fieldNames,
          options,
        }, callback);
      },

      isFieldValidating(name) {
        return this.getFieldMember(name, 'validating');
      },

      isFieldsValidating(ns) {
        const names = ns || this.getValidFieldsName();
        return names.some(this.isFieldValidating);
      },

      isSubmitting() {
        return this.state.submitting;
      },

      submit(callback) {
        const fn = () => {
          this.setState({
            submitting: false,
          });
        };
        this.setState({
          submitting: true,
        });
        callback(fn);
      },

      resetFields(ns) {
        const newFields = {};
        const { fields } = this;
        let changed = false;
        const names = ns || Object.keys(fields);
        names.forEach((name) => {
          const field = fields[name];
          if (field && 'value' in field) {
            changed = true;
            newFields[name] = {
              instance: field.instance,
            };
          }
        });
        if (changed) {
          this.setFields(newFields);
        }
      },

      render() {
        const formProps = {
          [formPropName]: this.getForm(),
        };
        if (withRef) {
          formProps.ref = 'wrappedComponent';
        }
        const props = mapProps.call(this, {
          ...formProps,
          ...this.props,
        });
        return <WrappedComponent {...props}/>;
      },
    });

    return argumentContainer(Form, WrappedComponent);
  }

  return decorate;
}

export default createBaseForm;
