webpackJsonp([19],{

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(437);


/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_form__ = __webpack_require__(18);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint react/no-multi-comp:0, no-console:0 */





var Form1 = function (_React$Component) {
  _inherits(Form1, _React$Component);

  function Form1() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Form1);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form1.__proto__ || Object.getPrototypeOf(Form1)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Form1, [{
    key: 'render',
    value: function render() {
      var _props$form = this.props.form,
          getFieldError = _props$form.getFieldError,
          getFieldDecorator = _props$form.getFieldDecorator;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'form',
        { onSubmit: this.onSubmit },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
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
        })(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', null)) : null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
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
        })(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', null)),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'checkbox', checked: this.state.useInput, onChange: this.changeUseInput }),
            'change input'
          ),
          (getFieldError('name') || []).join(', ')
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          null,
          'Submit'
        )
      );
    }
  }]);

  return Form1;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Form1.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_2_rc_form__["formShape"]
};

var Form2 = function (_React$Component2) {
  _inherits(Form2, _React$Component2);

  function Form2() {
    var _ref2;

    var _temp2, _this2, _ret2;

    _classCallCheck(this, Form2);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = Form2.__proto__ || Object.getPrototypeOf(Form2)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {
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
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  _createClass(Form2, [{
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

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'form',
        { onSubmit: this.onSubmit },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'situation 2'
        ),
        this.state.useInput ? this.nameDecorator(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', null)) : null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          'text content'
        ),
        this.state.useInput ? null : this.nameDecorator(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', null)),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'checkbox', checked: this.state.useInput, onChange: this.changeUseInput }),
            'change input'
          ),
          (getFieldError('name') || []).join(', ')
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          null,
          'Submit'
        )
      );
    }
  }]);

  return Form2;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Form2.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_2_rc_form__["formShape"]
};

var Form3 = function (_React$Component3) {
  _inherits(Form3, _React$Component3);

  function Form3() {
    var _ref3;

    var _temp3, _this3, _ret3;

    _classCallCheck(this, Form3);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret3 = (_temp3 = (_this3 = _possibleConstructorReturn(this, (_ref3 = Form3.__proto__ || Object.getPrototypeOf(Form3)).call.apply(_ref3, [this].concat(args))), _this3), _this3.state = {
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
    }, _temp3), _possibleConstructorReturn(_this3, _ret3);
  }

  _createClass(Form3, [{
    key: 'render',
    value: function render() {
      var _props$form2 = this.props.form,
          getFieldError = _props$form2.getFieldError,
          getFieldDecorator = _props$form2.getFieldDecorator;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'form',
        { onSubmit: this.onSubmit },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
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
        })(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', null)),
        this.state.useInput ? null : getFieldDecorator('name2', {
          initialValue: '',
          rules: [{
            required: true,
            message: 'What\'s your name 2?'
          }]
        })(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', null)),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'checkbox', checked: this.state.useInput, onChange: this.changeUseInput }),
            'Hide second input'
          ),
          (getFieldError('name') || []).join(', ')
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          null,
          'Submit'
        )
      );
    }
  }]);

  return Form3;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Form3.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_2_rc_form__["formShape"]
};


var WrappedForm1 = Object(__WEBPACK_IMPORTED_MODULE_2_rc_form__["a" /* createForm */])()(Form1);
var WrappedForm2 = Object(__WEBPACK_IMPORTED_MODULE_2_rc_form__["a" /* createForm */])()(Form2);
var WrappedForm3 = Object(__WEBPACK_IMPORTED_MODULE_2_rc_form__["a" /* createForm */])()(Form3);

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WrappedForm1, null),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WrappedForm2, null),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WrappedForm3, null)
), document.getElementById('__react-content'));

/***/ })

},[436]);
//# sourceMappingURL=dynamic-fields.js.map