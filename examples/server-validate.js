webpackJsonp([12],{

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

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(495);


/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_form__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles__ = __webpack_require__(11);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint react/no-multi-comp:0, no-console:0, react/prefer-stateless-function:0 */






function Email(props) {
  var _props$form = props.form,
      getFieldProps = _props$form.getFieldProps,
      getFieldError = _props$form.getFieldError;

  var errors = getFieldError('email');
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: __WEBPACK_IMPORTED_MODULE_3__styles__["b" /* regionStyle */] },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      null,
      'email sync validate'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', getFieldProps('email', {
        rules: [{
          required: true
        }, {
          type: 'email',
          message: '错误的 email 格式'
        }]
      }))
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      { style: __WEBPACK_IMPORTED_MODULE_3__styles__["a" /* errorStyle */] },
      errors ? errors.join(',') : null
    )
  );
}

Email.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_0_rc_form__["formShape"]
};

var User = function (_React$Component) {
  _inherits(User, _React$Component);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
  }

  _createClass(User, [{
    key: 'render',
    value: function render() {
      var _props$form2 = this.props.form,
          getFieldProps = _props$form2.getFieldProps,
          getFieldError = _props$form2.getFieldError;

      var errors = getFieldError('user');
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { style: __WEBPACK_IMPORTED_MODULE_3__styles__["b" /* regionStyle */] },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          null,
          'user async validate'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', getFieldProps('user', {
            rules: [{
              required: true
            }]
          }))
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { style: __WEBPACK_IMPORTED_MODULE_3__styles__["a" /* errorStyle */] },
          errors ? errors.join(',') : null
        )
      );
    }
  }]);

  return User;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

User.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_0_rc_form__["formShape"]
};

var Form = function (_Component) {
  _inherits(Form, _Component);

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
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      var form = this.props.form;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { style: { margin: 20 } },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h2',
          null,
          'setFields'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'form',
          { onSubmit: this.onSubmit },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(User, { form: form }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Email, { form: form }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { style: __WEBPACK_IMPORTED_MODULE_3__styles__["b" /* regionStyle */] },
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

__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(NewForm, null), document.getElementById('__react-content'));

/***/ })

},[494]);
//# sourceMappingURL=server-validate.js.map