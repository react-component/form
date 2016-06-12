webpackJsonp([6],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(281);


/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(170);
	
	var form = _interopRequireWildcard(_src);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	exports["default"] = form; // export this package's api
	
	module.exports = exports['default'];

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createForm = undefined;
	
	var _createForm = __webpack_require__(171);
	
	var _createForm2 = _interopRequireDefault(_createForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.createForm = _createForm2["default"]; // export this package's api

/***/ },

/***/ 253:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var regionStyle = exports.regionStyle = {
	  border: '1px solid red',
	  marginTop: 10,
	  padding: 10
	};
	
	var errorStyle = exports.errorStyle = {
	  color: 'red',
	  marginTop: 10,
	  padding: 10
	};

/***/ },

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint react/no-multi-comp:0, no-console:0 */
	
	var _rcForm = __webpack_require__(169);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(39);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _styles = __webpack_require__(253);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	
	var Form = _react2["default"].createClass({
	  displayName: 'Form',
	
	  propTypes: {
	    form: _react.PropTypes.object
	  },
	
	  onSubmit: function onSubmit(e) {
	    e.preventDefault();
	    this.props.form.validateFields(function (error, values) {
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
	  },
	  checkSize: function checkSize(rule, value, callback) {
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
	  },
	  render: function render() {
	    var _props$form = this.props.form;
	    var getFieldProps = _props$form.getFieldProps;
	    var getFieldError = _props$form.getFieldError;
	
	    var errors = getFieldError('attachment');
	    return _react2["default"].createElement(
	      'div',
	      {
	        style: _styles.regionStyle
	      },
	      _react2["default"].createElement(
	        'p',
	        null,
	        'attachment:'
	      ),
	      _react2["default"].createElement(
	        'p',
	        null,
	        _react2["default"].createElement('input', _extends({ type: 'file' }, getFieldProps('attachment', {
	          getValueProps: getFileValueProps,
	          getValueFromEvent: getValueFromFileEvent,
	          rules: [this.checkSize]
	        })))
	      ),
	      _react2["default"].createElement(
	        'p',
	        { style: _styles.errorStyle },
	        errors ? errors.join(',') : null
	      ),
	      _react2["default"].createElement(
	        'button',
	        { onClick: this.onSubmit },
	        'submit'
	      )
	    );
	  }
	});
	
	Form = (0, _rcForm.createForm)()(Form);
	
	var App = function (_React$Component) {
	  _inherits(App, _React$Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2["default"].createElement(
	        'div',
	        null,
	        _react2["default"].createElement(
	          'h2',
	          null,
	          'input[type="file"]'
	        ),
	        _react2["default"].createElement(Form, null)
	      );
	    }
	  }]);
	
	  return App;
	}(_react2["default"].Component);
	
	_reactDom2["default"].render(_react2["default"].createElement(App, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=file-input.js.map