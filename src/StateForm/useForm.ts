import * as React from "react";
import {
  FieldEntity,
  InternalNamePath,
  NamePath,
  Store,
  ValidateFields,
  ValidateOptions,
} from "./interface";
import { HOOK_MARK, InternalHooks, StateFormContextProps } from "./StateFormContext";
import { allPromiseFinish } from "./utils/asyncUtil";
import { ErrorCache } from "./utils/validateUtil";
import {
  containsNamePath,
  getNamePath,
  getValue,
  matchNamePath,
  setValue,
  setValues,
} from "./utils/valueUtil";

interface UpdateAction {
  type: "updateValue";
  namePath: InternalNamePath;
  value: any;
}

export type ReducerAction = UpdateAction;

export class FormStore {
  private forceRootUpdate: () => void;
  private subscribable: boolean = true;
  private store: Store = {};
  private fieldEntities: FieldEntity[] = [];
  private errorCache: ErrorCache = new ErrorCache();
  private initialValues: Store = {};

  constructor(forceRootUpdate: () => void) {
    this.forceRootUpdate = forceRootUpdate;
  }

  public getForm = (): StateFormContextProps => ({
    getFieldValue: this.getFieldValue,
    getFieldsValue: this.getFieldsValue,
    getFieldError: this.getFieldError,
    getFieldsError: this.getFieldsError,
    isFieldsTouched: this.isFieldsTouched,
    isFieldTouched: this.isFieldTouched,
    isFieldValidating: this.isFieldValidating,
    resetFields: this.resetFields,

    setFieldsValue: this.setFieldsValue,
    dispatch: this.dispatch,
    registerField: this.registerField,
    validateFields: this.validateFields,

    getInternalHooks: this.getInternalHooks,
  });

  // ======================== Internal Hooks ========================
  private getInternalHooks = (key: string): InternalHooks | null => {
    if (key === HOOK_MARK) {
      return {
        useSubscribe: this.useSubscribe,
        setInitialValues: this.setInitialValues,
      };
    }

    console.error("`getInternalHooks` is internal usage. Should not call directly.");
    return null;
  };

  private useSubscribe = (subscribable: boolean) => {
    this.subscribable = subscribable;
  };

  private setInitialValues = (initialValues: Store) => {
    this.initialValues = initialValues || {};
    this.store = setValues({}, initialValues, this.store);
  };

  // ============================ Fields ============================
  private getFieldsValue = (nameList?: NamePath[]) => {
    if (!nameList) {
      return this.store;
    }

    return nameList.map((name: NamePath) => {
      const namePath: InternalNamePath = getNamePath(name);
      return getValue(this.store, namePath);
    });
  };

  private getFieldValue = (name: NamePath) => {
    return this.getFieldsValue([name])[0];
  };

  private getFieldsError = (nameList?: NamePath[]) => {
    if (!nameList) {
      return this.errorCache.getFieldsError();
    }

    const namePathList = nameList.map(getNamePath);
    return this.errorCache.getFieldsError(namePathList);
  };

  private getFieldError = (name: NamePath): string[] => {
    const namePath = getNamePath(name);
    const fieldError = this.getFieldsError([namePath])[0];
    if (fieldError) {
      return fieldError.errors;
    }
    return [];
  };

  private isFieldsTouched = (nameList?: NamePath[]) => {
    let namePathList: InternalNamePath[] | null = null;
    if (nameList) {
      namePathList = nameList.map(getNamePath);
    }

    return this.fieldEntities.some((field: FieldEntity) => {
      // Not provide `nameList` will check all the fields
      if (!namePathList) {
        return field.isFieldTouched();
      }

      const fieldNamePath = getNamePath(field.props.name);
      if (containsNamePath(namePathList, fieldNamePath)) {
        return field.isFieldTouched();
      }
      return false;
    });
  };

  private isFieldTouched = (name: NamePath) => {
    return this.isFieldsTouched([name]);
  };

  private isFieldValidating = (name: NamePath) => {
    const namePath: InternalNamePath = getNamePath(name);
    const field = this.fieldEntities.find(testField => {
      const fieldNamePath = getNamePath(testField.props.name);
      return matchNamePath(fieldNamePath, namePath);
    });

    return field && field.isFieldValidating();
  };

  private resetFields = (nameList?: NamePath[]) => {
    if (!nameList) {
      const prevStore = this.store;
      this.store = setValues(this.store, this.initialValues);
      this.notifyObservers(prevStore, null);
    }
  };

  // =========================== Observer ===========================
  private registerField = (entity: FieldEntity) => {
    this.fieldEntities.push(entity);

    return () => {
      this.fieldEntities = this.fieldEntities.filter(item => item !== entity);
    };
  };

  private dispatch = (action: ReducerAction) => {
    switch (action.type) {
      case "updateValue": {
        const { namePath, value } = action;
        this.updateValue(namePath, value);
      }
    }
  };

  private notifyObservers = (prevStore: any, namePathList: InternalNamePath[] | null) => {
    if (this.subscribable) {
      this.fieldEntities.forEach(({ onStoreChange }) => {
        onStoreChange(prevStore, namePathList);
      });
    } else {
      this.forceRootUpdate();
    }
  };

  private updateValue = (name: NamePath, value: any) => {
    const namePath = getNamePath(name);
    const prevStore = this.store;
    this.store = setValue(this.store, namePath, value);

    this.notifyObservers(prevStore, [namePath]);
  };

  // Let all child Field get update.
  private setFieldsValue = (store: any) => {
    const prevStore = this.store;

    if (store) {
      this.store = setValues(this.store, store);
    }

    this.notifyObservers(prevStore, null);
  };

  // =========================== Validate ===========================
  private validateFields: ValidateFields = (nameList?: NamePath[], options?: ValidateOptions) => {
    const namePathList: InternalNamePath[] | undefined = nameList && nameList.map(getNamePath);

    // Collect result in promise list
    const promiseList: Array<Promise<any>> = [];

    this.fieldEntities.forEach((field: FieldEntity) => {
      if (!field.props.rules || !field.props.rules.length) {
        return;
      }

      const fieldNamePath = getNamePath(field.props.name);

      if (!namePathList || containsNamePath(namePathList, fieldNamePath)) {
        const promise = field.validateRules(options);

        // Wrap promise with field
        promiseList.push(
          promise
            .then(() => ({ name: fieldNamePath, errors: [] }))
            .catch(errors =>
              Promise.reject({
                name: fieldNamePath,
                errors,
              }),
            ),
        );
      }
    });

    const summaryPromise = allPromiseFinish(promiseList);

    // Notify fields with rule that validate has finished and need update
    summaryPromise
      .catch(results => results)
      .then(results => {
        this.errorCache.updateError(results);
        this.notifyObservers(this.store, results.map(({ name }) => name));
      });

    const returnPromise = summaryPromise
      .then(() => this.store)
      .catch((results: any) => {
        const errorList = results.filter((result: any) => result);
        return Promise.reject(errorList);
      });

    // Do not throw in console
    returnPromise.catch(e => e);

    return returnPromise;
  };
}

function useForm(form?: StateFormContextProps): [StateFormContextProps] {
  const formRef = React.useRef() as any;
  const [, forceUpdate] = React.useState();

  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      let formStore;

      // Create a new FormStore if not provided
      const forceReRender = () => {
        forceUpdate({});
      };

      formStore = new FormStore(forceReRender);

      formRef.current = formStore.getForm();
    }
  }

  return [formRef.current];
}

export default useForm;
