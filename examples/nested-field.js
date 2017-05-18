webpackJsonp([21],{

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src___ = __webpack_require__(16);
// export this package's api

/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__src___);

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createForm__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createForm", function() { return __WEBPACK_IMPORTED_MODULE_0__createForm__["a"]; });
// export this package's api



/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_form__ = __webpack_require__(15);




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
      console.log('Values of member[0].name.firstname and a[0][1].b.c[0]');
      console.log(_this.props.form.getFieldsValue(['member[0].name.firstname', 'a[0][1].b.c[0]']));
      console.log('Values of all fields');
      console.log(_this.props.form.getFieldsValue());

      _this.props.form.validateFields(function (error, values) {
        if (!error) {
          console.log('ok', values);
        } else {
          console.log('error', error, values);
        }
      });
    }, _this.onChange = function (e) {
      console.log(e.target.value);
    }, _this.setField = function () {
      _this.props.form.setFieldsValue({
        member: [{
          name: {
            firstname: 'm1 first',
            lastname: 'm1 last'
          }
        }, {
          name: {
            firstname: 'm2 first',
            lastname: 'm2 last'
          }
        }],
        a: [[undefined, {
          b: {
            c: ['Value of a[0][1].b.c[0]']
          }
        }]],
        w: {
          x: {
            y: {
              z: ['Value of w.x.y.z[0]']
            }
          }
        }
      });
    }, _this.resetFields = function () {
      console.log('reset');
      _this.props.form.resetFields();
    }, _temp), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Form, [{
    key: 'render',
    value: function render() {
      var _props$form = this.props.form,
          getFieldDecorator = _props$form.getFieldDecorator,
          getFieldError = _props$form.getFieldError;


      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'form',
        { onSubmit: this.onSubmit },
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          null,
          'Member 0 firstname'
        ),
        getFieldDecorator('member[0].name.firstname', {
          initialValue: '',
          rules: [{
            required: true,
            message: 'What\'s the member_0 firstname?'
          }]
        })(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', {
          onChange: this.onChange
        })),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          { style: { color: 'red' } },
          (getFieldError('member[0].name.firstname') || []).join(', ')
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          null,
          'Member 0 lastname'
        ),
        getFieldDecorator('member[0].name.lastname', {
          initialValue: '',
          rules: [{
            required: true,
            message: 'What\'s the member_0 lastname?'
          }]
        })(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', {
          onChange: this.onChange
        })),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          { style: { color: 'red' } },
          (getFieldError('member[0].name.firstname') || []).join(', ')
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          null,
          'Member 1 firstname'
        ),
        getFieldDecorator('member[1].name.firstname', {
          initialValue: '',
          rules: [{
            required: true,
            message: 'What\'s the member_1 fistname?'
          }]
        })(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', {
          onChange: this.onChange
        })),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          { style: { color: 'red' } },
          (getFieldError('member[1].name.firstname') || []).join(', ')
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          null,
          'Member 1 lastname'
        ),
        getFieldDecorator('member[1].name.lastname', {
          initialValue: '',
          rules: [{
            required: true,
            message: 'What\'s the member_1 lastname?'
          }]
        })(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', {
          onChange: this.onChange
        })),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          { style: { color: 'red' } },
          (getFieldError('member[1].name.firstname') || []).join(', ')
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          null,
          'a[0][1].b.c[0]'
        ),
        getFieldDecorator('a[0][1].b.c[0]', {
          initialValue: '',
          rules: [{
            required: true,
            message: 'What\'s a[0][1].b.c[0]?'
          }]
        })(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', {
          onChange: this.onChange
        })),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          { style: { color: 'red' } },
          (getFieldError('a[0][1].b.c[0]') || []).join(', ')
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          null,
          'w.x.y.z[0]'
        ),
        getFieldDecorator('w.x.y.z[0]', {
          initialValue: '',
          rules: [{
            required: true,
            message: 'What\'s w.x.y.z[0]?'
          }]
        })(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', {
          onChange: this.onChange
        })),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          { style: { color: 'red' } },
          (getFieldError('w.x.y.z[0]') || []).join(', ')
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'button',
          { onClick: this.setField },
          'Set field'
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'button',
          { onClick: this.resetFields },
          'Reset fields'
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
  form: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object
};


Form = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_rc_form__["createForm"])({
  onFieldsChange: function onFieldsChange(_, changedFields) {
    console.log('onFieldsChange: ', changedFields);
  },
  onValuesChange: function onValuesChange(_, changedValues) {
    console.log('onValuesChange: ', changedValues);
  }
})(Form);

var App = function (_React$Component2) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(App, _React$Component2);

  function App() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, App);

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(App, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'h2',
          null,
          'setFieldsValue'
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Form, null)
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(App, null), document.getElementById('__react-content'));

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(356);


/***/ })

},[590]);
//# sourceMappingURL=nested-field.js.map