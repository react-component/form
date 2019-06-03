import toChildrenArray from 'rc-util/lib/Children/toArray';
import * as React from 'react';
import {
  FieldEntity,
  InternalNamePath,
  Meta,
  NamePath,
  NotifyInfo,
  Rule,
  Store,
  ValidateOptions,
} from './interface';
import StateFormContext, { FormInstance, HOOK_MARK } from './StateFormContext';
import { toArray } from './utils/typeUtil';
import { validateRules } from './utils/validateUtil';
import {
  containsNamePath,
  defaultGetValueFromEvent,
  getNamePath,
  getValue,
} from './utils/valueUtil';

interface ChildProps {
  value?: any;
  onChange?: (...args: any[]) => void;
  onFocus?: (...args: any[]) => void;
  onBlur?: (...args: any[]) => void;
}

export interface StateFormFieldProps {
  name: NamePath;
  children?:
    | React.ReactElement
    | ((control: ChildProps, meta: Meta, form: FormInstance) => React.ReactNode);
  rules?: Rule[];
  /** Set up `dependencies` field. When dependencies field update and current field is touched, will trigger validate rules. */
  dependencies?: NamePath[];
  trigger?: string;
  validateTrigger?: string | string[];
  shouldUpdate?: (prevValues: any, nextValues: any) => boolean;
}

export interface StateFormFieldState {
  reset: boolean;
}

// We use Class instead of Hooks here since it will cost much code by using Hooks.
class StateFormField extends React.Component<StateFormFieldProps, StateFormFieldState>
  implements FieldEntity {
  public static contextType = StateFormContext;
  public static defaultProps = {
    trigger: 'onChange',
    validateTrigger: 'onChange',
  };

  public state = {
    reset: false,
  };

  private cancelRegisterFunc: () => void | null = null;

  /**
   * Follow state should not management in State since it will async update by React.
   * This makes first render of form can not get correct state value.
   */
  private touched: boolean = false;
  private validatePromise: Promise<any> | null = null; // We reuse the promise to check if is `validating`

  // ============================== Subscriptions ==============================
  public componentDidMount() {
    const { getInternalHooks }: FormInstance = this.context;
    const { registerField } = getInternalHooks(HOOK_MARK);
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
  public onStoreChange = (
    prevStore: any,
    namePathList: InternalNamePath[] | null,
    info: NotifyInfo,
  ) => {
    const { name, shouldUpdate } = this.props;
    const { getFieldsValue }: FormInstance = this.context;
    const values = getFieldsValue();
    const namePath = getNamePath(name);
    const prevValue = this.getValue(prevStore);
    const curValue = this.getValue();

    switch (info.type) {
      case 'reset':
        if (!namePathList || (namePathList && containsNamePath(namePathList, namePath))) {
          // Clean up state
          this.touched = false;
          this.validatePromise = null;

          /**
           * We update `reset` state twice to clean up current node.
           * Which helps to reset value without define the type.
           */
          this.setState(
            {
              reset: true,
            },
            () => {
              this.setState({ reset: false });
            },
          );
        }
        break;

      case 'setField': {
        const { data } = info;
        if ('touched' in data) {
          this.touched = data.touched;
        }
        if ('validating' in data) {
          this.validatePromise = Promise.resolve();
        }

        this.forceUpdate();
        break;
      }

      default:
        if (
          (namePathList && containsNamePath(namePathList, namePath)) ||
          prevValue !== curValue ||
          (shouldUpdate && shouldUpdate(prevStore, values))
        ) {
          this.forceUpdate();
        }
    }
  };

  public isFieldTouched = () => {
    return this.touched;
  };

  public validateRules = (options?: ValidateOptions) => {
    const { rules, name } = this.props;
    const { triggerName } = (options || {}) as ValidateOptions;
    const namePath = getNamePath(name);

    let filteredRules = rules || [];
    if (triggerName) {
      filteredRules = filteredRules.filter(({ validateTrigger }: Rule) => {
        if (!validateTrigger) {
          return true;
        }
        const triggerList = toArray(validateTrigger);
        return triggerList.includes(triggerName);
      });
    }

    const promise = validateRules(namePath, this.getValue(), filteredRules, options, this.context);
    this.validatePromise = promise;

    promise
      .catch(e => e)
      .then(() => {
        if (this.validatePromise === promise) {
          this.validatePromise = null;
        }
      });

    return promise;
  };

  public isFieldValidating = () => !!this.validatePromise;

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
        touched: this.isFieldTouched(),
        validating: this.isFieldValidating(),
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
  public getValue = (store?: Store) => {
    const { name } = this.props;
    const { getFieldsValue }: FormInstance = this.context;
    const namePath = getNamePath(name);
    return getValue(store || getFieldsValue(), namePath);
  };

  public getControlled = (childProps: ChildProps = {}) => {
    const { name, trigger, validateTrigger } = this.props;
    const namePath = getNamePath(name);
    const { getInternalHooks, validateFields }: FormInstance = this.context;
    const { dispatch } = getInternalHooks(HOOK_MARK);
    const value = this.getValue();

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
          // We dispatch validate to root since it will update related data with other field with same name
          // TODO: use dispatch instead
          validateFields([namePath], { triggerName });
        }
      };
    });

    return control;
  };

  public render() {
    const { reset } = this.state;
    const { name, children } = this.props;

    const { child, isFunction } = this.getOnlyChild(children);
    const namePath = getNamePath(name);
    if (!child || !namePath.length) {
      return children;
    }

    // Not need to `cloneElement` since user can handle this in render function self
    const returnChildNode = isFunction
      ? child
      : React.cloneElement(child, this.getControlled(child.props));

    // Force render a new component to reset all the data
    if (reset) {
      return React.createElement(() => returnChildNode);
    }

    return returnChildNode;
  }
}

export default StateFormField;
