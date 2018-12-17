webpackJsonp([14],{

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

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(419);


/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rc_form__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles__ = __webpack_require__(12);





/* eslint react/no-multi-comp:0, no-console:0, react/prefer-stateless-function:0,
no-undef:0, react/no-unescaped-entities:0 */






function getFileValueProps(value) {
  if (value && value.target) {
    return {
      value: value.target.value
    };
  }
  return {
    value: value
  };
}

function getValueFromFileEvent(_ref) {
  var target = _ref.target;

  return {
    target: target
  };
}

var Form = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Form, _React$Component);

  function Form() {
    var _ref2;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref2 = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref2, [this].concat(args))), _this), _this.onSubmit = function (e) {
      e.preventDefault();
      _this.props.form.validateFields(function (error, values) {
        console.log(error, values);
        if (!error) {
          var data = new FormData();
          data.append('file', values.attachment.target.files[0]);
          fetch('/post.htm', {
            method: 'post',
            body: data
          });
        }
      });
    }, _this.checkSize = function (rule, value, callback) {
      if (value && value.target) {
        var files = value.target.files;
        if (files[0]) {
          callback(files[0].size > 1000000 ? 'file size must be less than 1M' : undefined);
        } else {
          callback();
        }
      } else {
        callback();
      }
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Form, [{
    key: 'render',
    value: function render() {
      var _props$form = this.props.form,
          getFieldProps = _props$form.getFieldProps,
          getFieldError = _props$form.getFieldError;

      var errors = getFieldError('attachment');
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        {
          style: __WEBPACK_IMPORTED_MODULE_8__styles__["b" /* regionStyle */]
        },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          null,
          'attachment:'
        ),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('input', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ type: 'file' }, getFieldProps('attachment', {
            getValueProps: getFileValueProps,
            getValueFromEvent: getValueFromFileEvent,
            rules: [this.checkSize]
          })))
        ),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          { style: __WEBPACK_IMPORTED_MODULE_8__styles__["a" /* errorStyle */] },
          errors ? errors.join(',') : null
        ),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'button',
          { onClick: this.onSubmit },
          'submit'
        )
      );
    }
  }]);

  return Form;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

Form.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_5_rc_form__["formShape"]
};


Form = Object(__WEBPACK_IMPORTED_MODULE_5_rc_form__["a" /* createForm */])()(Form);

var App = function (_React$Component2) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(App, _React$Component2);

  function App() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, App);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(App, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'h2',
          null,
          'input[type="file"]'
        ),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Form, null)
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(App, null), document.getElementById('__react-content'));

/***/ })

},[418]);
//# sourceMappingURL=file-input.js.map