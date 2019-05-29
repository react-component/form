import toChildrenArray from 'rc-util/lib/Children/toArray';
import * as React from 'react';
import { FieldEntity, InternalNamePath, Meta, NamePath, Rule } from './interface';
import StateFormContext, { StateFormContextProps } from './StateFormContext';
import { toArray } from './utils/typeUtil';
import {
  containsNamePath,
  defaultGetValueFromEvent,
  getNamePath,
  getValue,
} from './utils/valueUtil';

// TODO: validating, touched, dirty

interface ChildProps {
  value?: any;
  onChange?: (...args: any[]) => void;
  onFocus?: (...args: any[]) => void;
  onBlur?: (...args: any[]) => void;
}

export interface StateFormFieldProps {
  name: NamePath;
  children?: React.ReactNode | ((control: ChildProps) => React.ReactNode);
  rules?: Rule[];
  trigger?: string;
  validateTrigger?: string | string[];
  shouldUpdate?: (prevValues: any, nextValues: any) => boolean;
}

export interface StateFormFieldState {
  touched: boolean;
}

// We use Class instead of Hooks here since it will cost much code by using Hooks.
class StateFormField extends React.Component<StateFormFieldProps, any>
  implements FieldEntity {
  public static contextType = StateFormContext;
  public static defaultProps = {
    trigger: 'onChange',
    validateTrigger: 'onChange',
  };

  private cancelRegisterFunc: () => void | null = null;

  /**
   * Touched state should not management in State since it will async update by React.
   * This makes first render of form can not get correct `touched` value.
   */
  private touched: boolean = false;

  // ============================== Subscriptions ==============================
  public componentDidMount() {
    const { registerField }: StateFormContextProps = this.context;
    this.cancelRegisterFunc = registerField(this);
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

  // ========================= Field Entity Interfaces =========================
  // Trigger by store update. Check if need update the component
  public onStoreChange = (prevStore: any, namePathList: InternalNamePath[] | null) => {
    const { name, shouldUpdate } = this.props;
    const { getFieldsValue } = this.context;
    const values = getFieldsValue();
    const namePath = getNamePath(name);
    const preValue = getValue(prevStore, namePath);
    const curValue = getValue(values, namePath);
    if (
      (namePathList && containsNamePath(namePathList, namePath)) ||
      preValue !== curValue ||
      (shouldUpdate && shouldUpdate(prevStore, values))
    ) {
      this.forceUpdate();
    }
  };

  public isFieldTouched = () => {
    return this.touched;
  };

  // ============================= Child Component =============================
  // Only return validate child node. If invalidate, will do nothing about field.
  public getOnlyChild = (
    children:
      | React.ReactNode
      | ((control: ChildProps, meta: Meta, context: any) => React.ReactNode),
  ): { child: React.ReactElement | null; isFunction: boolean } => {
    // Support render props
    if (typeof children === 'function') {
      const { name } = this.props;
      const { getFieldError } = this.context;

      const meta: Meta = {
        errors: getFieldError(name),
      };
      return {
        ...this.getOnlyChild(children(this.getControlled(), meta, this.context)),
        isFunction: true,
      };
    }

    // Filed element only
    const childList = toChildrenArray(children);
    if (childList.length !== 1 || !React.isValidElement(childList[0])) {
      return { child: null, isFunction: false };
    }

    return { child: childList[0], isFunction: false };
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

      // Mark as touched
      this.touched = true;

      if (originTriggerFunc) {
        originTriggerFunc(...args);
      }
    };

    // Add validateTrigger
    const validateTriggerList: string[] = toArray(validateTrigger);

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
          validateFields([ namePath ], { triggerName });
        }
      };
    });

    return control;
  };

  public render() {
    const { name, children } = this.props;

    const { child, isFunction } = this.getOnlyChild(children);
    const namePath = getNamePath(name);
    if (!child || !namePath.length) {
      return children;
    }

    // Not need to `cloneElement` since user can handle this in render function self
    if (isFunction) {
      return child;
    }

    return React.cloneElement(child, this.getControlled(child.props));
  }
}

export default StateFormField;
