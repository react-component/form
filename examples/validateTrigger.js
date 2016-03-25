webpackJsonp([17],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(427);


/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(161);
	
	var form = _interopRequireWildcard(_src);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	exports["default"] = form; // export this package's api
	
	module.exports = exports['default'];

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createForm = undefined;
	
	var _createForm = __webpack_require__(162);
	
	var _createForm2 = _interopRequireDefault(_createForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.createForm = _createForm2["default"]; // export this package's api

/***/ },

/***/ 244:
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

/***/ 427:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _rcForm = __webpack_require__(160);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _styles = __webpack_require__(244);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/no-multi-comp:0, no-console:0 */
	
	function Email(props) {
	  var _props$form = props.form;
	  var getFieldProps = _props$form.getFieldProps;
	  var getFieldError = _props$form.getFieldError;
	  var isFieldValidating = _props$form.isFieldValidating;
	
	  var errors = getFieldError('email');
	  return _react2["default"].createElement(
	    'div',
	    { style: _styles.regionStyle },
	    _react2["default"].createElement(
	      'p',
	      null,
	      'email validate onBlur && onChange'
	    ),
	    _react2["default"].createElement(
	      'p',
	      null,
	      _react2["default"].createElement('input', getFieldProps('email', {
	        validate: [{
	          trigger: 'onBlur',
	          rules: [{
	            required: true
	          }]
	        }, {
	          trigger: ['onBlur', 'onChange'],
	          rules: [{
	            type: 'email',
	            message: '错误的 email 格式'
	          }]
	        }]
	      }))
	    ),
	    _react2["default"].createElement(
	      'p',
	      { style: _styles.errorStyle },
	      errors ? errors.join(',') : null
	    ),
	    _react2["default"].createElement(
	      'p',
	      { style: _styles.errorStyle },
	      isFieldValidating('email') ? 'validating' : null
	    )
	  );
	}
	
	Email.propTypes = {
	  form: _react.PropTypes.object
	};
	
	var User = _react2["default"].createClass({
	  displayName: 'User',
	
	  propTypes: {
	    form: _react.PropTypes.object
	  },
	
	  render: function render() {
	    var _props$form2 = this.props.form;
	    var getFieldProps = _props$form2.getFieldProps;
	    var getFieldError = _props$form2.getFieldError;
	    var isFieldValidating = _props$form2.isFieldValidating;
	
	    var errors = getFieldError('user');
	    return _react2["default"].createElement(
	      'div',
	      { style: _styles.regionStyle },
	      _react2["default"].createElement(
	        'p',
	        null,
	        'user validate on submit'
	      ),
	      _react2["default"].createElement(
	        'p',
	        null,
	        _react2["default"].createElement('input', getFieldProps('user', {
	          rules: [{
	            required: true
	          }, {
	            type: 'string',
	            min: 5
	          }],
	          validateTrigger: null
	        }))
	      ),
	      _react2["default"].createElement(
	        'p',
	        { style: _styles.errorStyle },
	        errors ? errors.join(',') : null
	      ),
	      _react2["default"].createElement(
	        'p',
	        { style: _styles.errorStyle },
	        isFieldValidating('user') ? 'validating' : null
	      )
	    );
	  }
	});
	
	var Form = function (_Component) {
	  _inherits(Form, _Component);
	
	  function Form() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Form);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Form)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.onSubmit = function (e) {
	      e.preventDefault();
	      _this.props.form.validateFields(function (error, values) {
	        if (!error) {
	          console.log('ok', values);
	        } else {
	          console.log('error', error, values);
	        }
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Form, [{
	    key: 'render',
	    value: function render() {
	      var form = this.props.form;
	
	      return _react2["default"].createElement(
	        'div',
	        { style: { margin: 20 } },
	        _react2["default"].createElement(
	          'h2',
	          null,
	          'use validateTrigger config'
	        ),
	        _react2["default"].createElement(
	          'form',
	          { onSubmit: this.onSubmit },
	          _react2["default"].createElement(User, { form: form }),
	          _react2["default"].createElement(Email, { form: form }),
	          _react2["default"].createElement(
	            'div',
	            { style: _styles.regionStyle },
	            _react2["default"].createElement(
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
	}(_react.Component);
	
	Form.propTypes = {
	  form: _react.PropTypes.object
	};
	
	
	var NewForm = (0, _rcForm.createForm)()(Form);
	
	_reactDom2["default"].render(_react2["default"].createElement(NewForm, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=validateTrigger.js.map