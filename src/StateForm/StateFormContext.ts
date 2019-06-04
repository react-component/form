import * as React from 'react';
import {
  Callbacks,
  FieldData,
  FieldEntity,
  FieldError,
  InternalNamePath,
  NamePath,
  Store,
  ValidateFields,
  
} from './interface';
import { ReducerAction } from './useForm';

export const HOOK_MARK = 'RC_FORM_INTERNAL_HOOKS';

export interface InternalHooks {
  dispatch: (action: ReducerAction) => void;
  registerField: (entity: FieldEntity) => () => void;
  useSubscribe: (subscribable: boolean) => void;
  setInitialValues: (values: Store) => void;
  setCallbacks: (callbacks: Callbacks) => void;
}

export interface FormInstance {
  // Origin Form API
  getFieldValue: (name: NamePath) => any;
  getFieldsValue: (nameList?: NamePath[]) => any;
  getFieldError: (name: NamePath) => string[];
  getFieldsError: (nameList?: NamePath[]) => FieldError[];
  isFieldsTouched: (nameList?: NamePath[]) => boolean;
  isFieldTouched: (name: NamePath) => boolean;
  isFieldValidating: (name: NamePath) => boolean;
  resetFields: () => void;
  setFields: (fields: FieldData[]) => void;
  setFieldsValue: (value: Store) => void;
  validateFields: ValidateFields;

  /**
   * Passed by field context props
   */
  prefixName?: InternalNamePath;

  /**
   * Form component should register some content into store.
   * We pass the `HOOK_MARK` as key to avoid user call the function.
   */
  getInternalHooks: (secret: string) => InternalHooks | null;
}

const warningFunc: any = () => {
  throw new Error('StateForm is not defined.');
};

const Context = React.createContext<FormInstance>({
  getFieldValue: warningFunc,
  getFieldsValue: warningFunc,
  getFieldError: warningFunc,
  getFieldsError: warningFunc,
  isFieldsTouched: warningFunc,
  isFieldTouched: warningFunc,
  isFieldValidating: warningFunc,
  resetFields: warningFunc,
  setFields: warningFunc,
  setFieldsValue: warningFunc,
  validateFields: warningFunc,

  getInternalHooks: warningFunc,
});

export default Context;
