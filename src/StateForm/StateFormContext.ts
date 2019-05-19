import * as React from 'react';
import { ReducerAction } from './useForm';

export interface Store {
  [name: string]: any;
}
export type SubscribeCallback = (store: any, namePath: Array<string | number>) => void;

export interface StateFormContextProps {
  getFieldsValue: () => Store;
  useSubscribe: (subscribable: boolean) => void;
  updateValue: (name: string | number | Array<string | number>, value: any) => void;
  updateValues: (value: any) => void;
  dispatch: (action: ReducerAction) => void;
  subscribe: (callback: SubscribeCallback) => void;
  unsubscribe: (callback: SubscribeCallback) => void;
}

const warningFunc: any = () => {
  throw new Error('StateForm is not defined.');
};

const Context = React.createContext<StateFormContextProps>({
  getFieldsValue: warningFunc,
  updateValue: warningFunc,
  updateValues: warningFunc,
  useSubscribe: warningFunc,
  dispatch: warningFunc,
  subscribe: warningFunc,
  unsubscribe: warningFunc,
});

export default Context;
