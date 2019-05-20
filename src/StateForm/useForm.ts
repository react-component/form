import * as React from 'react';
import {
  FieldEntity,
  FieldError,
  StateFormContextProps,
  Store,
  ValidateFields,
  ValidateOptions,
} from './StateFormContext';
import { InternalNamePath, NamePath } from './StateFormField';
import { allPromiseFinish } from './utils/asyncUtil';
import { validateRules } from './utils/validateUtil';
import { getNamePath, getValue, isSimilar, matchNamePath, setValue } from './utils/valueUtil';

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
  private cacheErrors: FieldError[] = [];

  constructor(forceRootUpdate: () => void) {
    this.forceRootUpdate = forceRootUpdate;
  }

  public getForm = (): StateFormContextProps => ({
    getFieldsValue: this.getFieldsValue,
    getFieldError: this.getFieldError,
    getFieldsError: this.getFieldsError,

    useSubscribe: this.useSubscribe,
    updateValue: this.updateValue,
    updateValues: this.updateValues,
    dispatch: this.dispatch,
    registerField: this.registerField,
    validateFields: this.validateFields,
  });

  private getFieldsValue = () => this.store;

  private useSubscribe = (subscribable: boolean) => {
    this.subscribable = subscribable;
  };

  // ========================= Subscription =========================
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

  private updateValue = (name: NamePath, value: any) => {
    const namePath = getNamePath(name);
    this.store = setValue(this.store, namePath, value);

    if (this.subscribable) {
      this.fieldEntities.forEach(({ onStoreChange }) => {
        onStoreChange(this.store, namePath);
      });
    } else {
      this.forceRootUpdate();
    }
  };

  // Let all child Field get update.
  private updateValues = (store?: any) => {
    if (store) {
      this.store = store;
    }

    if (this.subscribable) {
      this.fieldEntities.forEach(({ onStoreChange }) => {
        onStoreChange(this.store, null);
      });
    } else {
      this.forceRootUpdate();
    }
  };

  // =========================== Validate ===========================
  private validateFields: ValidateFields = (nameList: NamePath[], options: ValidateOptions) => {
    const namePathList: InternalNamePath[] | undefined = nameList && nameList.map(getNamePath);

    // Collect result in promise list
    const promiseList: Array<Promise<any>> = [];

    this.fieldEntities.forEach((field: FieldEntity) => {
      if (!field.props.rules || !field.props.rules.length) {
        return;
      }

      const fieldNamePath = getNamePath(field.props.name);

      if (
        !namePathList ||
        namePathList.some((namePath) => matchNamePath(fieldNamePath, namePath))
      ) {
        const promise = validateRules(
          getValue(this.store, fieldNamePath),
          field.props.rules,
          options,
        );

        // Wrap promise with field
        promiseList.push(
          promise.catch((errors) =>
            Promise.reject({
              name: fieldNamePath,
              errors,
            }),
          ),
        );
      }
    });

    const prevCacheError = this.cacheErrors;

    const summaryPromise = allPromiseFinish(promiseList)
      .then(() => {
        this.cacheErrors = [];
        return this.store;
      })
      .catch((results) => {
        const errorList = results.filter((result: any) => result);
        this.cacheErrors = errorList;

        return Promise.reject(errorList);
      });

    // Internal catch error to avoid console error log.
    summaryPromise.catch((e) => e).then(() => {
      // Force update
      if (!isSimilar(prevCacheError, this.cacheErrors)) {
        this.updateValues();
      }
    });

    return summaryPromise;
  };

  // TODO: check if fields validated
  private getFieldsError = (nameList?: NamePath[]) => {
    if (!nameList) {
      return this.cacheErrors;
    }

    const namePathList = nameList.map(getNamePath);
    return this.cacheErrors.filter(({ name }) => {
      const errorNamePath = getNamePath(name);
      return namePathList.some((namePath) => matchNamePath(namePath, errorNamePath));
    });
  };

  private getFieldError = (name: NamePath): string[] => {
    const namePath = getNamePath(name);
    const fieldError = this.getFieldsError([ namePath ])[0];
    if (fieldError) {
      return fieldError.errors;
    }
    return [];
  };
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
