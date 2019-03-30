webpackJsonp([9],{

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

/***/ 36:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(460);


/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_form__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_dist_antd_css__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_dist_antd_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_dist_antd_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles__ = __webpack_require__(11);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint react/no-multi-comp:0, no-console:0 */







var CustomInput = function (_React$Component) {
  _inherits(CustomInput, _React$Component);

  function CustomInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CustomInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomInput.__proto__ || Object.getPrototypeOf(CustomInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.checkUpper = function (rule, value, callback) {
      if (value !== value.toUpperCase()) {
        callback(new Error('need to be upper!'));
      } else {
        callback();
      }
    }, _this.toUpper = function (v, prev) {
      if (v === prev) {
        return v;
      }
      return v.toUpperCase();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CustomInput, [{
    key: 'render',
    value: function render() {
      var _props$form = this.props.form,
          getFieldProps = _props$form.getFieldProps,
          getFieldError = _props$form.getFieldError;

      var errors = getFieldError('upper');
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { style: __WEBPACK_IMPORTED_MODULE_4__styles__["b" /* regionStyle */] },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          null,
          'upper normalize'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', getFieldProps('upper', {
            normalize: this.toUpper,
            rules: [{
              validator: this.checkUpper
            }]
          }))
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { style: __WEBPACK_IMPORTED_MODULE_4__styles__["a" /* errorStyle */] },
          errors ? errors.join(',') : null
        )
      );
    }
  }]);

  return CustomInput;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

CustomInput.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_0_rc_form__["formShape"]
};

var MaxMin = function (_React$Component2) {
  _inherits(MaxMin, _React$Component2);

  function MaxMin() {
    var _ref2;

    var _temp2, _this2, _ret2;

    _classCallCheck(this, MaxMin);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = MaxMin.__proto__ || Object.getPrototypeOf(MaxMin)).call.apply(_ref2, [this].concat(args))), _this2), _this2.normalizeMin = function (value, prevValue, allValues) {
      console.log('normalizeMin', allValues.min, allValues.max);
      var previousAllValues = _this2.props.form.getFieldsValue();
      if (allValues.max !== previousAllValues.max) {
        // max changed
        if (value === '' || Number(allValues.max) < Number(value)) {
          return allValues.max;
        }
      }
      return value;
    }, _this2.normalizeMax = function (value, prevValue, allValues) {
      console.log('normalizeMax', allValues.min, allValues.max);
      var previousAllValues = _this2.props.form.getFieldsValue();
      if (allValues.min !== previousAllValues.min) {
        // min changed
        if (value === '' || Number(allValues.min) > Number(value)) {
          return allValues.min;
        }
      }
      return value;
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  _createClass(MaxMin, [{
    key: 'render',
    value: function render() {
      var getFieldProps = this.props.form.getFieldProps;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { style: __WEBPACK_IMPORTED_MODULE_4__styles__["b" /* regionStyle */] },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          null,
          'min: ',
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'select',
            getFieldProps('min', {
              normalize: this.normalizeMin,
              initialValue: ''
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'option',
              { value: '' },
              'empty'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'option',
              { value: '1' },
              '1'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'option',
              { value: '2' },
              '2'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'option',
              { value: '3' },
              '3'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'option',
              { value: '4' },
              '4'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'option',
              { value: '5' },
              '5'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          null,
          'max: ',
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'select',
            getFieldProps('max', {
              initialValue: '',
              normalize: this.normalizeMax
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'option',
              { value: '' },
              'empty'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'option',
              { value: '1' },
              '1'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'option',
              { value: '2' },
              '2'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'option',
              { value: '3' },
              '3'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'option',
              { value: '4' },
              '4'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'option',
              { value: '5' },
              '5'
            )
          )
        )
      );
    }
  }]);

  return MaxMin;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

MaxMin.propTypes = {
  form: __WEBPACK_IMPORTED_MODULE_0_rc_form__["formShape"]
};

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    var _ref3;

    var _temp3, _this3, _ret3;

    _classCallCheck(this, Form);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret3 = (_temp3 = (_this3 = _possibleConstructorReturn(this, (_ref3 = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref3, [this].concat(args))), _this3), _this3.onSubmit = function (e) {
      e.preventDefault();
      _this3.props.form.validateFields(function (error, values) {
        if (!error) {
          console.log('ok', values);
        } else {
          console.log('error', error, values);
        }
      });
    }, _temp3), _possibleConstructorReturn(_this3, _ret3);
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
          'normalize'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'form',
          { onSubmit: this.onSubmit },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CustomInput, { form: form }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(MaxMin, { form: form }),
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

__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(NewForm, null), document.getElementById('__react-content'));

/***/ })

},[459]);
//# sourceMappingURL=normalize.js.map