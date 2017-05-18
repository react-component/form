webpackJsonp([20],{

/***/ 14:
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

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src___ = __webpack_require__(16);
// export this package's api

/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__src___);

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createForm__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createForm", function() { return __WEBPACK_IMPORTED_MODULE_0__createForm__["a"]; });
// export this package's api



/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rc_form__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles__ = __webpack_require__(14);




/* eslint react/no-multi-comp:0, no-console:0 */







var Email = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Email, _React$Component);

  function Email() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Email);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Email.__proto__ || Object.getPrototypeOf(Email)).call.apply(_ref, [this].concat(args))), _this), _this.checkSpecial = function (rule, value, callback) {
      setTimeout(function () {
        if (value === 'yiminghe@gmail.com') {
          callback('can not be!');
        } else {
          callback();
        }
      }, 1000);
    }, _temp), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Email, [{
    key: 'render',
    value: function render() {
      var _props$form = this.props.form,
          getFieldProps = _props$form.getFieldProps,
          getFieldError = _props$form.getFieldError,
          isFieldValidating = _props$form.isFieldValidating;

      var errors = getFieldError('email');
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { style: __WEBPACK_IMPORTED_MODULE_8__styles__["a" /* regionStyle */] },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          null,
          'email validate onBlur'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('input', getFieldProps('email', {
            initialValue: '',
            validateFirst: true,
            rules: [{
              required: true
            }, {
              type: 'email',
              message: '错误的 email 格式'
            }, this.checkSpecial],
            validateTrigger: 'onBlur'
          }))
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { style: __WEBPACK_IMPORTED_MODULE_8__styles__["b" /* errorStyle */] },
          errors ? errors.join(',') : null
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { style: __WEBPACK_IMPORTED_MODULE_8__styles__["b" /* errorStyle */] },
          isFieldValidating('email') ? 'validating' : null
        )
      );
    }
  }]);

  return Email;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

Email.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object
};

var Form = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Form, _Component);

  function Form() {
    var _ref2;

    var _temp2, _this2, _ret2;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Form);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref2 = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {
      loading: true
    }, _this2.onSubmit = function (e) {
      e.preventDefault();
      _this2.props.form.submit(function (callback) {
        setTimeout(function () {
          _this2.props.form.validateFields(function (error, values) {
            if (!error) {
              console.log('ok', values);
            } else {
              console.log('error', error, values);
            }
            callback();
          });
        }, 1000);
      });
    }, _this2.reset = function (e) {
      e.preventDefault();
      _this2.props.form.resetFields();
    }, _temp2), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this2, _ret2);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Form, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      setTimeout(function () {
        _this3.setState({
          loading: false
        }, function () {
          setTimeout(function () {
            _this3.props.form.setFieldsInitialValue({
              email: 'xx@gmail.com'
            });
          }, 1000);
        });
      }, 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.loading) {
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'b',
          null,
          'loading'
        );
      }
      var form = this.props.form;

      var disabled = form.isFieldsValidating() || form.isSubmitting();
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { style: { margin: 20 } },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'h2',
          null,
          'async init field'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'form',
          { onSubmit: this.onSubmit },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Email, { form: form }),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            { style: __WEBPACK_IMPORTED_MODULE_8__styles__["a" /* regionStyle */] },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'button',
              { disabled: disabled, type: 'submit' },
              'submit'
            ),
            '\xA0',
            disabled ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'span',
              { style: { color: 'red' } },
              'disabled'
            ) : null,
            '\xA0',
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'button',
              { disabled: disabled, onClick: this.reset },
              'reset'
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


var NewForm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rc_form__["createForm"])()(Form);

__WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(NewForm, null), document.getElementById('__react-content'));

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(347);


/***/ })

},[581]);
//# sourceMappingURL=async-init.js.map