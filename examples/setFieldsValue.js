webpackJsonp([7],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(393);


/***/ },

/***/ 189:
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

/***/ 393:
/***/ function(module, exports, __webpack_require__) {

	/* eslint react/no-multi-comp:0, no-console:0 */
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _rcForm = __webpack_require__(2);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(188);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _styles = __webpack_require__(189);
	
	var Form = _react2['default'].createClass({
	  displayName: 'Form',
	
	  propTypes: {
	    form: _react.PropTypes.object
	  },
	
	  setEmail: function setEmail() {
	    this.props.form.setFieldsValue({
	      email: 'yiminghe@gmail.com'
	    });
	  },
	
	  render: function render() {
	    var _props$form = this.props.form;
	    var getFieldProps = _props$form.getFieldProps;
	    var getFieldError = _props$form.getFieldError;
	
	    var errors = getFieldError('email');
	    return _react2['default'].createElement(
	      'div',
	      { style: _styles.regionStyle },
	      _react2['default'].createElement(
	        'p',
	        null,
	        'email:'
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        _react2['default'].createElement('input', getFieldProps('email', {
	          rules: [{
	            type: 'email'
	          }]
	        }))
	      ),
	      _react2['default'].createElement(
	        'p',
	        { style: _styles.errorStyle },
	        errors ? errors.join(',') : null
	      ),
	      _react2['default'].createElement(
	        'button',
	        { onClick: this.setEmail },
	        'set'
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
	          'setFieldsValue'
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
//# sourceMappingURL=setFieldsValue.js.map