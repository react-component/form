webpackJsonp([9],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(398);


/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	// export this package's api
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _src = __webpack_require__(161);
	
	var form = _interopRequireWildcard(_src);
	
	exports['default'] = form;
	module.exports = exports['default'];

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	// export this package's api
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _createForm = __webpack_require__(162);
	
	exports.createForm = _interopRequire(_createForm);

/***/ },

/***/ 248:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var regionStyle = {
	  border: '1px solid red',
	  marginTop: 10,
	  padding: 10
	};
	
	exports.regionStyle = regionStyle;
	var errorStyle = {
	  color: 'red',
	  marginTop: 10,
	  padding: 10
	};
	exports.errorStyle = errorStyle;

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rcSwitch = __webpack_require__(266);
	
	var _rcSwitch2 = _interopRequireDefault(_rcSwitch);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(268);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'switch',
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'ant-switch'
	    };
	  },
	  render: function render() {
	    var _classNames;
	
	    var _props = this.props;
	    var prefixCls = _props.prefixCls;
	    var size = _props.size;
	    var className = _props.className;
	
	    var cls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls + '-small', size === 'small'), _classNames));
	    return _react2.default.createElement(_rcSwitch2.default, _extends({ className: cls }, this.props));
	  }
	});
	module.exports = exports['default'];

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(267);

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var React = __webpack_require__(2);
	var classNames = __webpack_require__(268);
	
	function noop() {}
	
	var Switch = React.createClass({
	  displayName: 'Switch',
	
	  propTypes: {
	    className: React.PropTypes.string,
	    prefixCls: React.PropTypes.string,
	    disabled: React.PropTypes.bool,
	    style: React.PropTypes.object,
	    checkedChildren: React.PropTypes.any,
	    unCheckedChildren: React.PropTypes.any,
	    onChange: React.PropTypes.func
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-switch',
	      style: {},
	      checkedChildren: null,
	      unCheckedChildren: null,
	      className: '',
	      defaultChecked: false,
	      onChange: noop
	    };
	  },
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    var checked = false;
	    if ('checked' in props) {
	      checked = !!props.checked;
	    } else {
	      checked = !!props.defaultChecked;
	    }
	    return {
	      checked: checked
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if ('checked' in nextProps) {
	      this.setState({
	        checked: !!nextProps.checked
	      });
	    }
	  },
	  toggle: function toggle() {
	    var checked = !this.state.checked;
	    this.setState({
	      checked: checked
	    });
	    this.props.onChange(checked);
	  },
	  render: function render() {
	    var _classNames;
	
	    var _props = this.props;
	    var className = _props.className;
	    var prefixCls = _props.prefixCls;
	    var disabled = _props.disabled;
	    var style = _props.style;
	    var checkedChildren = _props.checkedChildren;
	    var unCheckedChildren = _props.unCheckedChildren;
	
	    var checked = this.state.checked;
	    var switchClassName = classNames((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-checked', checked), _defineProperty(_classNames, prefixCls + '-disabled', disabled), _classNames));
	    return React.createElement(
	      'span',
	      { className: switchClassName,
	        onClick: disabled ? noop : this.toggle,
	        style: style },
	      React.createElement(
	        'span',
	        { className: prefixCls + '-inner' },
	        checked ? checkedChildren : unCheckedChildren
	      )
	    );
	  }
	});
	
	module.exports = Switch;

/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },

/***/ 269:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 398:
/***/ function(module, exports, __webpack_require__) {

	/* eslint react/no-multi-comp:0, no-console:0 */
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _rcForm = __webpack_require__(160);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _styles = __webpack_require__(248);
	
	var _antdLibSwitch = __webpack_require__(265);
	
	var _antdLibSwitch2 = _interopRequireDefault(_antdLibSwitch);
	
	__webpack_require__(269);
	
	var TopForm = _react2['default'].createClass({
	  displayName: 'TopForm',
	
	  propTypes: {
	    form: _react.PropTypes.object
	  },
	
	  render: function render() {
	    var getFieldProps = this.props.form.getFieldProps;
	
	    return _react2['default'].createElement(
	      'div',
	      { style: _styles.regionStyle },
	      _react2['default'].createElement(
	        'p',
	        null,
	        'has email? '
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        _react2['default'].createElement(_antdLibSwitch2['default'], getFieldProps('on', {
	          initialValue: true,
	          valuePropName: 'checked'
	        }))
	      )
	    );
	  }
	});
	
	var BottomForm = _react2['default'].createClass({
	  displayName: 'BottomForm',
	
	  propTypes: {
	    form: _react.PropTypes.object,
	    on: _react.PropTypes.bool
	  },
	
	  render: function render() {
	    var form = this.props.form;
	
	    var on = form.getFieldValue('on');
	    var style = _extends({}, _styles.regionStyle, {
	      display: on ? 'block' : 'none'
	    });
	    return _react2['default'].createElement(
	      'div',
	      { style: style },
	      _react2['default'].createElement(
	        'p',
	        null,
	        'email: '
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        _react2['default'].createElement('input', form.getFieldProps('email', {
	          rules: [{ type: 'email' }],
	          hidden: !on
	        }))
	      )
	    );
	  }
	});
	
	var Form = _react2['default'].createClass({
	  displayName: 'Form',
	
	  propTypes: {
	    form: _react.PropTypes.object
	  },
	  onSubmit: function onSubmit(e) {
	    e.preventDefault();
	    console.log(this.props.form.getFieldsValue());
	  },
	  render: function render() {
	    var form = this.props.form;
	
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(TopForm, { form: form }),
	      _react2['default'].createElement(BottomForm, { form: form }),
	      _react2['default'].createElement(
	        'div',
	        { style: _styles.regionStyle },
	        _react2['default'].createElement(
	          'button',
	          { onClick: this.onSubmit },
	          'submit'
	        )
	      )
	    );
	  }
	});
	
	Form = (0, _rcForm.createForm)()(Form);
	
	var App = (function (_React$Component) {
	  _inherits(App, _React$Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'h2',
	          null,
	          'parallel form'
	        ),
	        _react2['default'].createElement(Form, null)
	      );
	    }
	  }]);
	
	  return App;
	})(_react2['default'].Component);
	
	_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=parallel-form.js.map