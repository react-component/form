webpackJsonp([7],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(323);


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

/***/ 269:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	/* eslint react/no-multi-comp:0, no-console:0 */
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _rcForm = __webpack_require__(160);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	__webpack_require__(269);
	
	var _styles = __webpack_require__(248);
	
	var CustomInput = _react2['default'].createClass({
	  displayName: 'CustomInput',
	
	  propTypes: {
	    form: _react.PropTypes.object
	  },
	  getInitialState: function getInitialState() {
	    return {
	      data: []
	    };
	  },
	  checkUpper: function checkUpper(rule, value, callback) {
	    if (value !== value.toUpperCase()) {
	      callback(new Error('need to be upper!'));
	    } else {
	      callback();
	    }
	  },
	  toUpper: function toUpper(v, prev) {
	    if (v === prev) {
	      return v;
	    }
	    return v.toUpperCase();
	  },
	  render: function render() {
	    var _props$form = this.props.form;
	    var getFieldProps = _props$form.getFieldProps;
	    var getFieldError = _props$form.getFieldError;
	
	    var errors = getFieldError('upper');
	    return _react2['default'].createElement(
	      'div',
	      { style: _styles.regionStyle },
	      _react2['default'].createElement(
	        'p',
	        null,
	        'upper normalize'
	      ),
	      _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement('input', getFieldProps('upper', {
	          normalize: this.toUpper,
	          rules: [{
	            validator: this.checkUpper
	          }]
	        }))
	      ),
	      _react2['default'].createElement(
	        'p',
	        { style: _styles.errorStyle },
	        errors ? errors.join(',') : null
	      )
	    );
	  }
	});
	
	var MaxMin = _react2['default'].createClass({
	  displayName: 'MaxMin',
	
	  propTypes: {
	    form: _react.PropTypes.object
	  },
	  normalizeMin: function normalizeMin(value, prevValue, allValues) {
	    console.log('normalizeMin', allValues.min, allValues.max);
	    var previousAllValues = this.props.form.getFieldsValue();
	    if (allValues.max !== previousAllValues.max) {
	      // max changed
	      if (value === '' || Number(allValues.max) < Number(value)) {
	        return allValues.max;
	      }
	    }
	    return value;
	  },
	  normalizeMax: function normalizeMax(value, prevValue, allValues) {
	    console.log('normalizeMax', allValues.min, allValues.max);
	    var previousAllValues = this.props.form.getFieldsValue();
	    if (allValues.min !== previousAllValues.min) {
	      // min changed
	      if (value === '' || Number(allValues.min) > Number(value)) {
	        return allValues.min;
	      }
	    }
	    return value;
	  },
	  render: function render() {
	    var getFieldProps = this.props.form.getFieldProps;
	
	    return _react2['default'].createElement(
	      'div',
	      { style: _styles.regionStyle },
	      _react2['default'].createElement(
	        'div',
	        null,
	        'min: ',
	        _react2['default'].createElement(
	          'select',
	          getFieldProps('min', {
	            normalize: this.normalizeMin,
	            initialValue: ''
	          }),
	          _react2['default'].createElement(
	            'option',
	            { value: '' },
	            'empty'
	          ),
	          _react2['default'].createElement(
	            'option',
	            { value: '1' },
	            '1'
	          ),
	          _react2['default'].createElement(
	            'option',
	            { value: '2' },
	            '2'
	          ),
	          _react2['default'].createElement(
	            'option',
	            { value: '3' },
	            '3'
	          ),
	          _react2['default'].createElement(
	            'option',
	            { value: '4' },
	            '4'
	          ),
	          _react2['default'].createElement(
	            'option',
	            { value: '5' },
	            '5'
	          )
	        )
	      ),
	      _react2['default'].createElement(
	        'div',
	        null,
	        'max: ',
	        _react2['default'].createElement(
	          'select',
	          getFieldProps('max', {
	            initialValue: '',
	            normalize: this.normalizeMax
	          }),
	          _react2['default'].createElement(
	            'option',
	            { value: '' },
	            'empty'
	          ),
	          _react2['default'].createElement(
	            'option',
	            { value: '1' },
	            '1'
	          ),
	          _react2['default'].createElement(
	            'option',
	            { value: '2' },
	            '2'
	          ),
	          _react2['default'].createElement(
	            'option',
	            { value: '3' },
	            '3'
	          ),
	          _react2['default'].createElement(
	            'option',
	            { value: '4' },
	            '4'
	          ),
	          _react2['default'].createElement(
	            'option',
	            { value: '5' },
	            '5'
	          )
	        )
	      )
	    );
	  }
	});
	
	var Form = (function (_Component) {
	  _inherits(Form, _Component);
	
	  function Form() {
	    var _this = this;
	
	    _classCallCheck(this, _Form);
	
	    _get(Object.getPrototypeOf(_Form.prototype), 'constructor', this).apply(this, arguments);
	
	    this.onSubmit = function (e) {
	      e.preventDefault();
	      _this.props.form.validateFields(function (error, values) {
	        if (!error) {
	          console.log('ok', values);
	        } else {
	          console.log('error', error, values);
	        }
	      });
	    };
	  }
	
	  _createClass(Form, [{
	    key: 'render',
	    value: function render() {
	      var form = this.props.form;
	
	      return _react2['default'].createElement(
	        'div',
	        { style: { margin: 20 } },
	        _react2['default'].createElement(
	          'h2',
	          null,
	          'normalize'
	        ),
	        _react2['default'].createElement(
	          'form',
	          { onSubmit: this.onSubmit },
	          _react2['default'].createElement(CustomInput, { form: form }),
	          _react2['default'].createElement(MaxMin, { form: form }),
	          _react2['default'].createElement(
	            'div',
	            { style: _styles.regionStyle },
	            _react2['default'].createElement(
	              'button',
	              null,
	              'submit'
	            )
	          )
	        )
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      form: _react.PropTypes.object
	    },
	    enumerable: true
	  }]);
	
	  var _Form = Form;
	  Form = (0, _rcForm.createForm)()(Form) || Form;
	  return Form;
	})(_react.Component);
	
	_reactDom2['default'].render(_react2['default'].createElement(Form, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=normalize.js.map