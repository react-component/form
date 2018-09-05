webpackJsonp([17],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src___ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__src___["b"]; });
// export this package's api



/***/ }),

/***/ 282:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rc_form__ = __webpack_require__(12);




/* eslint react/no-multi-comp:0, no-console:0 */





var Form = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Form, _React$Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = function (e) {
      e.preventDefault();
      _this.props.form.validateFields(function (error, values) {
        if (!error) {
          console.log('ok', values);
        } else {
          console.log('error', error, values);
        }
      });
    }, _this.onChange = function (e) {
      console.log(e.target.value);
    }, _temp), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Form, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.nameDecorator = this.props.form.getFieldDecorator('name', {
        initialValue: '',
        rules: [{
          required: true,
          message: 'What\'s your name?'
        }]
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var getFieldError = this.props.form.getFieldError;


      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'form',
        { onSubmit: this.onSubmit },
        this.nameDecorator(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', {
          onChange: this.onChange
        })),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          { style: { color: 'red' } },
          (getFieldError('name') || []).join(', ')
        ),
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

Form.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_6_rc_form__["formShape"]
};


var WrappedForm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rc_form__["b" /* createForm */])()(Form);
__WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(WrappedForm, null), document.getElementById('__react-content'));

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(282);


/***/ })

},[494]);
//# sourceMappingURL=getFieldDecorator.js.map