import * as React from 'react';
import { ReducerAction } from './useForm';

export interface Store {
  [name: string]: any;
}
export type SubscribeCallback = (store: any, namePath: Array<string | number> | null) => void;

export interface FieldEntity {
  onStoreChange: (store: any, namePath: Array<string | number> | null) => void;
}

export interface StateFormContextProps {
  getFieldsValue: () => Store;
  useSubscribe: (subscribable: boolean) => void;
  updateValue: (name: string | number | Array<string | number>, value: any) => void;
  updateValues: (value: any) => void;
  dispatch: (action: ReducerAction) => void;
  registerField: (entity: FieldEntity) => (() => void);
}

const warningFunc: any = () => {
  throw new Error('StateForm is not defined.');
};

const Context = React.createContext<StateFormContextProps>({
  registerField: warningFunc,
  getFieldsValue: warningFunc,
  updateValue: warningFunc,
  updateValues: warningFunc,
  useSubscribe: warningFunc,
  dispatch: warningFunc,
});

export default Context;
