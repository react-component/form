import isEqualWith from 'lodash/isEqualWith';
import * as React from 'react';
import StateFormContext, { StateFormContextProps } from './StateFormContext';
import { defaultGetValueFromEvent, getNameList, getValue, matchUpdateNamePath } from './util';

interface ChildProps {
  value?: any;
  onChange?: (...args: any[]) => void;
}
export interface StateFormFieldProps {
  name: string | number | Array<string | number>;
  children?: React.ReactNode | ((control: ChildProps) => React.ReactNode);
}

export interface StateFormFieldState {
  prevValue: any;
}

// We use Class instead of Hooks here since it will cost much code by using Hooks.
class StateFormField extends React.Component<StateFormFieldProps, any> {
  public static contextType = StateFormContext;
  private prevValue: any;

  public shouldComponentUpdate(nextProps: StateFormFieldProps) {
    const prevChild = this.getOnlyChild(this.props.children);
    const nextChild = this.getOnlyChild(nextProps.children);

    if ((!prevChild && nextChild) || (prevChild && !nextChild)) {
      return true;
    }

    // Low cost equal check
    if (
      !isEqualWith(this.props.name, nextProps.name) ||
      prevChild.type !== nextChild.type ||
      !isEqualWith(prevChild.props, nextChild.props)
    ) {
      return false;
    }

    return this.prevValue !== this.getValue(nextProps);
  }

  public componentDidMount() {
    const { subscribe }: StateFormContextProps = this.context;
    subscribe(this.onStoreChange);
    this.prevValue = this.getValue();
  }

  public componentDidUpdate() {
    this.prevValue = this.getValue();
  }

  public componentWillUnmount() {
    const { unsubscribe }: StateFormContextProps = this.context;
    unsubscribe(this.onStoreChange);
  }

  public getValue = (props?: StateFormFieldProps) => {
    const { getFieldsValue }: StateFormContextProps = this.context;
    const store = getFieldsValue();
    const namePath = getNameList((props || this.props).name);
    return getValue(store, namePath);
  };

  public getControlled = () => {
    const { name } = this.props;
    const namePath = getNameList(name);
    const { getFieldsValue, dispatch }: StateFormContextProps = this.context;
    const store = getFieldsValue();
    const value = getValue(store, namePath);

    return {
      value,
      onChange(...args: any[]) {
        const newValue = defaultGetValueFromEvent(...args);
        dispatch({
          type: 'updateValue',
          namePath,
          value: newValue,
        });
      },
    };
  };

  public getOnlyChild = (
    children: React.ReactNode | ((control: ChildProps) => React.ReactNode),
  ): React.ReactElement | null => {
    // Support render props
    if (typeof children === 'function') {
      return this.getOnlyChild(children(this.getControlled()));
    }

    // Filed element only
    const child = React.Children.only(children);
    if (!React.isValidElement(child)) {
      return null;
    }

    return child;
  };

  // Check if need update the component
  public onStoreChange = (store: any, changedNamePath: Array<string | number> | null) => {
    const { name } = this.props;
    const namePath = getNameList(name);
    if (matchUpdateNamePath(namePath, changedNamePath)) {
      this.forceUpdate();
    }
  };

  public render() {
    const { name, children } = this.props;

    const child = this.getOnlyChild(children);
    const namePath = getNameList(name);
    if (!child || !namePath.length) {
      return children;
    }

    return React.cloneElement(child, this.getControlled());
  }
}

export default StateFormField;
