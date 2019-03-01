webpackJsonp([17],{

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(522);


/***/ }),

/***/ 522:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rc_form__ = __webpack_require__(15);




/* eslint-disable */





var MyInput = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(MyInput, _React$Component);

  function MyInput() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, MyInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = MyInput.__proto__ || Object.getPrototypeOf(MyInput)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (_ref2) {
      var value = _ref2.target.value;
      var onChange = _this.props.onChange;

      onChange(value.split(','));
    }, _temp), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(MyInput, [{
    key: 'render',
    value: function render() {
      var _props$value = this.props.value,
          value = _props$value === undefined ? [] : _props$value;

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', { onChange: this.onChange, value: value.join(',') });
    }
  }]);

  return MyInput;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

var Form = function (_React$Component2) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Form, _React$Component2);

  function Form() {
    var _ref3;

    var _temp2, _this2, _ret2;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Form);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref3 = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref3, [this].concat(args))), _this2), _this2.onSubmit = function (e) {
      e.preventDefault();
      _this2.props.form.validateFields(function (error, values) {
        if (!error) {
          console.log('ok', values);
        } else {
          console.log('error', error, values);
        }
      });
    }, _temp2), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this2, _ret2);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Form, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.nameDecorator = this.props.form.getFieldDecorator('name', {
        initialValue: [],
        rules: [{ required: true, message: 'The tags must be urls', type: 'array', defaultField: { type: 'url' } }]
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var getFieldError = this.props.form.getFieldError;


      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'form',
        { onSubmit: this.onSubmit },
        this.nameDecorator(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(MyInput, null)),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          { style: { color: 'red' } },
          (getFieldError('name') || []).join(', ')
        ),
        this.props.form.getFieldDecorator('test.a', {
          rules: [{ required: true }]
        })(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', null)),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'button',
          null,
          'Submit'
        )
      );
    }
  }]);

  return Form;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

var WrappedForm = Object(__WEBPACK_IMPORTED_MODULE_6_rc_form__["a" /* createForm */])()(Form);
__WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(WrappedForm, null), document.getElementById('__react-content'));
/* eslint-enable */

/***/ })

},[521]);
//# sourceMappingURL=~debug4.js.map