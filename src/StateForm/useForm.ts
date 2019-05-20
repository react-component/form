import * as React from 'react';
import {
  StateFormContextProps,
  Store,
  SubscribeCallback,
} from './StateFormContext';
import { getNameList, setValue } from './util';

interface UpdateAction {
  type: 'updateValue';
  namePath: Array<string | number>;
  value: any;
}

export type ReducerAction = UpdateAction;

export class FormStore {
  private store: Store = {};
  private subscribeList: any[] = [];
  private subscribable: boolean = true;
  private forceRootUpdate: () => void;

  constructor(forceRootUpdate: () => void) {
    this.forceRootUpdate = forceRootUpdate;
  }

  public getForm = (): StateFormContextProps => ({
    getFieldsValue: this.getFieldsValue,
    useSubscribe: this.useSubscribe,
    updateValue: this.updateValue,
    updateValues: this.updateValues,
    dispatch: this.dispatch,
    subscribe: this.subscribe,
    unsubscribe: this.unsubscribe,
  });

  private getFieldsValue = () => this.store;

  private useSubscribe = (subscribable: boolean) => {
    this.subscribable = subscribable;
  };

  private dispatch = (action: ReducerAction) => {
    switch (action.type) {
      case 'updateValue': {
        const { namePath, value } = action;
        this.updateValue(namePath, value);
      }
    }
  };

  private updateValue = (name: string | number | Array<string | number>, value: any) => {
    const namePath = getNameList(name);
    this.store = setValue(this.store, namePath, value);

    if (this.subscribable) {
      this.subscribeList.forEach((callback: SubscribeCallback) => {
        callback(this.store, namePath);
      });
    } else {
      this.forceRootUpdate();
    }
  };

  private updateValues = (store: any) => {
    this.store = store;

    if (this.subscribable) {
      this.subscribeList.forEach((callback: SubscribeCallback) => {
        callback(this.store, null);
      });
    } else {
      this.forceRootUpdate();
    }
  };

  // ========================= Subscription =========================
  private subscribe = (callback: SubscribeCallback) => {
    this.subscribeList.push(callback);
  };

  private unsubscribe = (callback: SubscribeCallback) => {
    this.subscribeList = this.subscribeList.filter((func) => func !== callback);
  };
}

function useForm(form: StateFormContextProps): StateFormContextProps {
  const ref = React.useRef() as any;
  const [, forceUpdate] = React.useState();

  if (!ref.current) {
    ref.current = form || new FormStore(() => {
      forceUpdate({});
    }).getForm();
  }

  return ref.current;
}

export default useForm;
