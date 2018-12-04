webpackJsonp([15],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src___ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src___["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src___["c"]; });
// export this package's api



/***/ }),

/***/ 13:
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

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(417);


/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rc_form__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles__ = __webpack_require__(13);





/* eslint react/no-multi-comp:0, no-console:0, react/prefer-stateless-function:0 */







function Email(props) {
  var hidden = props.hidden,
      form = props.form;
  var getFieldProps = form.getFieldProps,
      getFieldError = form.getFieldError,
      isFieldValidating = form.isFieldValidating;

  var errors = getFieldError('email');
  var style = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_9__styles__["b" /* regionStyle */], {
    display: hidden ? 'none' : ''
  });
  return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
      'div',
      null,
      'email:',
      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('input', getFieldProps('email', {
        rules: [{
          required: true
        }, {
          type: 'email',
          message: '错误的 email 格式'
        }],
        hidden: hidden
      }))
    ),
    errors ? __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
      'div',
      { style: __WEBPACK_IMPORTED_MODULE_9__styles__["a" /* errorStyle */] },
      errors.join(',')
    ) : null,
    isFieldValidating('email') ? __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
      'div',
      { style: __WEBPACK_IMPORTED_MODULE_9__styles__["a" /* errorStyle */] },
      'validating'
    ) : null
  );
}

Email.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_5_rc_form__["formShape"],
  hidden: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool
};

var User = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(User, _Component);

  function User() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, User);

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(User, [{
    key: 'render',
    value: function render() {
      var _props$form = this.props.form,
          getFieldProps = _props$form.getFieldProps,
          getFieldError = _props$form.getFieldError,
          isFieldValidating = _props$form.isFieldValidating;

      var errors = getFieldError('user');
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        { style: __WEBPACK_IMPORTED_MODULE_9__styles__["b" /* regionStyle */] },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          null,
          'user:',
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('input', getFieldProps('user', {
            initialValue: 'x',
            rules: [{
              required: true
            }]
          }))
        ),
        errors ? __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          { style: __WEBPACK_IMPORTED_MODULE_9__styles__["a" /* errorStyle */] },
          errors.join(',')
        ) : null,
        isFieldValidating('user') ? __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          { style: __WEBPACK_IMPORTED_MODULE_9__styles__["a" /* errorStyle */] },
          'validating'
        ) : null
      );
    }
  }]);

  return User;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

User.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_5_rc_form__["formShape"]
};

var Form = function (_Component2) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Form, _Component2);

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
      var getFieldProps = form.getFieldProps,
          getFieldValue = form.getFieldValue;

      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        { style: { margin: 20 } },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'h2',
          null,
          'overview'
        ),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'form',
          { onSubmit: this.onSubmit },
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'div',
            { style: __WEBPACK_IMPORTED_MODULE_9__styles__["b" /* regionStyle */] },
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'label',
                null,
                'remove/add user:',
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('input', __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({
                  type: 'checkbox'
                }, getFieldProps('remove_user', {
                  // initialValue:true,
                  valuePropName: 'checked'
                })))
              )
            )
          ),
          getFieldValue('remove_user') ? null : __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(User, { form: form }),
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'div',
            { style: __WEBPACK_IMPORTED_MODULE_9__styles__["b" /* regionStyle */] },
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
                'label',
                null,
                'hide/show email:',
                __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('input', __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({
                  type: 'checkbox'
                }, getFieldProps('hide_email', {
                  // initialValue:true,
                  valuePropName: 'checked'
                })))
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Email, { form: form, hidden: !!getFieldValue('hide_email') }),
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'div',
            { style: __WEBPACK_IMPORTED_MODULE_9__styles__["b" /* regionStyle */] },
            __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
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
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

Form.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_5_rc_form__["formShape"]
};


var NewForm = Object(__WEBPACK_IMPORTED_MODULE_5_rc_form__["a" /* createForm */])()(Form);

__WEBPACK_IMPORTED_MODULE_8_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(NewForm, null), document.getElementById('__react-content'));

/***/ })

},[416]);
//# sourceMappingURL=dynamic.js.map