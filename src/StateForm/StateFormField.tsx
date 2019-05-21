import * as React from 'react';
import StateFormContext, { StateFormContextProps } from './StateFormContext';
import { defaultGetValueFromEvent, getNamePath, getValue, isSimilar, matchNamePath } from './utils/valueUtil';

export type InternalNamePath = Array<string | number>;
export type NamePath = string | number | InternalNamePath;

interface ChildProps {
  value?: any;
  onChange?: (...args: any[]) => void;
  onFocus?: (...args: any[]) => void;
  onBlur?: (...args: any[]) => void;
}

export interface Rule {
  enum?: any[];
  len?: number;
  max?: number;
  message?: any;
  min?: number;
  pattern?: RegExp;
  required?: boolean;
  transform?: (value: any) => any;
  type?: string;
  validator?: (rule: Rule, value: any, callback: (error: any) => void) => void;
  whitespace?: boolean;
  validateTrigger?: string | string[];
};

export interface StateFormFieldProps {
  name: NamePath;
  children?: React.ReactNode | ((control: ChildProps) => React.ReactNode);
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

  // ============================== Subscriptions ==============================
  public componentDidMount() {
    const { registerField }: StateFormContextProps = this.context;
    this.cancelRegisterFunc = registerField(this);
    this.componentDidUpdate({} as any);
  }

  public componentDidUpdate(prevProps: StateFormFieldProps) {
    this.prevValue = this.getValue();
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
    const namePath = getNamePath((props || this.props).name);
    return getValue(store, namePath);
  };

  public getControlled = (childProps: ChildProps = {}) => {
    const { name, trigger, validateTrigger } = this.props;
    const namePath = getNamePath(name);
    const { getFieldsValue, dispatch, validateFields }: StateFormContextProps = this.context;
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
          validateFields([ namePath ]);
        }
      };
    });

    return control;
  };

  // Trigger by store update. Check if need update the component
  public onStoreChange = (store: any, changedNamePath: Array<string | number> | null) => {
    const { name } = this.props;
    const namePath = getNamePath(name);
    if (matchNamePath(namePath, changedNamePath)) {
      console.log('NNNN', namePath, changedNamePath);
      this.forceUpdate();
    }
  };

  public render() {
    const { name, children } = this.props;

    const child = this.getOnlyChild(children);
    const namePath = getNamePath(name);
    if (!child || !namePath.length) {
      return children;
    }

    return React.cloneElement(child, this.getControlled(child.props));
  }
}

export default StateFormField;
