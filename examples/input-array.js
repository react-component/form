webpackJsonp([7],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(373);


/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(208);
	
	var form = _interopRequireWildcard(_src);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = form; // export this package's api
	
	module.exports = exports['default'];

/***/ },

/***/ 208:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createForm = undefined;
	
	var _createForm = __webpack_require__(209);
	
	var _createForm2 = _interopRequireDefault(_createForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.createForm = _createForm2.default; // export this package's api

/***/ },

/***/ 299:
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

/***/ 373:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _rcForm = __webpack_require__(207);
	
	var _react = __webpack_require__(40);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(77);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _styles = __webpack_require__(299);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint no-console:0 */
	
	var uuid = 0;
	
	var Form = _react2.default.createClass({
	  displayName: 'Form',
	
	  propTypes: {
	    form: _react.PropTypes.object
	  },
	  remove: function remove(k) {
	    var form = this.props.form;
	    // can use data-binding to get
	
	    var keys = form.getFieldValue('keys');
	    keys = keys.filter(function (key) {
	      return key !== k;
	    });
	    // can use data-binding to set
	    form.setFieldsValue({
	      keys: keys
	    });
	  },
	  add: function add() {
	    uuid++;
	    var form = this.props.form;
	    // can use data-binding to get
	
	    var keys = form.getFieldValue('keys');
	    keys = keys.concat(uuid);
	    // can use data-binding to set
	    // important! notify form to detect changes
	    form.setFieldsValue({
	      keys: keys
	    });
	  },
	  submit: function submit(e) {
	    e.preventDefault();
	    console.log(this.props.form.getFieldsValue());
	  },
	  render: function render() {
	    var _this = this;
	
	    var _props$form = this.props.form;
	    var getFieldProps = _props$form.getFieldProps;
	    var getFieldValue = _props$form.getFieldValue;
	
	    getFieldProps('keys', {
	      initialValue: []
	    });
	    var inputs = getFieldValue('keys').map(function (k) {
	      return _react2.default.createElement(
	        'div',
	        { key: k, style: _styles.regionStyle },
	        _react2.default.createElement('input', getFieldProps('name' + k)),
	        _react2.default.createElement(
	          'a',
	          {
	            onClick: _this.remove.bind(_this, k)
	          },
	          'delete'
	        )
	      );
	    });
	    return _react2.default.createElement(
	      'div',
	      null,
	      inputs,
	      _react2.default.createElement(
	        'div',
	        { style: _styles.regionStyle },
	        _react2.default.createElement(
	          'button',
	          { onClick: this.submit },
	          'submit'
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: this.add },
	          'add'
	        )
	      )
	    );
	  }
	});
	
	Form = (0, _rcForm.createForm)()(Form);
	
	_reactDom2.default.render(_react2.default.createElement(Form, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=input-array.js.map