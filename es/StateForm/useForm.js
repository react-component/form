function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import * as React from 'react';
import { getNameList, setValue } from './util';
export var FormStore = function FormStore(forceRootUpdate) {
  var _this = this;

  _classCallCheck(this, FormStore);

  this.store = {};
  this.subscribeList = [];
  this.subscribable = true;

  this.getForm = function () {
    return {
      getFieldsValue: _this.getFieldsValue,
      useSubscribe: _this.useSubscribe,
      updateValue: _this.updateValue,
      updateValues: _this.updateValues,
      dispatch: _this.dispatch,
      subscribe: _this.subscribe,
      unsubscribe: _this.unsubscribe
    };
  };

  this.getFieldsValue = function () {
    return _this.store;
  };

  this.useSubscribe = function (subscribable) {
    _this.subscribable = subscribable;
  };

  this.dispatch = function (action) {
    switch (action.type) {
      case 'updateValue':
        {
          var namePath = action.namePath,
              value = action.value;

          _this.updateValue(namePath, value);
        }
    }
  };

  this.updateValue = function (name, value) {
    var namePath = getNameList(name);
    _this.store = setValue(_this.store, namePath, value);

    if (_this.subscribable) {
      _this.subscribeList.forEach(function (callback) {
        callback(_this.store, namePath);
      });
    } else {
      _this.forceRootUpdate();
    }
  };

  this.updateValues = function (store) {
    _this.store = store;

    if (_this.subscribable) {
      _this.subscribeList.forEach(function (callback) {
        callback(_this.store, null);
      });
    } else {
      _this.forceRootUpdate();
    }
  }; // ========================= Subscription =========================


  this.subscribe = function (callback) {
    _this.subscribeList.push(callback);
  };

  this.unsubscribe = function (callback) {
    _this.subscribeList = _this.subscribeList.filter(function (func) {
      return func !== callback;
    });
  };

  this.forceRootUpdate = forceRootUpdate;
};

function useForm(form) {
  var ref = React.useRef();

  var _React$useState = React.useState(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      forceUpdate = _React$useState2[1];

  if (!ref.current) {
    ref.current = form || new FormStore(function () {
      forceUpdate({});
    }).getForm();
  }

  return ref.current;
}

export default useForm;