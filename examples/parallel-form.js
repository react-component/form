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
/******/ 		"examples/parallel-form": 0
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
/******/ 	deferredModules.push([11,"common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/parallel-form.js":
/*!***********************************!*\
  !*** ./examples/parallel-form.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rc_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-form */ "./index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_es_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/switch */ "./node_modules/antd/es/switch/index.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./examples/styles.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint react/no-multi-comp:0, no-console:0, react/prefer-stateless-function:0 */








var TopForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TopForm, _React$Component);

  function TopForm() {
    _classCallCheck(this, TopForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(TopForm).apply(this, arguments));
  }

  _createClass(TopForm, [{
    key: "render",
    value: function render() {
      var getFieldProps = this.props.form.getFieldProps;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: _styles__WEBPACK_IMPORTED_MODULE_6__["regionStyle"]
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "has email? "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_es_switch__WEBPACK_IMPORTED_MODULE_4__["default"], getFieldProps('on', {
        initialValue: true,
        valuePropName: 'checked'
      }))));
    }
  }]);

  return TopForm;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

_defineProperty(TopForm, "propTypes", {
  form: rc_form__WEBPACK_IMPORTED_MODULE_0__["formShape"]
});

var BottomForm =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(BottomForm, _React$Component2);

  function BottomForm() {
    _classCallCheck(this, BottomForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(BottomForm).apply(this, arguments));
  }

  _createClass(BottomForm, [{
    key: "render",
    value: function render() {
      var form = this.props.form;
      var on = form.getFieldValue('on');

      var style = _objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_6__["regionStyle"], {
        display: on ? 'block' : 'none'
      });

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: style
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "email: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", form.getFieldProps('email', {
        rules: [{
          type: 'email'
        }],
        hidden: !on
      }))));
    }
  }]);

  return BottomForm;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

_defineProperty(BottomForm, "propTypes", {
  form: rc_form__WEBPACK_IMPORTED_MODULE_0__["formShape"],
  on: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
});

var Form =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Form, _React$Component3);

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
      console.log(_this.props.form.getFieldsValue());
    });

    return _this;
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      var form = this.props.form;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TopForm, {
        form: form
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BottomForm, {
        form: form
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: _styles__WEBPACK_IMPORTED_MODULE_6__["regionStyle"]
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.onSubmit
      }, "submit")));
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

_defineProperty(Form, "propTypes", {
  form: rc_form__WEBPACK_IMPORTED_MODULE_0__["formShape"]
});

Form = Object(rc_form__WEBPACK_IMPORTED_MODULE_0__["createForm"])()(Form);

var App =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(App, _React$Component4);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "parallel form"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Form, null));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App, null), document.getElementById('__react-content'));

/***/ }),

/***/ "./node_modules/antd/es/switch/index.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/es/switch/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Switch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-switch */ "./node_modules/rc-switch/es/index.js");
/* harmony import */ var rc_switch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_switch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js");
/* harmony import */ var _util_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_util/wave */ "./node_modules/antd/es/_util/wave.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icon */ "./node_modules/antd/es/icon/index.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/es/config-provider/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var Switch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    var _this;

    _classCallCheck(this, Switch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Switch).apply(this, arguments));

    _this.saveSwitch = function (node) {
      _this.rcSwitch = node;
    };

    _this.renderSwitch = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          size = _this$props.size,
          loading = _this$props.loading,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          disabled = _this$props.disabled;
      var prefixCls = getPrefixCls('switch', customizePrefixCls);
      var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-small"), size === 'small'), _defineProperty(_classNames, "".concat(prefixCls, "-loading"), loading), _classNames));
      var loadingIcon = loading ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        type: "loading",
        className: "".concat(prefixCls, "-loading-icon")
      }) : null;
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_util_wave__WEBPACK_IMPORTED_MODULE_5__["default"], {
        insertExtraNode: true
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](rc_switch__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, Object(omit_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this.props, ['loading']), {
        prefixCls: prefixCls,
        className: classes,
        disabled: disabled || loading,
        ref: _this.saveSwitch,
        loadingIcon: loadingIcon
      })));
    };

    return _this;
  }

  _createClass(Switch, [{
    key: "focus",
    value: function focus() {
      this.rcSwitch.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.rcSwitch.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_config_provider__WEBPACK_IMPORTED_MODULE_7__["ConfigConsumer"], null, this.renderSwitch);
    }
  }]);

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Switch.propTypes = {
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  // HACK: https://github.com/ant-design/ant-design/issues/5368
  // size=default and size=large are the same
  size: prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOf"](['small', 'default', 'large']),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]
};

