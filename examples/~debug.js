webpackJsonp([20],{

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(516);


/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_form__ = __webpack_require__(15);





/* eslint-disable */





var App = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(App, _React$Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (e) {
      e.preventDefault();
      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    }, _this.handleSelectChange = function (value) {
      console.log(value);
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(App, [{
    key: 'render',
    value: function render() {
      var form = this.props.form;
      var getFieldDecorator = form.getFieldDecorator,
          getFieldsError = form.getFieldsError;

      var code = form.getFieldValue("Demo1");

      console.log('Error:', getFieldsError());

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        getFieldDecorator("Demo1", {
          rules: [{ required: true, message: "Please select your gender!" }]
        })(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'select',
          { onChange: this.handleSelectChange },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'option',
            { value: '-' },
            '-'
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'option',
            { value: 'err1' },
            'Error Demo 2'
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'option',
            { value: 'err2' },
            'Error Demo 3'
          )
        )),
        getFieldDecorator("Demo2", {
          rules: [{
            required: code == "err1",
            message: "Please select your gender!"
          }]
        })(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('input', null)),
        getFieldDecorator("Demo3", {
          rules: [{
            required: code == "err2",
            message: "Please select your gender!"
          }]
        })(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('input', null)),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'button',
          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({ type: 'primary' }, 'type', 'submit'),
          'Submit'
        )
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

var WrappedApp = Object(__WEBPACK_IMPORTED_MODULE_7_rc_form__["a" /* createForm */])()(App);

__WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(WrappedApp, null), document.getElementById('__react-content'));

/* eslint-enable */

/***/ })

},[515]);
//# sourceMappingURL=~debug.js.map