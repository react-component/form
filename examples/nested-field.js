webpackJsonp([10],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(418);


/***/ },

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(218);
	
	var form = _interopRequireWildcard(_src);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = form; // export this package's api
	
	module.exports = exports['default'];

/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createForm = undefined;
	
	var _createForm = __webpack_require__(219);
	
	var _createForm2 = _interopRequireDefault(_createForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.createForm = _createForm2.default; // export this package's api

/***/ },

/***/ 351:
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(221);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(354);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(358);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(221);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(355), __esModule: true };

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(356);
	module.exports = __webpack_require__(8).Object.setPrototypeOf;

/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(6);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(357).set});

/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(14)
	  , anObject = __webpack_require__(13);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(9)(Function.call, __webpack_require__(252).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(359), __esModule: true };

/***/ },

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(360);
	var $Object = __webpack_require__(8).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(6)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(231)});

/***/ },

/***/ 418:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(351);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(352);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(353);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(40);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(71);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcForm = __webpack_require__(217);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Form = _react2.default.createClass({
	  displayName: 'Form',
	
	  propTypes: {
	    form: _react.PropTypes.object
	  },
	
	  onSubmit: function onSubmit(e) {
	    e.preventDefault();
	    console.log('Values of member[0].name.firstname and a[0][1].b.c[0]');
	    console.log(this.props.form.getFieldsValue(['member[0].name.firstname', 'a[0][1].b.c[0]']));
	    console.log('Values of all fields');
	    console.log(this.props.form.getFieldsValue());
	
	    this.props.form.validateFields(function (error, values) {
	      if (!error) {
	        console.log('ok', values);
	      } else {
	        console.log('error', error, values);
	      }
	    });
	  },
	  onChange: function onChange(e) {
	    console.log(e.target.value);
	  },
	  setField: function setField() {
	    this.props.form.setFieldsValue({
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
	  },
	  resetFields: function resetFields() {
	    console.log('reset');
	    this.props.form.resetFields();
	  },
	  render: function render() {
	    var _props$form = this.props.form,
	        getFieldDecorator = _props$form.getFieldDecorator,
	        getFieldError = _props$form.getFieldError;
	
	
	    return _react2.default.createElement(
	      'form',
	      { onSubmit: this.onSubmit },
	      _react2.default.createElement(
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
	      })(_react2.default.createElement('input', {
	        onChange: this.onChange
	      })),
	      _react2.default.createElement(
	        'div',
	        { style: { color: 'red' } },
	        (getFieldError('member[0].name.firstname') || []).join(', ')
	      ),
	      _react2.default.createElement(
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
	      })(_react2.default.createElement('input', {
	        onChange: this.onChange
	      })),
	      _react2.default.createElement(
	        'div',
	        { style: { color: 'red' } },
	        (getFieldError('member[0].name.firstname') || []).join(', ')
	      ),
	      _react2.default.createElement(
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
	      })(_react2.default.createElement('input', {
	        onChange: this.onChange
	      })),
	      _react2.default.createElement(
	        'div',
	        { style: { color: 'red' } },
	        (getFieldError('member[1].name.firstname') || []).join(', ')
	      ),
	      _react2.default.createElement(
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
	      })(_react2.default.createElement('input', {
	        onChange: this.onChange
	      })),
	      _react2.default.createElement(
	        'div',
	        { style: { color: 'red' } },
	        (getFieldError('member[1].name.firstname') || []).join(', ')
	      ),
	      _react2.default.createElement(
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
	      })(_react2.default.createElement('input', {
	        onChange: this.onChange
	      })),
	      _react2.default.createElement(
	        'div',
	        { style: { color: 'red' } },
	        (getFieldError('a[0][1].b.c[0]') || []).join(', ')
	      ),
	      _react2.default.createElement(
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
	      })(_react2.default.createElement('input', {
	        onChange: this.onChange
	      })),
	      _react2.default.createElement(
	        'div',
	        { style: { color: 'red' } },
	        (getFieldError('w.x.y.z[0]') || []).join(', ')
	      ),
	      _react2.default.createElement(
	        'button',
	        { onClick: this.setField },
	        'Set field'
	      ),
	      _react2.default.createElement(
	        'button',
	        { onClick: this.resetFields },
	        'Reset fields'
	      ),
	      _react2.default.createElement(
	        'button',
	        null,
	        'Submit'
	      )
	    );
	  }
	}); /* eslint react/no-multi-comp:0, no-console:0 */
	
	Form = (0, _rcForm.createForm)({
	  onFieldsChange: function onFieldsChange(_, changedFields) {
	    console.log('onFieldsChange: ', changedFields);
	  },
	  onValuesChange: function onValuesChange(_, changedValues) {
	    console.log('onValuesChange: ', changedValues);
	  }
	})(Form);
	
	var App = function (_React$Component) {
	  (0, _inherits3.default)(App, _React$Component);
	
	  function App() {
	    (0, _classCallCheck3.default)(this, App);
	    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	  }
	
	  App.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h2',
	        null,
	        'setFieldsValue'
	      ),
	      _react2.default.createElement(Form, null)
	    );
	  };
	
	  return App;
	}(_react2.default.Component);
	
	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=nested-field.js.map