/***/ }),

/***/ "./node_modules/rc-switch/es/Switch.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-switch/es/Switch.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var Switch =
/*#__PURE__*/
function (_Component) {
  _inherits(Switch, _Component);

  function Switch(props) {
    var _this;

    _classCallCheck(this, Switch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Switch).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (e) {
      var checked = _this.state.checked;
      var onClick = _this.props.onClick;
      var newChecked = !checked;

      _this.setChecked(newChecked, e);

      if (onClick) {
        onClick(newChecked, e);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyDown", function (e) {
      if (e.keyCode === 37) {
        // Left
        _this.setChecked(false, e);
      } else if (e.keyCode === 39) {
        // Right
        _this.setChecked(true, e);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMouseUp", function (e) {
      var onMouseUp = _this.props.onMouseUp;

      if (_this.node) {
        _this.node.blur();
      }

      if (onMouseUp) {
        onMouseUp(e);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveNode", function (node) {
      _this.node = node;
    });

    var _checked = false;

    if ('checked' in props) {
      _checked = !!props.checked;
    } else {
      _checked = !!props.defaultChecked;
    }

    _this.state = {
      checked: _checked
    };
    return _this;
  }

  _createClass(Switch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          autoFocus = _this$props.autoFocus,
          disabled = _this$props.disabled;

      if (autoFocus && !disabled) {
        this.focus();
      }
    }
  }, {
    key: "setChecked",
    value: function setChecked(checked, e) {
      var _this$props2 = this.props,
          disabled = _this$props2.disabled,
          onChange = _this$props2.onChange;

      if (disabled) {
        return;
      }

      if (!('checked' in this.props)) {
        this.setState({
          checked: checked
        });
      }

      if (onChange) {
        onChange(checked, e);
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      this.node.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.node.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props3 = this.props,
          className = _this$props3.className,
          prefixCls = _this$props3.prefixCls,
          disabled = _this$props3.disabled,
          loadingIcon = _this$props3.loadingIcon,
          checkedChildren = _this$props3.checkedChildren,
          unCheckedChildren = _this$props3.unCheckedChildren,
          restProps = _objectWithoutProperties(_this$props3, ["className", "prefixCls", "disabled", "loadingIcon", "checkedChildren", "unCheckedChildren"]);

      var checked = this.state.checked;
      var switchClassName = classNames((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, "".concat(prefixCls, "-checked"), checked), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({}, restProps, {
        type: "button",
        role: "switch",
        "aria-checked": checked,
        disabled: disabled,
        className: switchClassName,
        ref: this.saveNode,
        onKeyDown: this.handleKeyDown,
        onClick: this.handleClick,
        onMouseUp: this.handleMouseUp
      }), loadingIcon, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "".concat(prefixCls, "-inner")
      }, checked ? checkedChildren : unCheckedChildren));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      var newState = {};
      var checked = nextProps.checked;

      if ('checked' in nextProps) {
        newState.checked = !!checked;
      }

      return newState;
    }
  }]);

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Switch.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  checkedChildren: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  unCheckedChildren: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onMouseUp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  checked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  defaultChecked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  loadingIcon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
Switch.defaultProps = {
  prefixCls: 'rc-switch',
  checkedChildren: null,
  unCheckedChildren: null,
  className: '',
  defaultChecked: false
};
Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_2__["polyfill"])(Switch);
/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ }),

/***/ "./node_modules/rc-switch/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/rc-switch/es/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./Switch */ "./node_modules/rc-switch/es/Switch.js");

/***/ }),

/***/ 11:
/*!*****************************************!*\
  !*** multi ./examples/parallel-form.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./examples/parallel-form.js */"./examples/parallel-form.js");


/***/ })

/******/ });
//# sourceMappingURL=parallel-form.js.map