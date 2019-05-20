import isEqualWith from 'lodash/isEqualWith';
import * as React from 'react';
import StateFormContext, { StateFormContextProps } from './StateFormContext';
import { validateRules } from './utils/validateUtil';
import {
  defaultGetValueFromEvent,
  getNameList,
  getValue,
  matchUpdateNamePath,
} from './utils/valueUtil';

interface ChildProps {
  value?: any;
  onChange?: (...args: any[]) => void;
  onFocus?: (...args: any[]) => void;
  onBlur?: (...args: any[]) => void;
}

type Rule =
  | {
      required: boolean;
      validateTrigger?: string | string[];
    }
  | {
      type: string;
    };

interface DiffConfig {
  skipChildProps?: boolean;
}

export interface StateFormFieldProps {
  name: string | number | Array<string | number>;
  children?: React.ReactNode | ((control: ChildProps) => React.ReactNode);
  diffConfig?: DiffConfig;
  rules?: Rule[];
  trigger?: string;
  validateTrigger?: string | string[];
}

export interface StateFormFieldState {
  prevValue: any;
}

// We use Class instead of Hooks here since it will cost much code by using Hooks.
class StateFormField extends React.Component<StateFormFieldProps, any> {
  public static contextType = StateFormContext;
  public static defaultProps = {
    trigger: 'onChange',
    validateTrigger: 'onChange',
  };

  private prevValue: any;
  private cancelRegisterFunc: () => void | null = null;

  // ========================== Lazy update component ==========================
  public shouldComponentUpdate(nextProps: StateFormFieldProps) {
    const prevChild = this.getOnlyChild(this.props.children);
    const nextChild = this.getOnlyChild(nextProps.children);

    if (!prevChild || !nextChild) {
      return true;
    }

    // Low cost equal check
    const { skipChildProps }: DiffConfig = nextProps.diffConfig || {};
    if (
      !isEqualWith(this.props.name, nextProps.name) || // Check if name changed
      prevChild.type !== nextChild.type || // Check if child type changed
      (!skipChildProps && !isEqualWith(prevChild.props, nextChild.props)) // Check if child props changed
    ) {
      return true;
    }

    return this.prevValue !== this.getValue(nextProps);
  }

  // ============================== Subscriptions ==============================
  public componentDidMount() {
    this.componentDidUpdate({} as any);
  }

  public componentDidUpdate(prevProps: StateFormFieldProps) {
    const { registerField }: StateFormContextProps = this.context;
    this.prevValue = this.getValue();

    // Update register if name changed
    // TODO: Move to didMount
    const { name } = this.props;

    if (!isEqualWith(name, prevProps.name)) {
      const namePath = getNameList(name);
      this.cancelRegister();
      this.cancelRegisterFunc = registerField(this);
    }
  }

  public cancelRegister = () => {
    if (this.cancelRegisterFunc) {
      this.cancelRegisterFunc();
    }
    this.cancelRegisterFunc = null;
  };

  public componentWillUnmount() {
    this.cancelRegister();
  }

  // ============================= Child Component =============================
  // Only return validate child node. If invalidate, will do nothing about field.
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

  // ============================== Field Control ==============================
  public getValue = (props?: StateFormFieldProps) => {
    const { getFieldsValue }: StateFormContextProps = this.context;
    const store = getFieldsValue();
    const namePath = getNameList((props || this.props).name);
    return getValue(store, namePath);
  };

  public getControlled = (childProps: ChildProps = {}) => {
    const { name, trigger, validateTrigger } = this.props;
    const namePath = getNameList(name);
    const { getFieldsValue, dispatch }: StateFormContextProps = this.context;
    const store = getFieldsValue();
    const value = getValue(store, namePath);

    const originTriggerFunc: any = childProps[trigger!];

    const control = {
      ...childProps,
      value,
    };

    // Add trigger
    control[trigger!] = (...args: any[]) => {
      const newValue = defaultGetValueFromEvent(...args);
      dispatch({
        type: 'updateValue',
        namePath,
        value: newValue,
      });

      if (originTriggerFunc) {
        originTriggerFunc(...args);
      }
    };

    // Add validateTrigger
    const validateTriggerList: string[] = Array.isArray(validateTrigger)
      ? validateTrigger
      : [ validateTrigger! ];

    validateTriggerList.forEach((triggerName: string) => {
      // Wrap additional function of component, so that we can get latest value from store
      const originTrigger = control[triggerName];
      control[triggerName] = (...args: any[]) => {
        if (originTrigger) {
          originTrigger(...args);
        }

        // Always use latest rules
        const { rules } = this.props;
        if (rules && rules.length) {
          validateRules(this.getValue(), rules);
        }
      };
    });

    return control;
  };

  // Trigger by store update. Check if need update the component
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

    return React.cloneElement(child, this.getControlled(child.props));
  }
}

export default StateFormField;
