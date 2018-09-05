webpackJsonp([7],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src___ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__src___["b"]; });
// export this package's api



/***/ }),

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

/***/ 24:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rc_form__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_dist_antd_css__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_dist_antd_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_antd_dist_antd_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles__ = __webpack_require__(14);




/* eslint react/no-multi-comp:0, no-console:0 */







function Email(props) {
  var _props$form = props.form,
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
      'email sync validate'
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
        }]
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

Email.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_4_rc_form__["formShape"]
};

var User = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(User, _React$Component);

  function User() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = User.__proto__ || Object.getPrototypeOf(User)).call.apply(_ref, [this].concat(args))), _this), _this.userExists = function (rule, value, callback) {
      setTimeout(function () {
        if (value === '1') {
          callback([new Error('are you kidding?')]);
        } else if (value === 'yiminghe') {
          callback([new Error('forbid yiminghe')]);
        } else {
          callback();
        }
      }, 300);
    }, _temp), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(User, [{
    key: 'render',
    value: function render() {
      var _props$form2 = this.props.form,
          getFieldProps = _props$form2.getFieldProps,
          getFieldError = _props$form2.getFieldError,
          isFieldValidating = _props$form2.isFieldValidating;

      var errors = getFieldError('user');
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { style: __WEBPACK_IMPORTED_MODULE_8__styles__["a" /* regionStyle */] },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          null,
          'user async validate'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('input', getFieldProps('user', {
            initialValue: '',
            rules: [{
              required: true,
              min: 2
            }, {
              validator: this.userExists
            }]
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
          isFieldValidating('user') ? 'validating' : null
        )
      );
    }
  }]);

  return User;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

User.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_4_rc_form__["formShape"]
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

    return _ret2 = (_temp2 = (_this2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref2 = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref2, [this].concat(args))), _this2), _this2.onSubmit = function (e) {
      console.log('submit');
      e.preventDefault();
      _this2.props.form.validateFields({
        // firstFields: false,
      }, function (error, values) {
        if (!error) {
          console.log('ok', values);
        } else {
          console.log('error', error, values);
        }
      });
    }, _this2.reset = function (e) {
      e.preventDefault();
      _this2.props.form.resetFields();
    }, _temp2), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this2, _ret2);
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
          'validateFirst'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'form',
          { onSubmit: this.onSubmit },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(User, { form: form }),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Email, { form: form }),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            { style: __WEBPACK_IMPORTED_MODULE_8__styles__["a" /* regionStyle */] },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'button',
              { onClick: this.reset },
              'reset'
            ),
            '\xA0',
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('input', { type: 'submit', value: 'submit' })
          )
        )
      );
    }
  }]);

  return Form;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

Form.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_4_rc_form__["formShape"]
};


var NewForm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rc_form__["b" /* createForm */])()(Form);

__WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(NewForm, null), document.getElementById('__react-content'));

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(294);


/***/ })

},[506]);
//# sourceMappingURL=validateFirst.js.map