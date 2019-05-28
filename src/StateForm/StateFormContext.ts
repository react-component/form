import * as React from 'react';
import { InternalNamePath, NamePath, Rule } from './StateFormField';
import { ReducerAction } from './useForm';

export interface Store {
  [name: string]: any;
}

export interface FieldEntity {
  onStoreChange: (store: any, namePathList: InternalNamePath[] | null) => void;
  forceUpdate: () => void;
  props: {
    name?: NamePath;
    rules?: Rule[];
  };
}

export interface FieldError {
  name: InternalNamePath;
  errors: string[];
}

export interface ValidateOptions {
  force?: boolean;
}

export type ValidateFields = ((nameList?: NamePath[], options?: ValidateOptions) => Promise<any>);

export interface StateFormContextProps {
  getFieldsValue: () => Store;
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
  getFieldsValue: warningFunc,
  getFieldError: warningFunc,
  getFieldsError: warningFunc,
  setFieldsValue: warningFunc,
  useSubscribe: warningFunc,
  dispatch: warningFunc,
  validateFields: warningFunc,
});

export default Context;
