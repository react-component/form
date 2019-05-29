import * as React from 'react';
import {
  FieldEntity,
  InternalNamePath,
  NamePath,
  Rule,
  Store,
  ValidateFields,
  ValidateOptions,
} from './interface';
import { StateFormContextProps } from './StateFormContext';
import { allPromiseFinish } from './utils/asyncUtil';
import { toArray } from './utils/typeUtil';
import { ErrorCache, validateRules } from './utils/validateUtil';
import { containsNamePath, getNamePath, getValue, setValue, setValues } from './utils/valueUtil';

interface UpdateAction {
  type: 'updateValue';
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

    useSubscribe: this.useSubscribe,
    setFieldsValue: this.setFieldsValue,
    dispatch: this.dispatch,
    registerField: this.registerField,
    validateFields: this.validateFields,
  });

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
    return this.getFieldsValue([ name ])[0];
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
    const fieldError = this.getFieldsError([ namePath ])[0];
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
    return this.isFieldsTouched([ name ]);
  };

  // ========================= Subscription =========================
  private useSubscribe = (subscribable: boolean) => {
    this.subscribable = subscribable;
  };

  private registerField = (entity: FieldEntity) => {
    this.fieldEntities.push(entity);

    return () => {
      this.fieldEntities = this.fieldEntities.filter((item) => item !== entity);
    };
  };

  // =========================== Observer ===========================
  private dispatch = (action: ReducerAction) => {
    switch (action.type) {
      case 'updateValue': {
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

    this.notifyObservers(prevStore, [ namePath ]);
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
        const { triggerName } = (options || {}) as ValidateOptions;
        let rules: Rule[] = field.props.rules || [];
        if (triggerName) {
          rules = rules.filter(({ validateTrigger }: Rule) => {
            if (!validateTrigger) {
              return true;
            }
            const triggerList = toArray(validateTrigger);
            return triggerList.includes(triggerName);
          });
        }

        const promise = validateRules(
          fieldNamePath,
          getValue(this.store, fieldNamePath),
          rules,
          options,
          this.getForm(),
        );

        // Wrap promise with field
        promiseList.push(
          promise.then(() => ({ name: fieldNamePath, errors: [] })).catch((errors) =>
            Promise.reject({
              name: fieldNamePath,
              errors,
            }),
          ),
        );
      }
    });

    const prevErrors = this.errorCache.getFieldsError();

    const summaryPromise = allPromiseFinish(promiseList)
      .then((results: any) => {
        this.errorCache.updateError(results);
        return this.store;
      })
      .catch((results: any) => {
        this.errorCache.updateError(results);

        const errorList = results.filter((result: any) => result);
        return Promise.reject(errorList);
      });

    // Internal catch error to avoid console error log.
    summaryPromise.catch((e) => e).then(() => {
      // Check if need call field to update
      const diffErrors = this.errorCache.getDiffErrors(prevErrors);
      if (diffErrors.length) {
        this.notifyObservers(this.store, diffErrors.map(({ name }) => name));
      }
    });

    return summaryPromise;
  };
}

function useForm(form?: StateFormContextProps): [StateFormContextProps] {
  const formRef = React.useRef() as any;
  const [ , forceUpdate ] = React.useState();

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

  return [ formRef.current ];
}

export default useForm;
