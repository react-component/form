import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _typeof from 'babel-runtime/helpers/typeof';
import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _extends from 'babel-runtime/helpers/extends';
import _toConsumableArray from 'babel-runtime/helpers/toConsumableArray';
import React from 'react';
import createReactClass from 'create-react-class';
import AsyncValidator from 'async-validator';
import warning from 'warning';
import get from 'lodash/get';
import set from 'lodash/set';
import createFieldsStore from './createFieldsStore';
import { argumentContainer, identity, normalizeValidateRules, getValidateTriggers, getValueFromEvent, hasRules, getParams, isEmptyObject, flattenArray } from './utils';

var DEFAULT_TRIGGER = 'onChange';

function createBaseForm() {
  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var mixins = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var validateMessages = option.validateMessages,
      onFieldsChange = option.onFieldsChange,
      onValuesChange = option.onValuesChange,
      _option$mapProps = option.mapProps,
      mapProps = _option$mapProps === undefined ? identity : _option$mapProps,
      mapPropsToFields = option.mapPropsToFields,
      fieldNameProp = option.fieldNameProp,
      fieldMetaProp = option.fieldMetaProp,
      fieldDataProp = option.fieldDataProp,
      _option$formPropName = option.formPropName,
      formPropName = _option$formPropName === undefined ? 'form' : _option$formPropName,
      withRef = option.withRef;


  return function decorate(WrappedComponent) {
    var Form = createReactClass({
      displayName: 'Form',

      mixins: mixins,

      getInitialState: function getInitialState() {
        var _this = this;

        var fields = mapPropsToFields && mapPropsToFields(this.props);
        this.fieldsStore = createFieldsStore(fields || {});

        this.instances = {};
        this.cachedBind = {};
        this.clearedFieldMetaCache = {};
        // HACK: https://github.com/ant-design/ant-design/issues/6406
        ['getFieldsValue', 'getFieldValue', 'setFieldsInitialValue', 'getFieldsError', 'getFieldError', 'isFieldValidating', 'isFieldsValidating', 'isFieldsTouched', 'isFieldTouched'].forEach(function (key) {
          return _this[key] = function () {
            var _fieldsStore;

            if (process.env.NODE_ENV !== 'production') {
              warning(false, 'you should not use `ref` on enhanced form, please use `wrappedComponentRef`. ' + 'See: https://github.com/react-component/form#note-use-wrappedcomponentref-instead-of-withref-after-rc-form140');
            }
            return (_fieldsStore = _this.fieldsStore)[key].apply(_fieldsStore, arguments);
          };
        });

        return {
          submitting: false
        };
      },
      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (mapPropsToFields) {
          this.fieldsStore.updateFields(mapPropsToFields(nextProps));
        }
      },
      onCollectCommon: function onCollectCommon(name, action, args) {
        var fieldMeta = this.fieldsStore.getFieldMeta(name);
        if (fieldMeta[action]) {
          fieldMeta[action].apply(fieldMeta, _toConsumableArray(args));
        } else if (fieldMeta.originalProps && fieldMeta.originalProps[action]) {
          var _fieldMeta$originalPr;

          (_fieldMeta$originalPr = fieldMeta.originalProps)[action].apply(_fieldMeta$originalPr, _toConsumableArray(args));
        }
        var value = fieldMeta.getValueFromEvent ? fieldMeta.getValueFromEvent.apply(fieldMeta, _toConsumableArray(args)) : getValueFromEvent.apply(undefined, _toConsumableArray(args));
        if (onValuesChange && value !== this.fieldsStore.getFieldValue(name)) {
          var valuesAll = this.fieldsStore.getAllValues();
          var valuesAllSet = {};
          valuesAll[name] = value;
          Object.keys(valuesAll).forEach(function (key) {
            return set(valuesAllSet, key, valuesAll[key]);
          });
          onValuesChange(this.props, set({}, name, value), valuesAllSet);
        }
        var field = this.fieldsStore.getField(name);
        return { name: name, field: _extends({}, field, { value: value, touched: true }), fieldMeta: fieldMeta };
      },
      onCollect: function onCollect(name_, action) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        var _onCollectCommon = this.onCollectCommon(name_, action, args),
            name = _onCollectCommon.name,
            field = _onCollectCommon.field,
            fieldMeta = _onCollectCommon.fieldMeta;

        var validate = fieldMeta.validate;

        var newField = _extends({}, field, {
          dirty: hasRules(validate)
        });
        this.setFields(_defineProperty({}, name, newField));
      },
      onCollectValidate: function onCollectValidate(name_, action) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        var _onCollectCommon2 = this.onCollectCommon(name_, action, args),
            field = _onCollectCommon2.field,
            fieldMeta = _onCollectCommon2.fieldMeta;

        var newField = _extends({}, field, {
          dirty: true
        });
        this.validateFieldsInternal([newField], {
          action: action,
          options: {
            firstFields: !!fieldMeta.validateFirst
          }
        });
      },
      getCacheBind: function getCacheBind(name, action, fn) {
        if (!this.cachedBind[name]) {
          this.cachedBind[name] = {};
        }
        var cache = this.cachedBind[name];
        if (!cache[action]) {
          cache[action] = fn.bind(this, name, action);
        }
        return cache[action];
      },
      recoverClearedField: function recoverClearedField(name) {
        if (this.clearedFieldMetaCache[name]) {
          this.fieldsStore.setFields(_defineProperty({}, name, this.clearedFieldMetaCache[name].field));
          this.fieldsStore.setFieldMeta(name, this.clearedFieldMetaCache[name].meta);
          delete this.clearedFieldMetaCache[name];
        }
      },
      getFieldDecorator: function getFieldDecorator(name, fieldOption) {
        var _this2 = this;

        var props = this.getFieldProps(name, fieldOption);
        return function (fieldElem) {
          var fieldMeta = _this2.fieldsStore.getFieldMeta(name);
          var originalProps = fieldElem.props;
          if (process.env.NODE_ENV !== 'production') {
            var valuePropName = fieldMeta.valuePropName;
            warning(!(valuePropName in originalProps), '`getFieldDecorator` will override `' + valuePropName + '`, ' + ('so please don\'t set `' + valuePropName + '` directly ') + 'and use `setFieldsValue` to set it.');
            var defaultValuePropName = 'default' + valuePropName[0].toUpperCase() + valuePropName.slice(1);
            warning(!(defaultValuePropName in originalProps), '`' + defaultValuePropName + '` is invalid ' + ('for `getFieldDecorator` will set `' + valuePropName + '`,') + ' please use `option.initialValue` instead.');
          }
          fieldMeta.originalProps = originalProps;
          fieldMeta.ref = fieldElem.ref;
          return React.cloneElement(fieldElem, _extends({}, props, _this2.fieldsStore.getFieldValuePropValue(fieldMeta)));
        };
      },
      getFieldProps: function getFieldProps(name) {
        var _this3 = this;

        var usersFieldOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!name) {
          throw new Error('Must call `getFieldProps` with valid name string!');
        }
        if (process.env.NODE_ENV !== 'production') {
          warning(this.fieldsStore.isValidNestedFieldName(name), 'One field name cannot be part of another, e.g. `a` and `a.b`.');
          warning(!('exclusive' in usersFieldOption), '`option.exclusive` of `getFieldProps`|`getFieldDecorator` had been remove.');
        }

        delete this.clearedFieldMetaCache[name];

        var fieldOption = _extends({
          name: name,
          trigger: DEFAULT_TRIGGER,
          valuePropName: 'value',
          validate: []
        }, usersFieldOption);

        var rules = fieldOption.rules,
            trigger = fieldOption.trigger,
            _fieldOption$validate = fieldOption.validateTrigger,
            validateTrigger = _fieldOption$validate === undefined ? trigger : _fieldOption$validate,
            validate = fieldOption.validate;


        var fieldMeta = this.fieldsStore.getFieldMeta(name);
        if ('initialValue' in fieldOption) {
          fieldMeta.initialValue = fieldOption.initialValue;
        }

        var inputProps = _extends({}, this.fieldsStore.getFieldValuePropValue(fieldOption), {
          ref: this.getCacheBind(name, name + '__ref', this.saveRef)
        });
        if (fieldNameProp) {
          inputProps[fieldNameProp] = name;
        }

        var validateRules = normalizeValidateRules(validate, rules, validateTrigger);
        var validateTriggers = getValidateTriggers(validateRules);
        validateTriggers.forEach(function (action) {
          if (inputProps[action]) return;
          inputProps[action] = _this3.getCacheBind(name, action, _this3.onCollectValidate);
        });

        // make sure that the value will be collect
        if (trigger && validateTriggers.indexOf(trigger) === -1) {
          inputProps[trigger] = this.getCacheBind(name, trigger, this.onCollect);
        }

        var meta = _extends({}, fieldMeta, fieldOption, {
          validate: validateRules
        });
        this.fieldsStore.setFieldMeta(name, meta);
        if (fieldMetaProp) {
          inputProps[fieldMetaProp] = meta;
        }

        if (fieldDataProp) {
          inputProps[fieldDataProp] = this.fieldsStore.getField(name);
        }

        return inputProps;
      },
      getFieldInstance: function getFieldInstance(name) {
        return this.instances[name];
      },
      getRules: function getRules(fieldMeta, action) {
        var actionRules = fieldMeta.validate.filter(function (item) {
          return !action || item.trigger.indexOf(action) >= 0;
        }).map(function (item) {
          return item.rules;
        });
        return flattenArray(actionRules);
      },
      setFields: function setFields(maybeNestedFields, callback, opt) {
        var _this4 = this;

        var fields = this.fieldsStore.flattenRegisteredFields(maybeNestedFields);
        if ((typeof callback === 'undefined' ? 'undefined' : _typeof(callback)) === 'object') {
          if (callback.validate) {
            opt = {
              validate: true
            };
          }
          callback = function callback() {};
        }
        this.fieldsStore.setFields(fields, opt);
        if (onFieldsChange) {
          var changedFields = Object.keys(fields).reduce(function (acc, name) {
            return set(acc, name, _this4.fieldsStore.getField(name));
          }, {});
          onFieldsChange(this.props, changedFields, this.fieldsStore.getNestedAllFields());
        }
        this.forceUpdate(callback);
      },
      resetFields: function resetFields(ns) {
        var _this5 = this;

        var newFields = this.fieldsStore.resetFields(ns);
        if (Object.keys(newFields).length > 0) {
          this.setFields(newFields);
        }
        if (ns) {
          var names = Array.isArray(ns) ? ns : [ns];
          names.forEach(function (name) {
            return delete _this5.clearedFieldMetaCache[name];
          });
        } else {
          this.clearedFieldMetaCache = {};
        }
      },
      setFieldsValue: function setFieldsValue(changedValues, callback, opt) {
        var fieldsMeta = this.fieldsStore.fieldsMeta;

        var values = this.fieldsStore.flattenRegisteredFields(changedValues);
        var newFields = Object.keys(values).reduce(function (acc, name) {
          var isRegistered = fieldsMeta[name];
          if (process.env.NODE_ENV !== 'production') {
            warning(isRegistered, 'Cannot use `setFieldsValue` until ' + 'you use `getFieldDecorator` or `getFieldProps` to register it.');
          }
          if (isRegistered) {
            var value = values[name];
            acc[name] = {
              value: value
            };
          }
          return acc;
        }, {});
        this.setFields(newFields, callback, opt);
        if (onValuesChange) {
          var allValues = this.fieldsStore.getAllValues();
          onValuesChange(this.props, changedValues, allValues);
        }
      },
      saveRef: function saveRef(name, _, component) {
        if (!component) {
          // after destroy, delete data
          this.clearedFieldMetaCache[name] = {
            field: this.fieldsStore.getField(name),
            meta: this.fieldsStore.getFieldMeta(name)
          };
          this.fieldsStore.clearField(name);
          delete this.instances[name];
          delete this.cachedBind[name];
          return;
        }
        this.recoverClearedField(name);
        var fieldMeta = this.fieldsStore.getFieldMeta(name);
        if (fieldMeta) {
          var ref = fieldMeta.ref;
          if (ref) {
            if (typeof ref === 'string') {
              throw new Error('can not set ref string for ' + name);
            }
            ref(component);
          }
        }
        this.instances[name] = component;
      },
      validateFieldsInternal: function validateFieldsInternal(fields, _ref, callback) {
        var _this6 = this;

        var fieldNames = _ref.fieldNames,
            action = _ref.action,
            _ref$options = _ref.options,
            options = _ref$options === undefined ? {} : _ref$options;

        var allRules = {};
        var allValues = {};
        var allFields = {};
        var alreadyErrors = {};
        fields.forEach(function (field) {
          var name = field.name;
          if (options.force !== true && field.dirty === false) {
            if (field.errors) {
              set(alreadyErrors, name, { errors: field.errors });
            }
            return;
          }
          var fieldMeta = _this6.fieldsStore.getFieldMeta(name);
          var newField = _extends({}, field);
          newField.errors = undefined;
          newField.validating = true;
          newField.dirty = true;
          allRules[name] = _this6.getRules(fieldMeta, action);
          allValues[name] = newField.value;
          allFields[name] = newField;
        });
        this.setFields(allFields);
        // in case normalize
        Object.keys(allValues).forEach(function (f) {
          allValues[f] = _this6.fieldsStore.getFieldValue(f);
        });
        if (callback && isEmptyObject(allFields)) {
          callback(isEmptyObject(alreadyErrors) ? null : alreadyErrors, this.fieldsStore.getFieldsValue(fieldNames));
          return;
        }
        var validator = new AsyncValidator(allRules);
        if (validateMessages) {
          validator.messages(validateMessages);
        }
        validator.validate(allValues, options, function (errors) {
          var errorsGroup = _extends({}, alreadyErrors);
          if (errors && errors.length) {
            errors.forEach(function (e) {
              var fieldName = e.field;
              var field = get(errorsGroup, fieldName);
              if ((typeof field === 'undefined' ? 'undefined' : _typeof(field)) !== 'object' || Array.isArray(field)) {
                set(errorsGroup, fieldName, { errors: [] });
              }
              var fieldErrors = get(errorsGroup, fieldName.concat('.errors'));
              fieldErrors.push(e);
            });
          }
          var expired = [];
          var nowAllFields = {};
          Object.keys(allRules).forEach(function (name) {
            var fieldErrors = get(errorsGroup, name);
            var nowField = _this6.fieldsStore.getField(name);
            // avoid concurrency problems
            if (nowField.value !== allValues[name]) {
              expired.push({
                name: name
              });
            } else {
              nowField.errors = fieldErrors && fieldErrors.errors;
              nowField.value = allValues[name];
              nowField.validating = false;
              nowField.dirty = false;
              nowAllFields[name] = nowField;
            }
          });
          _this6.setFields(nowAllFields);
          if (callback) {
            if (expired.length) {
              expired.forEach(function (_ref2) {
                var name = _ref2.name;

                var fieldErrors = [{
                  message: name + ' need to revalidate',
                  field: name
                }];
                set(errorsGroup, name, {
                  expired: true,
                  errors: fieldErrors
                });
              });
            }

            callback(isEmptyObject(errorsGroup) ? null : errorsGroup, _this6.fieldsStore.getFieldsValue(fieldNames));
          }
        });
      },
      validateFields: function validateFields(ns, opt, cb) {
        var _this7 = this;

        var _getParams = getParams(ns, opt, cb),
            names = _getParams.names,
            callback = _getParams.callback,
            options = _getParams.options;

        var fieldNames = names ? this.fieldsStore.getValidFieldsFullName(names) : this.fieldsStore.getValidFieldsName();
        var fields = fieldNames.filter(function (name) {
          var fieldMeta = _this7.fieldsStore.getFieldMeta(name);
          return hasRules(fieldMeta.validate);
        }).map(function (name) {
          var field = _this7.fieldsStore.getField(name);
          field.value = _this7.fieldsStore.getFieldValue(name);
          return field;
        });
        if (!fields.length) {
          if (callback) {
            callback(null, this.fieldsStore.getFieldsValue(fieldNames));
          }
          return;
        }
        if (!('firstFields' in options)) {
          options.firstFields = fieldNames.filter(function (name) {
            var fieldMeta = _this7.fieldsStore.getFieldMeta(name);
            return !!fieldMeta.validateFirst;
          });
        }
        this.validateFieldsInternal(fields, {
          fieldNames: fieldNames,
          options: options
        }, callback);
      },
      isSubmitting: function isSubmitting() {
        if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
          warning(false, '`isSubmitting` is deprecated. ' + 'Actually, it\'s more convenient to handle submitting status by yourself.');
        }
        return this.state.submitting;
      },
      submit: function submit(callback) {
        var _this8 = this;

        if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
          warning(false, '`submit` is deprecated.' + 'Actually, it\'s more convenient to handle submitting status by yourself.');
        }
        var fn = function fn() {
          _this8.setState({
            submitting: false
          });
        };
        this.setState({
          submitting: true
        });
        callback(fn);
      },
      render: function render() {
        var _props = this.props,
            wrappedComponentRef = _props.wrappedComponentRef,
            restProps = _objectWithoutProperties(_props, ['wrappedComponentRef']);

        var formProps = _defineProperty({}, formPropName, this.getForm());
        if (withRef) {
          if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
            warning(false, '`withRef` is deprecated, please use `wrappedComponentRef` instead. ' + 'See: https://github.com/react-component/form#note-use-wrappedcomponentref-instead-of-withref-after-rc-form140');
          }
          formProps.ref = 'wrappedComponent';
        } else if (wrappedComponentRef) {
          formProps.ref = wrappedComponentRef;
        }
        var props = mapProps.call(this, _extends({}, formProps, restProps));
        return React.createElement(WrappedComponent, props);
      }
    });

    return argumentContainer(Form, WrappedComponent);
  };
}

export default createBaseForm;