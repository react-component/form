import * as React from 'react';
import { FieldEntity, FieldError, NamePath, ValidateFields } from './interface';
import { ReducerAction } from './useForm';

export interface StateFormContextProps {
  // Origin Form API
  getFieldValue: (name: NamePath) => any;
  getFieldsValue: (nameList?: NamePath[]) => any;
  getFieldError: (name: NamePath) => string[];
  getFieldsError: (nameList?: NamePath[]) => FieldError[];
  isFieldsTouched: (nameList?: NamePath[]) => boolean;
  isFieldTouched: (name: NamePath) => boolean;

  useSubscribe: (subscribable: boolean) => void;
  setFieldsValue: (value: any) => void;
  dispatch: (action: ReducerAction) => void;
  registerField: (entity: FieldEntity) => (() => void);
  validateFields: ValidateFields;
}

const warningFunc: any = () => {
  throw new Error('StateForm is not defined.');
};

const Context = React.createContext<StateFormContextProps>({
  getFieldValue: warningFunc,
  getFieldsValue: warningFunc,
  getFieldError: warningFunc,
  getFieldsError: warningFunc,
  isFieldsTouched: warningFunc,
  isFieldTouched: warningFunc,

  setFieldsValue: warningFunc,
  useSubscribe: warningFunc,
  dispatch: warningFunc,
  validateFields: warningFunc,
  registerField: warningFunc,
});

export default Context;
