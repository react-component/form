import * as React from 'react';
import {
  StateFormContextProps,
  Store,
  SubscribeCallback,
  UnsubscribeCallback,
} from './StateFormContext';
import { setValue } from './util';

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

  constructor(forceRootUpdate) {
    this.forceRootUpdate = forceRootUpdate;
  }

  public getForm = (): StateFormContextProps => ({
    getStore: this.getStore,
    useSubscribe: this.useSubscribe,
    dispatch: this.dispatch,
    subscribe: this.subscribe,
    unsubscribe: this.unsubscribe,
  });

  private getStore = () => this.store;

  private useSubscribe = (subscribable: boolean) => {
    this.subscribable = subscribable;
  };

  private dispatch = (action: ReducerAction) => {
    switch (action.type) {
      case 'updateValue': {
        const { namePath, value } = action;
        this.store = setValue(this.store, namePath, value);

        if (this.subscribable) {
          this.subscribeList.forEach((callback: SubscribeCallback) => {
            callback(this.store, namePath);
          });
        } else {
          this.forceRootUpdate();
        }
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
