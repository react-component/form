import * as React from 'react';
import { FieldEntity, StateFormContextProps, Store } from './StateFormContext';
import { getNameList, setValue } from './utils/valueUtil';

interface UpdateAction {
  type: 'updateValue';
  namePath: Array<string | number>;
  value: any;
}

interface ValidateEntity {
  namePath: Array<string | number>;
  validating: boolean;
  errors: any[];
}

export type ReducerAction = UpdateAction;

export class FormStore {
  private store: Store = {};
  private fieldEntities: FieldEntity[] = [];
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
    registerField: this.registerField,
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
      this.fieldEntities.forEach(({ onStoreChange }) => {
        onStoreChange(this.store, namePath);
      });
    } else {
      this.forceRootUpdate();
    }
  };

  private updateValues = (store: any) => {
    this.store = store;

    if (this.subscribable) {
      this.fieldEntities.forEach(({ onStoreChange }) => {
        onStoreChange(this.store, null);
      });
    } else {
      this.forceRootUpdate();
    }
  };

  // ========================= Subscription =========================

  private registerField = (entity: FieldEntity) => {
    this.fieldEntities.push(entity);

    return () => {
      this.fieldEntities = this.fieldEntities.filter((item) => item !== entity);
    };
  };
}

interface SubscribeEntity {
  hooks: {};
}

function useForm(form?: StateFormContextProps): StateFormContextProps {
  const ref = React.useRef() as any;
  const [ , forceUpdate ] = React.useState();

  if (!ref.current) {
    ref.current =
      form ||
      new FormStore(() => {
        forceUpdate({});
      }).getForm();
  }

  return ref.current;
}

export default useForm;
