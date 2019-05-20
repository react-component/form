import * as React from 'react';

var warningFunc = function warningFunc() {
  throw new Error('StateForm is not defined.');
};

var Context = React.createContext({
  getFieldsValue: warningFunc,
  updateValue: warningFunc,
  updateValues: warningFunc,
  useSubscribe: warningFunc,
  dispatch: warningFunc,
  subscribe: warningFunc,
  unsubscribe: warningFunc
});
export default Context;