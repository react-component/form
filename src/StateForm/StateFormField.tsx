import * as React from 'react';
import StateFormContext, { StateFormContextProps } from './StateFormContext';
import { defaultGetValueFromEvent, getNameList, getValue } from './util';

export interface StateFormFieldProps {
  name: string | number | Array<string | number>;
}

export interface StateFormFieldState {
  prevValue: any;
}

interface ChildProps {
  value?: any;
  onChange?: (...args: any[]) => void;
}

const StateFormField: React.FunctionComponent<StateFormFieldProps> = ({ name, children }) => {
  const child = React.Children.only(children);
  const namePath = getNameList(name);
  if (!React.isValidElement(child) || !namePath.length) {
    return child as any;
  }

  const { store, dispatch } = React.useContext(StateFormContext);
  const value = getValue(store, namePath);

  return React.useMemo(() => (React.cloneElement(child, ({
    value,
    onChange(...args: any[]) {
      const newValue = defaultGetValueFromEvent(...args);
      dispatch({
        type: 'updateValue',
        namePath,
        value: newValue,
      });
    },
  } as any) as ChildProps)), [value]);
};

export default StateFormField;
