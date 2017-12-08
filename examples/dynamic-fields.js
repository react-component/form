webpackJsonp([18],{

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src___ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src___["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src___["b"]; });
// export this package's api



/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createForm__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createFormField__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__createForm__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__createFormField__["b"]; });
// export this package's api




/***/ }),

/***/ 280:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_form__ = __webpack_require__(14);




/* eslint react/no-multi-comp:0, no-console:0 */






var Form1 = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Form1, _React$Component);

  function Form1() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Form1);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Form1.__proto__ || Object.getPrototypeOf(Form1)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      useInput: true
    }, _this.onSubmit = function (e) {
      e.preventDefault();
      _this.props.form.validateFields(function (error, values) {
        if (!error) {
          console.log('ok', values);
        } else {
          console.log('error', error, values);
        }
      });
    }, _this.changeUseInput = function (e) {
      _this.setState({
        useInput: e.target.checked
      });
    }, _temp), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Form1, [{
    key: 'render',
    value: function render() {
      var _props$form = this.props.form,
          getFieldError = _props$form.getFieldError,
          getFieldDecorator = _props$form.getFieldDecorator;


      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'form',
        { onSubmit: this.onSubmit },
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'h2',
          null,
          'situation 1'
        ),
        this.state.useInput ? getFieldDecorator('name', {
          initialValue: '',
          rules: [{
            required: true,
            message: 'What\'s your name 1?'
          }]
        })(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', null)) : null,
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'span',
          null,
          'text content'
        ),
        this.state.useInput ? null : getFieldDecorator('name', {
          initialValue: '',
          rules: [{
            required: true,
            message: 'What\'s your name 2?'
          }]
        })(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', null)),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'label',
            null,
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', { type: 'checkbox', checked: this.state.useInput, onChange: this.changeUseInput }),
            'change input'
          ),
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

  return Form1;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Form1.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object
};

var Form2 = function (_React$Component2) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Form2, _React$Component2);

  function Form2() {
    var _ref2;

    var _temp2, _this2, _ret2;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Form2);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref2 = Form2.__proto__ || Object.getPrototypeOf(Form2)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {
      useInput: true
    }, _this2.onSubmit = function (e) {
      e.preventDefault();
      _this2.props.form.validateFields(function (error, values) {
        if (!error) {
          console.log('ok', values);
        } else {
          console.log('error', error, values);
        }
      });
    }, _this2.changeUseInput = function (e) {
      _this2.setState({
        useInput: e.target.checked
      });
    }, _temp2), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this2, _ret2);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Form2, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var getFieldDecorator = this.props.form.getFieldDecorator;

      this.nameDecorator = getFieldDecorator('name', {
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
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'h2',
          null,
          'situation 2'
        ),
        this.state.useInput ? this.nameDecorator(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', null)) : null,
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'span',
          null,
          'text content'
        ),
        this.state.useInput ? null : this.nameDecorator(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', null)),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'label',
            null,
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', { type: 'checkbox', checked: this.state.useInput, onChange: this.changeUseInput }),
            'change input'
          ),
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

  return Form2;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Form2.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object
};

var Form3 = function (_React$Component3) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Form3, _React$Component3);

  function Form3() {
    var _ref3;

    var _temp3, _this3, _ret3;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Form3);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret3 = (_temp3 = (_this3 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref3 = Form3.__proto__ || Object.getPrototypeOf(Form3)).call.apply(_ref3, [this].concat(args))), _this3), _this3.state = {
      useInput: false
    }, _this3.onSubmit = function (e) {
      e.preventDefault();
      _this3.props.form.validateFields(function (error, values) {
        if (!error) {
          console.log('ok', values);
        } else {
          console.log('error', error, values);
        }
      });
    }, _this3.changeUseInput = function (e) {
      _this3.setState({
        useInput: e.target.checked
      });
    }, _temp3), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this3, _ret3);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Form3, [{
    key: 'render',
    value: function render() {
      var _props$form2 = this.props.form,
          getFieldError = _props$form2.getFieldError,
          getFieldDecorator = _props$form2.getFieldDecorator;

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'form',
        { onSubmit: this.onSubmit },
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'h2',
          null,
          'situation 3'
        ),
        getFieldDecorator('name', {
          initialValue: '',
          rules: [{
            required: true,
            message: 'What\'s your name 1?'
          }]
        })(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', null)),
        this.state.useInput ? null : getFieldDecorator('name2', {
          initialValue: '',
          rules: [{
            required: true,
            message: 'What\'s your name 2?'
          }]
        })(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', null)),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'label',
            null,
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', { type: 'checkbox', checked: this.state.useInput, onChange: this.changeUseInput }),
            'Hide second input'
          ),
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

  return Form3;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Form3.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object
};


var WrappedForm1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_rc_form__["a" /* createForm */])()(Form1);
var WrappedForm2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_rc_form__["a" /* createForm */])()(Form2);
var WrappedForm3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_rc_form__["a" /* createForm */])()(Form3);

__WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(WrappedForm1, null),
  __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(WrappedForm2, null),
  __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(WrappedForm3, null)
), document.getElementById('__react-content'));

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(280);


/***/ })

},[488]);
//# sourceMappingURL=dynamic-fields.js.map