webpackJsonp([12],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return regionStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return errorStyle; });
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

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(506);


/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rc_form__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles__ = __webpack_require__(12);




/* eslint react/no-multi-comp:0, no-console:0, react/prefer-stateless-function:0 */






function Email(props) {
  var _props$form = props.form,
      getFieldProps = _props$form.getFieldProps,
      getFieldError = _props$form.getFieldError;

  var errors = getFieldError('email');
  return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
    'div',
    { style: __WEBPACK_IMPORTED_MODULE_7__styles__["b" /* regionStyle */] },
    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      'div',
      null,
      'email sync validate'
    ),
    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('input', getFieldProps('email', {
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
      { style: __WEBPACK_IMPORTED_MODULE_7__styles__["a" /* errorStyle */] },
      errors ? errors.join(',') : null
    )
  );
}

Email.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_4_rc_form__["formShape"]
};

var User = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(User, _React$Component);

  function User() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, User);

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(User, [{
    key: 'render',
    value: function render() {
      var _props$form2 = this.props.form,
          getFieldProps = _props$form2.getFieldProps,
          getFieldError = _props$form2.getFieldError;

      var errors = getFieldError('user');
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { style: __WEBPACK_IMPORTED_MODULE_7__styles__["b" /* regionStyle */] },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          null,
          'user async validate'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('input', getFieldProps('user', {
            rules: [{
              required: true
            }]
          }))
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { style: __WEBPACK_IMPORTED_MODULE_7__styles__["a" /* errorStyle */] },
          errors ? errors.join(',') : null
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
    var _ref;

    var _temp, _this2, _ret;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this2), _this2.onSubmit = function (e) {
      e.preventDefault();
      _this2.props.form.validateFields(function (error, values) {
        if (!error) {
          console.log('ok', values);
          setTimeout(function () {
            // server validate
            if (values.user === 'yiminghe') {
              _this2.props.form.setFields({
                user: {
                  value: values.user,
                  errors: [new Error('forbid ha')]
                }
              });
            }
          }, 500);
        } else {
          console.log('error', error, values);
        }
      });
    }, _temp), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this2, _ret);
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
          'setFields'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'form',
          { onSubmit: this.onSubmit },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(User, { form: form }),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Email, { form: form }),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            { style: __WEBPACK_IMPORTED_MODULE_7__styles__["b" /* regionStyle */] },
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
  form: __WEBPACK_IMPORTED_MODULE_4_rc_form__["formShape"]
};


var NewForm = Object(__WEBPACK_IMPORTED_MODULE_4_rc_form__["a" /* createForm */])()(Form);

__WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(NewForm, null), document.getElementById('__react-content'));

/***/ })

},[505]);
//# sourceMappingURL=server-validate.js.map