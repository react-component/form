import React from 'react';
import {
  argumentContainer, mirror,
  getValueFromEvent, getErrorStrs,
  hasRules, getParams,
  isEmptyObject, flattenArray,
  getNameKeyObj, getNameKeyStr,
  flatFieldNames, clearVirtualField,
} from './utils';
import AsyncValidator from 'async-validator';

const defaultValidateTrigger = 'onChange';
const defaultTrigger = defaultValidateTrigger;
const atom = {};

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
        this.instances = {};
        this.fieldsMeta = {};
        this.cachedBind = {};
        return {
          submitting: false,
        };
      },

      componentWillReceiveProps(nextProps) {
        if (mapPropsToFields) {
          this.fields = mapPropsToFields(nextProps);
        }
      },

      onChange(name_, action, ...args) {
        let name = name_;
        const fieldMeta = this.getFieldMeta(name);
        const { validate } = fieldMeta;
        if (fieldMeta[action]) {
          fieldMeta[action](...args);
        }
        const value = fieldMeta.getValueFromEvent ?
          fieldMeta.getValueFromEvent(...args) :
          getValueFromEvent(...args);
        let fieldContent;
        const nameKeyObj = getNameKeyObj(name);
        if (this.getFieldMeta(nameKeyObj.name).exclusive) {
          name = nameKeyObj.name;
        }
        const field = this.getField(name);
        fieldContent = {
          ...field,
          value,
          dirty: hasRules(validate),
        };
        this.setFields({
          [name]: fieldContent,
        });
      },

      onChangeValidate(name_, action, ...args) {
        let name = name_;
        const fieldMeta = this.getFieldMeta(name);
        if (fieldMeta[action]) {
          fieldMeta[action](...args);
        }
        const value = fieldMeta.getValueFromEvent ?
          fieldMeta.getValueFromEvent(...args) :
          getValueFromEvent(...args);
        const nameKeyObj = getNameKeyObj(name);
        if (this.getFieldMeta(nameKeyObj.name).exclusive) {
          name = nameKeyObj.name;
        }
        const field = this.getField(name);
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

      getField(name) {
        const { fields } = this;
        return {
          ...fields[name],
          name,
        };
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
          exclusive,
          validateTrigger = defaultValidateTrigger,
          validate = [],
        } = fieldOption;
        const nameKeyObj = getNameKeyObj(name);
        const leadingName = nameKeyObj.name;
        const key = nameKeyObj.key;
        const { fieldsMeta } = this;
        let fieldMeta;
        let leadingFieldMeta = fieldsMeta[leadingName];

        if (key) {
          leadingFieldMeta = fieldsMeta[leadingName] = fieldsMeta[leadingName] || {};
          leadingFieldMeta.virtual = !exclusive;
          // exclusive allow getFieldProps('x', {initialValue})
          // non-exclusive does not allow getFieldProps('x', {initialValue})
          leadingFieldMeta.hidden = !exclusive;
          leadingFieldMeta.exclusive = exclusive;
          fieldMeta = fieldsMeta[name] = fieldsMeta[name] || {};
        } else {
          fieldMeta = fieldsMeta[name] = fieldsMeta[name] || {};
        }

        if ('initialValue' in fieldOption) {
          fieldMeta.initialValue = fieldOption.initialValue;
        }

        let inputProps = {};

        if (key) {
          inputProps.key = key;
        }

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
        const field = exclusive ? this.getField(leadingName) : this.getField(name);
        let fieldValue = atom;
        if (field && 'value' in field) {
          fieldValue = field.value;
        }
        if (fieldValue === atom) {
          fieldValue = exclusive ? fieldsMeta[leadingName].initialValue : fieldMeta.initialValue;
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

        fieldsMeta[name] = meta;

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
        const fields = names || flatFieldNames(this.getValidFieldsName());
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
        return this.instances[name];
      },

      getValueFromFieldsInternal(name, fields) {
        const field = fields[name];
        if (field && 'value' in field) {
          return field.value;
        }
        const fieldMeta = this.fieldsMeta[name];
        return fieldMeta && fieldMeta.initialValue;
      },

      getValueFromFields(name, fields) {
        const { fieldsMeta } = this;
        if (fieldsMeta[name] && fieldsMeta[name].virtual) {
          const ret = {};
          for (const fieldKey in fieldsMeta) {
            if (fieldsMeta.hasOwnProperty(fieldKey)) {
              const nameKeyObj = getNameKeyObj(fieldKey);
              if (nameKeyObj.name === name && nameKeyObj.key) {
                ret[nameKeyObj.key] =
                  this.getValueFromFieldsInternal(fieldKey, fields);
              }
            }
          }
          return ret;
        }
        return this.getValueFromFieldsInternal(name, fields);
      },
      getRules(fieldMeta, action) {
        const actionRules = fieldMeta.validate.filter((item) => {
          return !action || item.trigger.indexOf(action) >= 0;
        }).map((item) => item.rules);
        return flattenArray(actionRules);
      },
      setFields(fields_) {
        const fieldsMeta = this.fieldsMeta;
        const fields = fields_;
        const nowFields = {
          ...this.fields,
          ...fields,
        };
        const nowValues = {};
        Object.keys(fieldsMeta).forEach((f) => {
          const { name, key } = getNameKeyObj(f);
          if (key && fieldsMeta[name].exclusive) {
            return;
          }
          nowValues[f] = this.getValueFromFields(f, nowFields);
        });
        const changedFieldsName = Object.keys(fields);
        Object.keys(nowValues).forEach((f) => {
          const value = nowValues[f];
          const fieldMeta = fieldsMeta[f];
          if (fieldMeta && fieldMeta.normalize) {
            const nowValue = fieldMeta.normalize(value,
              this.getValueFromFields(f, this.fields), nowValues);
            if (nowValue !== value) {
              nowFields[f] = {
                ...nowFields[f],
                value: nowValue,
              };
            }
          }
        });
        this.fields = nowFields;
        if (onFieldsChange) {
          const changedFields = {};
          changedFieldsName.forEach((f) => {
            changedFields[f] = this.getField(f);
          });
          onFieldsChange(this.props, changedFields);
        }
        this.forceUpdate();
      },

      setFieldsValue(fieldsValue) {
        const newFields = {};
        const { fieldsMeta, fields } = this;
        for (const name in fieldsValue) {
          if (fieldsValue.hasOwnProperty(name)) {
            const value = fieldsValue[name];
            if (fieldsMeta[name] && fieldsMeta[name].virtual) {
              clearVirtualField(name, fields, fieldsMeta);
              for (const key in value) {
                if (value.hasOwnProperty(key)) {
                  newFields[getNameKeyStr(name, key)] = value[key];
                }
              }
            } else {
              newFields[name] = {
                name,
                value,
              };
            }
          }
        }
        this.setFields(newFields);
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
          delete this.instances[name];
          delete this.cachedBind[name];
          return;
        }
        const fieldMeta = this.getFieldMeta(name);
        if (fieldMeta && fieldMeta.ref) {
          if (typeof fieldMeta.ref === 'string') {
            throw new Error(`can not set ref string for ${name}`);
          }
          fieldMeta.ref(component);
        }
        this.instances[name] = component;
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
        // in case normalize
        Object.keys(allValues).forEach((f) => {
          allValues[f] = this.getFieldValue(f);
        });
        if (callback && isEmptyObject(allFields)) {
          callback(isEmptyObject(alreadyErrors) ? null : alreadyErrors,
            this.getFieldsValue(flatFieldNames(fieldNames)));
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
            const nowField = this.getField(name);
            // avoid concurrency problems
            if (nowField.value !== allValues[name]) {
              expired.push({
                name,
              });
            } else {
              nowField.errors = fieldErrors && fieldErrors.errors;
              nowField.value = allValues[name];
              nowField.validating = false;
              nowField.dirty = false;
              nowAllFields[name] = nowField;
            }
          });
          this.setFields(nowAllFields);
          if (callback) {
            if (expired.length) {
              expired.forEach(({ name }) => {
                const fieldErrors = [{
                  message: `${name} need to revalidate`,
                  field: name,
                }];
                errorsGroup[name] = {
                  expired: true,
                  errors: fieldErrors,
                };
              });
            }
            callback(isEmptyObject(errorsGroup) ? null : errorsGroup,
              this.getFieldsValue(flatFieldNames(fieldNames)));
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
          const field = this.getField(name);
          field.value = this.getFieldValue(name);
          return field;
        }).filter((f) => {
          return !!f;
        });
        if (!fields.length) {
          if (callback) {
            callback(null, this.getFieldsValue(flatFieldNames(fieldNames)));
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
        return names.some((n) => {
          return this.isFieldValidating(n);
        });
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
            newFields[name] = {};
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
