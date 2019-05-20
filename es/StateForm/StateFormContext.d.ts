import * as React from 'react';
import { ReducerAction } from './useForm';
export interface Store {
    [name: string]: any;
}
export declare type SubscribeCallback = (store: any, namePath: Array<string | number> | null) => void;
export interface StateFormContextProps {
    getFieldsValue: () => Store;
    useSubscribe: (subscribable: boolean) => void;
    updateValue: (name: string | number | Array<string | number>, value: any) => void;
    updateValues: (value: any) => void;
    dispatch: (action: ReducerAction) => void;
    subscribe: (callback: SubscribeCallback) => void;
    unsubscribe: (callback: SubscribeCallback) => void;
}
declare const Context: React.Context<StateFormContextProps>;
export default Context;
