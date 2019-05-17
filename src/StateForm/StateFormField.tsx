import * as React from 'react';
import { Consumer, StateFormContextProps } from './StateFormContext';
import { defaultGetValueFromEvent, getNameList, getValue } from './util';

export interface StateFormFieldProps {
  name: string | number | Array<string | number>;
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

  return (
    <Consumer>
      {({ store, dispatch }: StateFormContextProps) => {
        const { value, onChange } = child.props as ChildProps;
        return React.cloneElement(child, {
          value: getValue(store, namePath),
          onChange(...args: any[]) {
            const newValue = defaultGetValueFromEvent(...args);
            console.log('=>', newValue);
            dispatch({
              type: 'updateValue',
              namePath,
              value: newValue,
            });
          },
        } as any as ChildProps);
      }}
    </Consumer>
  );
};

export default StateFormField;
