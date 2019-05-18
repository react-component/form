import * as React from 'react';
import { ReducerAction } from './useForm';

export type Store = { [name: string]: any };
export type SubscribeCallback = (store: any, namePath: Array<string | number>) => void;
export type UnsubscribeCallback = (store: any) => void;

export interface StateFormContextProps {
  getStore: () => Store;
  dispatch: (action: ReducerAction) => void;
  subscribe: (callback: SubscribeCallback) => void;
  unsubscribe: (callback: UnsubscribeCallback) => void;
}

const warningFunc: any = () => {
  throw new Error('StateForm is not defined.');
};

const Context = React.createContext<StateFormContextProps>({
  getStore: warningFunc,
  dispatch: warningFunc,
  subscribe: warningFunc,
  unsubscribe: warningFunc,
});

export default Context;