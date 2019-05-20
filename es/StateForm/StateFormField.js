function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import isEqualWith from 'lodash/isEqualWith';
import * as React from 'react';
import StateFormContext from './StateFormContext';
import { defaultGetValueFromEvent, getNameList, getValue, matchUpdateNamePath } from './util'; // We use Class instead of Hooks here since it will cost much code by using Hooks.

var StateFormField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StateFormField, _React$Component);

  function StateFormField() {
    var _this;

    _classCallCheck(this, StateFormField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StateFormField).apply(this, arguments)); // ============================= Child Component =============================
    // Only return validate child node. If invalidate, will do nothing about field.

    _this.getOnlyChild = function (children) {
      // Support render props
      if (typeof children === 'function') {
        return _this.getOnlyChild(children(_this.getControlled()));
      } // Filed element only


      var child = React.Children.only(children);

      if (!React.isValidElement(child)) {
        return null;
      }

      return child;
    }; // ============================== Field Control ==============================


    _this.getValue = function (props) {
      var getFieldsValue = _this.context.getFieldsValue;
      var store = getFieldsValue();
      var namePath = getNameList((props || _this.props).name);
      return getValue(store, namePath);
    };

    _this.getControlled = function () {
      var childProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props = _this.props,
          name = _this$props.name,
          trigger = _this$props.trigger,
          validateTrigger = _this$props.validateTrigger;
      var namePath = getNameList(name);
      var _this$context = _this.context,
          getFieldsValue = _this$context.getFieldsValue,
          dispatch = _this$context.dispatch;
      var store = getFieldsValue();
      var value = getValue(store, namePath);
      var originTriggerFunc = childProps[trigger];

      var control = _extends({}, childProps, {
        value: value
      }); // Add trigger


      control[trigger] = function () {
        var newValue = defaultGetValueFromEvent.apply(void 0, arguments);
        dispatch({
          type: 'updateValue',
          namePath: namePath,
          value: newValue
        });

        if (originTriggerFunc) {
          originTriggerFunc.apply(void 0, arguments);
        }
      }; // Add validateTrigger


      var validateTriggerList = Array.isArray(validateTrigger) ? validateTrigger : [validateTrigger];
      validateTriggerList.forEach(function (triggerName) {
        var originTrigger = control[triggerName];

        control[triggerName] = function () {
          if (originTrigger) {
            originTrigger.apply(void 0, arguments);
          }
        }; // Always use latest rules


        var rules = _this.props.rules;

        if (rules) {// rules.forEach((rule) => {
          //   rule.
          // });
          // const validator = new AsyncValidator(rules);
        }
      });
      return control;
    }; // Trigger by store update. Check if need update the component


    _this.onStoreChange = function (store, changedNamePath) {
      var name = _this.props.name;
      var namePath = getNameList(name);

      if (matchUpdateNamePath(namePath, changedNamePath)) {
        _this.forceUpdate();
      }
    };

    return _this;
  } // ========================== Lazy update component ==========================


  _createClass(StateFormField, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var prevChild = this.getOnlyChild(this.props.children);
      var nextChild = this.getOnlyChild(nextProps.children);

      if (!prevChild || !nextChild) {
        return true;
      } // Low cost equal check


      var _ref = nextProps.diffConfig || {},
          skipChildProps = _ref.skipChildProps;

      if (!isEqualWith(this.props.name, nextProps.name) || // Check if name changed
      prevChild.type !== nextChild.type || // Check if child type changed
      !skipChildProps && !isEqualWith(prevChild.props, nextChild.props) // Check if child props changed
      ) {
          return true;
        }

      return this.prevValue !== this.getValue(nextProps);
    } // ============================== Subscriptions ==============================

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var subscribe = this.context.subscribe;
      subscribe(this.onStoreChange);
      this.prevValue = this.getValue();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.prevValue = this.getValue();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var unsubscribe = this.context.unsubscribe;
      unsubscribe(this.onStoreChange);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          name = _this$props2.name,
          children = _this$props2.children;
      var child = this.getOnlyChild(children);
      var namePath = getNameList(name);

      if (!child || !namePath.length) {
        return children;
      }

      return React.cloneElement(child, this.getControlled(child.props));
    }
  }]);

  return StateFormField;
}(React.Component);

StateFormField.contextType = StateFormContext;
StateFormField.defaultProps = {
  trigger: 'onChange',
  validateTrigger: 'onChange'
};
export default StateFormField;