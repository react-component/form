webpackJsonp([19],{

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(487);


/***/ }),

/***/ 487:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rc_form__ = __webpack_require__(14);




/* eslint-disable */





var Popup = function Popup(_ref) {
  var visible = _ref.visible,
      children = _ref.children;

  if (!visible) return null;
  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    'div',
    null,
    children
  );
};

var Demo = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Demo, _React$Component);

  function Demo() {
    var _ref2;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Demo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref2 = Demo.__proto__ || Object.getPrototypeOf(Demo)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      init: false
    }, _this.onClick = function () {
      var validateFields = _this.props.form.validateFields;

      validateFields(function (error) {
        console.log('~>', error);
      });
    }, _temp), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Demo, [{
    key: 'render',
    value: function render() {
      // const { init } = this.state;
      var _props = this.props,
          init = _props.init,
          show = _props.show;
      var getFieldDecorator = this.props.form.getFieldDecorator;


      var name = void 0;
      var age = void 0;

      if (init) {
        name = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          null,
          'name:',
          getFieldDecorator('name', {
            rules: [{ required: true }]
          })(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', null))
        );
      } else {
        age = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          null,
          'age:',
          getFieldDecorator('age', {
            rules: [{ required: true }]
          })(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', null))
        );
      }

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          Popup,
          { visible: show },
          name,
          age
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'button',
          { onClick: this.onClick },
          'TEST'
        )
      );
    }
  }]);

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Demo = Object(__WEBPACK_IMPORTED_MODULE_6_rc_form__["a" /* createForm */])()(Demo);

var Test = function (_React$Component2) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Test, _React$Component2);

  function Test() {
    var _ref3;

    var _temp2, _this2, _ret2;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Test);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref3 = Test.__proto__ || Object.getPrototypeOf(Test)).call.apply(_ref3, [this].concat(args))), _this2), _this2.state = {
      show: false,
      init: false
    }, _this2.onClick = function () {
      _this2.setState({ show: true });
      _this2.setState({ init: true });
    }, _temp2), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this2, _ret2);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Test, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          show = _state.show,
          init = _state.init;

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Demo, { show: show, init: init }),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'button',
          { onClick: this.onClick },
          'Show'
        )
      );
    }
  }]);

  return Test;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Test, null), document.getElementById('__react-content'));

/* eslint-enable */

/***/ })

},[486]);
//# sourceMappingURL=~debug.js.map