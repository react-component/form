import React from 'react';
import {
  argumentContainer, mirror,
  getValueFromEvent, getErrorStrs,
  hasRules, getParams,
  isEmptyObject, flattenArray,
  getNameIfNested,
  flatFieldNames, clearVirtualField,
  getVirtualPaths,
} from './utils';
import AsyncValidator from 'async-validator';
import warning from 'warning';
import get from 'lodash.get';
import has from 'lodash.has';
import set from 'lodash.set';

const DEFAULT_VALIDATE_TRIGGER = 'onChange';
const DEFAULT_TRIGGER = DEFAULT_VALIDATE_TRIGGER;
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
        } else if (fieldMeta.originalProps && fieldMeta.originalProps[action]) {
          fieldMeta.originalProps[action](...args);
        }
        const value = fieldMeta.getValueFromEvent ?
          fieldMeta.getValueFromEvent(...args) :
          getValueFromEvent(...args);
        let fieldContent;
        const nameKeyObj = getNameIfNested(name);
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
        } else if (fieldMeta.originalProps && fieldMeta.originalProps[action]) {
          fieldMeta.originalProps[action](...args);
        }
        const value = fieldMeta.getValueFromEvent ?
          fieldMeta.getValueFromEvent(...args) :
          getValueFromEvent(...args);
        const nameKeyObj = getNameIfNested(name);
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

      getFieldDecorator(name, fieldOption) {
        const props = this.getFieldProps(name, fieldOption);
        return (fieldElem) => {
          const fieldMeta = this.getFieldMeta(name);
          const originalProps = fieldElem.props;
          if (process.env.NODE_ENV !== 'production') {
            const valuePropName = fieldMeta.valuePropName;
            warning(
              !(valuePropName in originalProps),
              `\`getFieldDecorator\` will override \`${valuePropName}\`, ` +
              `so please don't set \`${valuePropName}\` directly ` +
              `and use \`setFieldsValue\` to set it.`
            );
            const defaultValuePropName =
              `default${valuePropName[0].toUpperCase()}${valuePropName.slice(1)}`;
            warning(
              !(defaultValuePropName in originalProps),
              `\`${defaultValuePropName}\` is invalid ` +
              `for \`getFieldDecorator\` will set \`${valuePropName}\`,` +
              ` please use \`option.initialValue\` instead.`
            );
          }
          fieldMeta.originalProps = originalProps;
          fieldMeta.ref = fieldElem.ref;
          return React.cloneElement(fieldElem, {
            ...props,
            ...this.getFieldValuePropValue(fieldMeta),
          });
        };
      },

      getFieldProps(name, fieldOption = {}) {
        if (!name) {
          throw new Error('Must call `getFieldProps` with valid name string!');
        }

        fieldOption.valuePropName = fieldOption.valuePropName || 'value';
        fieldOption.validate = fieldOption.validate || [];

        const {
          rules,
          trigger = DEFAULT_TRIGGER,
          exclusive,
          validateTrigger = DEFAULT_VALIDATE_TRIGGER,
          validate,
        } = fieldOption;

        fieldOption.trigger = trigger;
        fieldOption.validateTrigger = validateTrigger;

        const nameIfNested = getNameIfNested(name);
        const leadingName = nameIfNested.name;

        fieldOption.leadingName = leadingName;
        fieldOption.name = name;

        const { fieldsMeta } = this;
        let fieldMeta;
        let leadingFieldMeta = fieldsMeta[leadingName];

        if (nameIfNested.isNested) {
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

        inputProps = {
          ...inputProps,
          ... this.getFieldValuePropValue(fieldOption),
        };

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
        return fieldsMeta ?
          Object.keys(fieldsMeta).filter(name => !fieldsMeta[name].hidden) :
          [];
      },

      getFieldsValue(names) {
        const fields = names || flatFieldNames(this.getValidFieldsName());
        const allValues = {};
        fields.forEach((f) => {
          set(allValues, f, this.getFieldValue(f));
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
              const nameIfNested = getNameIfNested(fieldKey);
              if (nameIfNested.name === name && nameIfNested.isNested) {
                set(ret, fieldKey, this.getValueFromFieldsInternal(fieldKey, fields));
              }
            }
          }
          return ret[name];
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
          const { name, isNested } = getNameIfNested(f);
          if (isNested && fieldsMeta[name].exclusive) {
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
        const virtualPaths = getVirtualPaths(fieldsMeta);
        for (const name in fieldsValue) {
          if (fieldsValue.hasOwnProperty(name)) {
            const value = fieldsValue[name];
            if (fieldsMeta[name] && fieldsMeta[name].virtual) {
              clearVirtualField(name, fields, fieldsMeta);
              for (let i = 0, len = virtualPaths[name].length; i < len; i++) {
                const path = virtualPaths[name][i];
                if (has(fieldsValue, path)) {
                  newFields[path] = {
                    name: path,
                    value: get(fieldsValue, path),
                  };
                }
              }
            } else if (fieldsMeta[name]) {
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
        const virtualPaths = getVirtualPaths(fieldsMeta);
        for (const name in initialValues) {
          if (initialValues.hasOwnProperty(name)) {
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
        if (fieldMeta) {
          const ref = fieldMeta.ref;
          if (ref) {
            if (typeof ref === 'string') {
              throw new Error(`can not set ref string for ${name}`);
            }
            ref(component);
          }
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
              set(alreadyErrors, name, { errors: field.errors });
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
              if (!has(errorsGroup, fieldName)) {
                set(errorsGroup, fieldName, { errors: [] });
              }
              const fieldErrors = get(errorsGroup, fieldName.concat('.errors'));
              fieldErrors.push(e);
            });
          }
          const expired = [];
          const nowAllFields = {};
          Object.keys(allRules).forEach((name) => {
            const fieldErrors = get(errorsGroup, name);
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
                set(errorsGroup, name, {
                  expired: true,
                  errors: fieldErrors,
                });
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
