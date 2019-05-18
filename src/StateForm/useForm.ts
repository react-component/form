import * as React from 'react';
import { setValue } from './util';
import { StateFormContextProps, SubscribeCallback, UnsubscribeCallback, Store } from './StateFormContext';

interface UpdateAction {
  type: 'updateValue';
  namePath: Array<string | number>;
  value: any;
}

export type ReducerAction = UpdateAction;

export class FormStore {
  private store: Store = {};
  private subscribeList: any[] = [];

  private getStore = () => this.store;

  private dispatch = (action: ReducerAction) => {
    switch (action.type) {
      case 'updateValue': {
        const { namePath, value } = action;
        this.store = setValue(this.store, namePath, value);
        this.subscribeList.forEach((callback: SubscribeCallback) => {
          callback(this.store, namePath);
        });
        console.log('update!!!', this.store);
        return;
      }
    }
  };

  private subscribe = (callback: SubscribeCallback) => {
    this.subscribeList.push(callback);
  };

  private unsubscribe = (callback: UnsubscribeCallback) => {
    this.subscribeList = this.subscribeList.filter((func) => func !== callback);
  };

  public getForm = (): StateFormContextProps => ({
    getStore: this.getStore,
    dispatch: this.dispatch,
    subscribe: this.subscribe,
    unsubscribe: this.unsubscribe,
  });
}

export default function useForm(form: FormStore): StateFormContextProps {
  const ref = React.useRef() as any;

  if (!ref.current) {
    ref.current = form || new FormStore().getForm();
  }

  return ref.current;
}
