import { StateFormContextProps } from './StateFormContext';
interface UpdateAction {
    type: 'updateValue';
    namePath: Array<string | number>;
    value: any;
}
export declare type ReducerAction = UpdateAction;
export declare class FormStore {
    private store;
    private subscribeList;
    private subscribable;
    private forceRootUpdate;
    constructor(forceRootUpdate: () => void);
    getForm: () => StateFormContextProps;
    private getFieldsValue;
    private useSubscribe;
    private dispatch;
    private updateValue;
    private updateValues;
    private subscribe;
    private unsubscribe;
}
declare function useForm(form?: StateFormContextProps): StateFormContextProps;
export default useForm;
