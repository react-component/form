webpackJsonp([15],{

/***/ 11:
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

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(439);


/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_form__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles__ = __webpack_require__(11);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint react/no-multi-comp:0, no-console:0, react/prefer-stateless-function:0 */







function Email(props) {
  var hidden = props.hidden,
      form = props.form;
  var getFieldProps = form.getFieldProps,
      getFieldError = form.getFieldError,
      isFieldValidating = form.isFieldValidating;

  var errors = getFieldError('email');
  var style = _extends({}, __WEBPACK_IMPORTED_MODULE_4__styles__["b" /* regionStyle */], {
    display: hidden ? 'none' : ''
  });
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      null,
      'email:',
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', getFieldProps('email', {
        rules: [{
          required: true
        }, {
          type: 'email',
          message: '错误的 email 格式'
        }],
        hidden: hidden
      }))
    ),
    errors ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      { style: __WEBPACK_IMPORTED_MODULE_4__styles__["a" /* errorStyle */] },
      errors.join(',')
    ) : null,
    isFieldValidating('email') ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      { style: __WEBPACK_IMPORTED_MODULE_4__styles__["a" /* errorStyle */] },
      'validating'
    ) : null
  );
}

Email.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_0_rc_form__["formShape"],
  hidden: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
};

var User = function (_Component) {
  _inherits(User, _Component);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
  }

  _createClass(User, [{
    key: 'render',
    value: function render() {
      var _props$form = this.props.form,
          getFieldProps = _props$form.getFieldProps,
          getFieldError = _props$form.getFieldError,
          isFieldValidating = _props$form.isFieldValidating;

      var errors = getFieldError('user');
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { style: __WEBPACK_IMPORTED_MODULE_4__styles__["b" /* regionStyle */] },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          null,
          'user:',
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', getFieldProps('user', {
            initialValue: 'x',
            rules: [{
              required: true
            }]
          }))
        ),
        errors ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { style: __WEBPACK_IMPORTED_MODULE_4__styles__["a" /* errorStyle */] },
          errors.join(',')
        ) : null,
        isFieldValidating('user') ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { style: __WEBPACK_IMPORTED_MODULE_4__styles__["a" /* errorStyle */] },
          'validating'
        ) : null
      );
    }
  }]);

  return User;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

User.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_0_rc_form__["formShape"]
};

var Form = function (_Component2) {
  _inherits(Form, _Component2);

  function Form() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this2), _this2.onSubmit = function (e) {
      e.preventDefault();
      _this2.props.form.validateFields(function (error, values) {
        if (!error) {
          console.log('ok', values);
        } else {
          console.log('error', error, values);
        }
      });
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      var form = this.props.form;
      var getFieldProps = form.getFieldProps,
          getFieldValue = form.getFieldValue;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { style: { margin: 20 } },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h2',
          null,
          'overview'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'form',
          { onSubmit: this.onSubmit },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { style: __WEBPACK_IMPORTED_MODULE_4__styles__["b" /* regionStyle */] },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'label',
                null,
                'remove/add user:',
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', _extends({
                  type: 'checkbox'
                }, getFieldProps('remove_user', {
                  // initialValue:true,
                  valuePropName: 'checked'
                })))
              )
            )
          ),
          getFieldValue('remove_user') ? null : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(User, { form: form }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { style: __WEBPACK_IMPORTED_MODULE_4__styles__["b" /* regionStyle */] },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'label',
                null,
                'hide/show email:',
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', _extends({
                  type: 'checkbox'
                }, getFieldProps('hide_email', {
                  // initialValue:true,
                  valuePropName: 'checked'
                })))
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Email, { form: form, hidden: !!getFieldValue('hide_email') }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { style: __WEBPACK_IMPORTED_MODULE_4__styles__["b" /* regionStyle */] },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
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
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Form.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_0_rc_form__["formShape"]
};


var NewForm = Object(__WEBPACK_IMPORTED_MODULE_0_rc_form__["a" /* createForm */])()(Form);

__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(NewForm, null), document.getElementById('__react-content'));

/***/ })

},[438]);
//# sourceMappingURL=dynamic.js.map