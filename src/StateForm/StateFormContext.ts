import * as React from 'react';
import { FieldEntity, FieldError, NamePath, ValidateFields } from './interface';
import { ReducerAction } from './useForm';

export interface StateFormContextProps {
  getFieldValue: (name: NamePath) => any;
  getFieldsValue: (nameList?: NamePath[]) => any;
  getFieldError: (name: NamePath) => string[];
  getFieldsError: (nameList?: NamePath[]) => FieldError[];
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
  registerField: warningFunc,
  getFieldValue: warningFunc,
  getFieldsValue: warningFunc,
  getFieldError: warningFunc,
  getFieldsError: warningFunc,
  setFieldsValue: warningFunc,
  useSubscribe: warningFunc,
  dispatch: warningFunc,
  validateFields: warningFunc,
});

export default Context;
