import isEqualWith from 'lodash/isEqualWith';
import * as React from 'react';
import StateFormContext, { StateFormContextProps } from './StateFormContext';
import { defaultGetValueFromEvent, getNameList, getValue, matchUpdateNamePath } from './util';

export interface StateFormFieldProps {
  name: string | number | Array<string | number>;
  children?: React.ReactNode;
}

export interface StateFormFieldState {
  prevValue: any;
}

interface ChildProps {
  value?: any;
  onChange?: (...args: any[]) => void;
}

function onlyChild(children: React.ReactNode): React.ReactElement | null {
  const child = React.Children.only(children);
  if (!React.isValidElement(child)) {
    return null;
  }

  return child;
}

// We use Class instead of Hooks here since it will cost much code by using Hooks.
class StateFormField extends React.Component<StateFormFieldProps, any> {
  public static contextType = StateFormContext;
  private prevValue: any;

  public shouldComponentUpdate(nextProps: StateFormFieldProps) {
    const prevChild = onlyChild(this.props.children);
    const nextChild = onlyChild(nextProps.children);

    if ((!prevChild && nextChild) || (prevChild && !nextChild)) {
      return true;
    }

    // Low cost equal check
    if (!isEqualWith(this.props.name, nextProps.name) ||
    prevChild.type !== nextChild.type ||
    !isEqualWith(prevChild.props, nextChild.props)) {
      return false;
    }

    const { getFieldsValue }: StateFormContextProps = this.context;
    const store = getFieldsValue();
    const namePath = getNameList(nextProps.name);
    const value = getValue(store, namePath);
    return this.prevValue !== value;

  }

  public componentDidMount() {
    const { subscribe }: StateFormContextProps = this.context;
    subscribe(this.onStoreChange);
  }

  public componentWillUnmount() {
    const { unsubscribe }: StateFormContextProps = this.context;
    unsubscribe(this.onStoreChange);
  }

  // Check if need update the component
  public onStoreChange = (store: any, changedNamePath: Array<string | number> | null) => {
    const { name } = this.props;
    const namePath = getNameList(name);
    if (matchUpdateNamePath(namePath, changedNamePath)) {
      this.prevValue = getValue(store, namePath);
      this.forceUpdate();
    }
  };

  public render() {
    const { name, children } = this.props;

    const child = onlyChild(children);
    const namePath = getNameList(name);
    if (!child || !namePath.length) {
      return children;
    }

    const { getFieldsValue, dispatch }: StateFormContextProps = this.context;
    const store = getFieldsValue();
    const value = getValue(store, namePath);

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
