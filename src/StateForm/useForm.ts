import * as React from 'react';
import {
  Callbacks,
  FieldData,
  FieldEntity,
  FieldError,
  InternalNamePath,
  NamePath,
  NotifyInfo,
  Store,
  ValidateFields,
  ValidateOptions,
} from './interface';
import { FormInstance, HOOK_MARK, InternalHooks } from './StateFormContext';
import { allPromiseFinish } from './utils/asyncUtil';
import NameMap from './utils/NameMap';
import { ErrorCache } from './utils/validateUtil';
import {
  cloneByNamePathList,
  containsNamePath,
  getNamePath,
  getValue,
  matchNamePath,
  setValue,
  setValues,
} from './utils/valueUtil';

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
  private initialValues: Store = {};
  private callbacks: Callbacks = {};

  constructor(forceRootUpdate: () => void) {
    this.forceRootUpdate = forceRootUpdate;
  }

  public getForm = (): FormInstance => ({
    getFieldValue: this.getFieldValue,
    getFieldsValue: this.getFieldsValue,
    getFieldError: this.getFieldError,
    getFieldsError: this.getFieldsError,
    isFieldsTouched: this.isFieldsTouched,
    isFieldTouched: this.isFieldTouched,
    isFieldValidating: this.isFieldValidating,
    resetFields: this.resetFields,
    setFields: this.setFields,
    setFieldsValue: this.setFieldsValue,
    validateFields: this.validateFields,

    getInternalHooks: this.getInternalHooks,
  });

  // ======================== Internal Hooks ========================
  private getInternalHooks = (key: string): InternalHooks | null => {
    if (key === HOOK_MARK) {
      return {
        dispatch: this.dispatch,
        registerField: this.registerField,
        useSubscribe: this.useSubscribe,
        setInitialValues: this.setInitialValues,
        setCallbacks: this.setCallbacks,
        getFields: this.getFields,
      };
    }

    console.error('`getInternalHooks` is internal usage. Should not call directly.');
    return null;
  };

  private useSubscribe = (subscribable: boolean) => {
    this.subscribable = subscribable;
  };

  private setInitialValues = (initialValues: Store) => {
    this.initialValues = initialValues || {};
    this.store = setValues({}, initialValues, this.store);
  };

  private getInitialValue = (namePath: InternalNamePath) => {
    return getValue(this.initialValues, namePath);
  };

  private setCallbacks = (callbacks: Callbacks) => {
    this.callbacks = callbacks;
  };

  // ============================ Fields ============================
  /**
   * Get registered field entities.
   * @param pure Only return field which has a `name`. Default: false
   */
  private getFieldEntities = (pure: boolean = false) => {
    if (!pure) {
      return this.fieldEntities;
    }

    return this.fieldEntities.filter(field => field.getNamePath().length);
  };

  private getFieldsValue = (nameList?: NamePath[]) => {
    if (!nameList) {
      return this.store;
    }

    return nameList.map((name: NamePath) => {
      return this.getFieldValue(name);
    });
  };

  private getFieldValue = (name: NamePath) => {
    const namePath: InternalNamePath = getNamePath(name);
    return getValue(this.store, namePath);
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

    return this.getFieldEntities().some((field: FieldEntity) => {
      // Not provide `nameList` will check all the fields
      if (!namePathList) {
        return field.isFieldTouched();
      }

      const fieldNamePath = field.getNamePath();
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
    const field = this.getFieldEntities().find(testField => {
      const fieldNamePath = testField.getNamePath();
      return matchNamePath(fieldNamePath, namePath);
    });

    return field && field.isFieldValidating();
  };

  private resetFields = (nameList?: NamePath[]) => {
    const prevStore = this.store;
    if (!nameList) {
      this.store = setValues({}, this.initialValues);
      this.errorCache = new ErrorCache();
      this.notifyObservers(prevStore, null, { type: 'reset' });
      return;
    }

    // Reset by `nameList`
    const namePathList: InternalNamePath[] = nameList.map(getNamePath);
    namePathList.forEach(namePath => {
      this.errorCache.resetField(namePath);
      const initialValue = this.getInitialValue(namePath);
      this.store = setValue(this.store, namePath, initialValue);
    });
    this.notifyObservers(prevStore, namePathList, { type: 'reset' });
  };

  private setFields = (fields: FieldData[]) => {
    const prevStore = this.store;

    fields.forEach((fieldData: FieldData) => {
      const { name, errors, ...data } = fieldData;
      const namePath = getNamePath(name);

      // Value
      if ('value' in data) {
        this.store = setValue(this.store, namePath, data.value);
      }

      // Error
      if (errors) {
        this.errorCache.updateError([{ name: namePath, errors }]);
      }

      this.notifyObservers(prevStore, [namePath], { type: 'setField', data: fieldData });
    });
  };

  private getFields = (namePathList?: InternalNamePath[]): FieldData[] => {
    let fields: FieldData[];

    if (!namePathList) {
      this.getFieldEntities(true).map(
        (field: FieldEntity): FieldData => {
          const namePath = field.getNamePath();
          const meta = field.getMeta();
          return {
            ...meta,
            name: namePath,
            value: this.getFieldValue(namePath),
          };
        },
      );
    } else {
      const cache: NameMap<FieldEntity> = new NameMap();
      this.getFieldEntities().forEach(field => {
        const namePath = field.getNamePath();
        cache.set(namePath, field);
      });

      fields = namePathList.map(namePath => {
        const field = cache.get(namePath);
        return {
          name: namePath,
          ...field.getMeta(),
          value: this.getFieldValue(namePath),
        };
      });
    }

    return fields;
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
      case 'updateValue': {
        const { namePath, value } = action;
        this.updateValue(namePath, value);
      }
    }
  };

  private notifyObservers = (
    prevStore: any,
    namePathList: InternalNamePath[] | null,
    info: NotifyInfo,
  ) => {
    if (this.subscribable) {
      this.getFieldEntities().forEach(({ onStoreChange }) => {
        onStoreChange(prevStore, namePathList, info);
      });
    } else {
      this.forceRootUpdate();
    }
  };

  private updateValue = (name: NamePath, value: any) => {
    const namePath = getNamePath(name);
    const prevStore = this.store;
    this.store = setValue(this.store, namePath, value);

    this.notifyObservers(prevStore, [namePath], { type: 'valueUpdate', source: 'internal' });

    // Notify dependencies children with parent update
    const childrenFields = this.getDependencyChildrenFields(namePath);
    this.validateFields(childrenFields);

    // trigger callback function
    const { onValuesChange } = this.callbacks;

    if (onValuesChange) {
      const changedValues = cloneByNamePathList(this.store, [namePath]);
      onValuesChange(changedValues, this.store);
    }

    this.triggerOnFieldsChange([namePath]);
  };

  // Let all child Field get update.
  private setFieldsValue = (store: any) => {
    const prevStore = this.store;

    if (store) {
      this.store = setValues(this.store, store);
    }

    this.notifyObservers(prevStore, null, { type: 'valueUpdate' });
  };

  private getDependencyChildrenFields = (rootNamePath: InternalNamePath): InternalNamePath[] => {
    const children: Set<FieldEntity> = new Set();
    const childrenFields: InternalNamePath[] = [];

    const dependencies2fields: NameMap<Set<FieldEntity>> = new NameMap();

    /**
     * Generate maps
     * Can use cache to save perf if user report performance issue with this
     */
    this.getFieldEntities().forEach(field => {
      const { dependencies } = field.props;
      (dependencies || []).forEach(dependency => {
        const dependencyNamePath = getNamePath(dependency);
        dependencies2fields.update(dependencyNamePath, (fields = new Set()) => {
          fields.add(field);
          return fields;
        });
      });
    });

    const fillChildren = (namePath: InternalNamePath) => {
      const fields = dependencies2fields.get(namePath) || new Set();
      fields.forEach(field => {
        if (!children.has(field)) {
          children.add(field);

          if (field.isFieldTouched()) {
            const fieldNamePath = field.getNamePath();
            childrenFields.push(fieldNamePath);
            fillChildren(fieldNamePath);
          }
        }
      });
    };

    fillChildren(rootNamePath);

    return childrenFields;
  };

  private triggerOnFieldsChange = (namePathList: InternalNamePath[]) => {
    const { onFieldsChange } = this.callbacks;

    if (onFieldsChange) {
      const fields = this.getFields();
      const changedFields = fields.filter(({ name: fieldName }) => {
        return containsNamePath(namePathList, fieldName as any);
      });
      onFieldsChange(changedFields, fields);
    }
  };

  // =========================== Validate ===========================
  private validateFields: ValidateFields = (nameList?: NamePath[], options?: ValidateOptions) => {
    const namePathList: InternalNamePath[] | undefined = nameList && nameList.map(getNamePath);

    // Collect result in promise list
    const promiseList: Array<Promise<any>> = [];

    this.getFieldEntities().forEach((field: FieldEntity) => {
      if (!field.props.rules || !field.props.rules.length) {
        return;
      }

      const fieldNamePath = field.getNamePath();

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
      .then((results: FieldError[]) => {
        const resultNamePathList: InternalNamePath[] = results.map(({ name }) => name);

        this.errorCache.updateError(results);
        this.notifyObservers(this.store, resultNamePathList, { type: 'errorUpdate' });
        this.triggerOnFieldsChange(resultNamePathList);
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

function useForm(form?: FormInstance): [FormInstance] {
  const formRef = React.useRef() as any;
  const [, forceUpdate] = React.useState();

  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      let formStore: FormStore;

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
