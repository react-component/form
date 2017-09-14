webpackJsonp([13],{

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return regionStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return errorStyle; });
var regionStyle = {
  border: '1px solid red',
  marginTop: 10,
  padding: 10
};

var errorStyle = {
  color: 'red',
  marginTop: 10,
  padding: 10
};

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src___ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src___["a"]; });
// export this package's api



/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createForm__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__createForm__["a"]; });
// export this package's api



/***/ }),

/***/ 30:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rc_form__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_dist_antd_css__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_dist_antd_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_antd_dist_antd_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles__ = __webpack_require__(13);




/* eslint react/no-multi-comp:0, no-console:0 */








var CustomInput = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(CustomInput, _React$Component);

  function CustomInput() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, CustomInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = CustomInput.__proto__ || Object.getPrototypeOf(CustomInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      data: []
    }, _this.checkUpper = function (rule, value, callback) {
      if (value !== value.toUpperCase()) {
        callback(new Error('need to be upper!'));
      } else {
        callback();
      }
    }, _this.toUpper = function (v, prev) {
      if (v === prev) {
        return v;
      }
      return v.toUpperCase();
    }, _temp), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(CustomInput, [{
    key: 'render',
    value: function render() {
      var _props$form = this.props.form,
          getFieldProps = _props$form.getFieldProps,
          getFieldError = _props$form.getFieldError;

      var errors = getFieldError('upper');
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { style: __WEBPACK_IMPORTED_MODULE_9__styles__["a" /* regionStyle */] },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          null,
          'upper normalize'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('input', getFieldProps('upper', {
            normalize: this.toUpper,
            rules: [{
              validator: this.checkUpper
            }]
          }))
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { style: __WEBPACK_IMPORTED_MODULE_9__styles__["b" /* errorStyle */] },
          errors ? errors.join(',') : null
        )
      );
    }
  }]);

  return CustomInput;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

CustomInput.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object
};

var MaxMin = function (_React$Component2) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(MaxMin, _React$Component2);

  function MaxMin() {
    var _ref2;

    var _temp2, _this2, _ret2;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, MaxMin);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref2 = MaxMin.__proto__ || Object.getPrototypeOf(MaxMin)).call.apply(_ref2, [this].concat(args))), _this2), _this2.normalizeMin = function (value, prevValue, allValues) {
      console.log('normalizeMin', allValues.min, allValues.max);
      var previousAllValues = _this2.props.form.getFieldsValue();
      if (allValues.max !== previousAllValues.max) {
        // max changed
        if (value === '' || Number(allValues.max) < Number(value)) {
          return allValues.max;
        }
      }
      return value;
    }, _this2.normalizeMax = function (value, prevValue, allValues) {
      console.log('normalizeMax', allValues.min, allValues.max);
      var previousAllValues = _this2.props.form.getFieldsValue();
      if (allValues.min !== previousAllValues.min) {
        // min changed
        if (value === '' || Number(allValues.min) > Number(value)) {
          return allValues.min;
        }
      }
      return value;
    }, _temp2), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this2, _ret2);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(MaxMin, [{
    key: 'render',
    value: function render() {
      var getFieldProps = this.props.form.getFieldProps;

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { style: __WEBPACK_IMPORTED_MODULE_9__styles__["a" /* regionStyle */] },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          null,
          'min: ',
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'select',
            getFieldProps('min', {
              normalize: this.normalizeMin,
              initialValue: ''
            }),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'option',
              { value: '' },
              'empty'
            ),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'option',
              { value: '1' },
              '1'
            ),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'option',
              { value: '2' },
              '2'
            ),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'option',
              { value: '3' },
              '3'
            ),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'option',
              { value: '4' },
              '4'
            ),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'option',
              { value: '5' },
              '5'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          null,
          'max: ',
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'select',
            getFieldProps('max', {
              initialValue: '',
              normalize: this.normalizeMax
            }),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'option',
              { value: '' },
              'empty'
            ),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'option',
              { value: '1' },
              '1'
            ),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'option',
              { value: '2' },
              '2'
            ),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'option',
              { value: '3' },
              '3'
            ),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'option',
              { value: '4' },
              '4'
            ),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'option',
              { value: '5' },
              '5'
            )
          )
        )
      );
    }
  }]);

  return MaxMin;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

MaxMin.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object
};

var Form = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Form, _Component);

  function Form() {
    var _ref3;

    var _temp3, _this3, _ret3;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Form);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret3 = (_temp3 = (_this3 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref3 = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref3, [this].concat(args))), _this3), _this3.onSubmit = function (e) {
      e.preventDefault();
      _this3.props.form.validateFields(function (error, values) {
        if (!error) {
          console.log('ok', values);
        } else {
          console.log('error', error, values);
        }
      });
    }, _temp3), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this3, _ret3);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Form, [{
    key: 'render',
    value: function render() {
      var form = this.props.form;

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { style: { margin: 20 } },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'h2',
          null,
          'normalize'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'form',
          { onSubmit: this.onSubmit },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(CustomInput, { form: form }),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(MaxMin, { form: form }),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            { style: __WEBPACK_IMPORTED_MODULE_9__styles__["a" /* regionStyle */] },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'button',
              null,
              'submit'
            )
          )
        )
      );
    }
  }]);

  return Form;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

Form.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object
};


var NewForm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rc_form__["a" /* createForm */])()(Form);

__WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(NewForm, null), document.getElementById('__react-content'));

/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(393);


/***/ })

},[665]);
//# sourceMappingURL=normalize.js.map