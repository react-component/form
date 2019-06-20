/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"examples/nested-field": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([8,"common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/nested-field.js":
/*!**********************************!*\
  !*** ./examples/nested-field.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-form */ "./index.js");
/* harmony import */ var _src_createDOMForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/createDOMForm */ "./src/createDOMForm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint react/no-multi-comp:0, no-console:0, react/prefer-stateless-function:0 */





var Form =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Form)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (e) {
      e.preventDefault();
      console.log('Values of member[0].name.firstname and a[0][1].b.c[0]');
      console.log(_this.props.form.getFieldsValue(['member[0].name.firstname', 'a[0][1].b.c[0]']));
      console.log('Values of all fields');
      console.log(_this.props.form.getFieldsValue());

      _this.props.form.validateFieldsAndScroll(function (error, values) {
        if (!error) {
          console.log('ok', values);
        } else {
          console.log('error', error, values);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      console.log(e.target.value);
    });

    _defineProperty(_assertThisInitialized(_this), "setField", function () {
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
    });

    _defineProperty(_assertThisInitialized(_this), "resetFields", function () {
      console.log('reset');

      _this.props.form.resetFields();
    });

    return _this;
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      var _this$props$form = this.props.form,
          getFieldDecorator = _this$props$form.getFieldDecorator,
          getFieldError = _this$props$form.getFieldError;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.onSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Member 0 firstname"), getFieldDecorator('member[0].name.firstname', {
        initialValue: '',
        rules: [{
          required: true,
          message: 'What\'s the member_0 firstname?'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: this.onChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          color: 'red'
        }
      }, (getFieldError('member[0].name.firstname') || []).join(', ')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Member 0 lastname"), getFieldDecorator('member[0].name.lastname', {
        initialValue: '',
        rules: [{
          required: true,
          message: 'What\'s the member_0 lastname?'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: this.onChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          color: 'red'
        }
      }, (getFieldError('member[0].name.firstname') || []).join(', ')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Member 1 firstname"), getFieldDecorator('member[1].name.firstname', {
        initialValue: '',
        rules: [{
          required: true,
          message: 'What\'s the member_1 fistname?'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: this.onChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          color: 'red'
        }
      }, (getFieldError('member[1].name.firstname') || []).join(', ')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Member 1 lastname"), getFieldDecorator('member[1].name.lastname', {
        initialValue: '',
        rules: [{
          required: true,
          message: 'What\'s the member_1 lastname?'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: this.onChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          color: 'red'
        }
      }, (getFieldError('member[1].name.firstname') || []).join(', ')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "a[0][1].b.c[0]"), getFieldDecorator('a[0][1].b.c[0]', {
        initialValue: '',
        rules: [{
          required: true,
          message: 'What\'s a[0][1].b.c[0]?'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: this.onChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          color: 'red'
        }
      }, (getFieldError('a[0][1].b.c[0]') || []).join(', ')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "w.x.y.z[0]"), getFieldDecorator('w.x.y.z[0]', {
        initialValue: '',
        rules: [{
          required: true,
          message: 'What\'s w.x.y.z[0]?'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: this.onChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          color: 'red'
        }
      }, (getFieldError('w.x.y.z[0]') || []).join(', ')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.setField
      }, "Set field"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.resetFields
      }, "Reset fields"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Submit"));
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Form, "propTypes", {
  form: rc_form__WEBPACK_IMPORTED_MODULE_2__["formShape"]
});

Form = Object(_src_createDOMForm__WEBPACK_IMPORTED_MODULE_3__["default"])({
  onFieldsChange: function onFieldsChange(_, changedFields, allFields) {
    console.log('onFieldsChange: ', changedFields, allFields);
  },
  onValuesChange: function onValuesChange(_, changedValues, allValues) {
    console.log('onValuesChange: ', changedValues, allValues);
  }
})(Form);

var App =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "setFieldsValue"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, null));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('__react-content'));

/***/ }),

/***/ 8:
/*!****************************************!*\
  !*** multi ./examples/nested-field.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./examples/nested-field.js */"./examples/nested-field.js");


/***/ })

/******/ });
//# sourceMappingURL=nested-field.js.map