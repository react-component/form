import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import createDOMForm from './createDOMForm';
import PropTypes from 'prop-types';

var FormScope = function (_React$Component) {
  _inherits(FormScope, _React$Component);

  function FormScope() {
    _classCallCheck(this, FormScope);

    return _possibleConstructorReturn(this, (FormScope.__proto__ || Object.getPrototypeOf(FormScope)).apply(this, arguments));
  }

  _createClass(FormScope, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          options = _objectWithoutProperties(_props, ['children']);

      var WrappedComponent = createDOMForm(options)(function (_ref) {
        var form = _ref.form;

        _extends(_this2, form);
        return children(form);
      });
      return React.createElement(WrappedComponent, null);
    }
  }]);

  return FormScope;
}(React.Component);

FormScope.propTypes = {
  children: PropTypes.func,
  validateMessages: PropTypes.object,
  onFieldsChange: PropTypes.func,
  onValuesChange: PropTypes.func,
  mapProps: PropTypes.func,
  mapPropsToFields: PropTypes.func,
  fieldNameProp: PropTypes.string,
  fieldMetaProp: PropTypes.string,
  fieldDataProp: PropTypes.string,
  withRef: PropTypes.bool
};


export default FormScope;