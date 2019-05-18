import * as React from 'react';
import StateFormContext, { StateFormContextProps } from './StateFormContext';
import { defaultGetValueFromEvent, getNameList, getValue, matchUpdateNamePath } from './util';

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

// We use Component instead of Hooks here since it will cost much code by using Hooks.
class StateFormField extends React.Component<StateFormFieldProps, any> {
  static contextType = StateFormContext;

  componentDidMount() {
    const { subscribe }: StateFormContextProps = this.context;
    subscribe(this.onStoreChange);
  }

  // Check if need update the component
  private onStoreChange = (store: any, changedNamePath: Array<string | number>) => {
    const { name } = this.props;
    const namePath = getNameList(name);
    if (matchUpdateNamePath(namePath, changedNamePath)) {
      this.forceUpdate();
    }
  };

  render() {
    const { name, children } = this.props;

    const child = React.Children.only(children);
    const namePath = getNameList(name);
    if (!React.isValidElement(child) || !namePath.length) {
      return child as any;
    }

    const { getStore, dispatch }: StateFormContextProps = this.context;
    const store = getStore();
    const value = getValue(store, namePath);

    console.log('=>', store, name, value);

    return React.cloneElement(child, ({
      value,
      onChange(...args: any[]) {
        const newValue = defaultGetValueFromEvent(...args);
        dispatch({
          type: 'updateValue',
          namePath,
          value: newValue,
        });
      },
    } as any) as ChildProps);
  }
}

export default StateFormField;
