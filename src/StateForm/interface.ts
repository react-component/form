import { FormInstance } from './StateFormContext';

export type InternalNamePath = Array<string | number>;
export type NamePath = string | number | InternalNamePath;

export interface Store {
  [name: string]: any;
}

export interface Meta {
  touched: boolean;
  validating: boolean;
  errors: string[];
}

/**
 * Used by `setFields` config
 */
export interface FieldData extends Partial<Meta> {
  name: NamePath;
  value?: any;
}

export interface Rule {
  enum?: any[];
  len?: number;
  max?: number;
  message?: any;
  min?: number;
  pattern?: RegExp;
  required?: boolean;
  transform?: (value: any) => any;
  type?: string;
  validator?: (
    rule: Rule,
    value: any,
    callback: (error?: string) => void,
    context: FormInstance, // TODO: Maybe not good place to export this?
  ) => void;
  whitespace?: boolean;

  /** Customize rule level `validateTrigger`. Must be subset of Field `validateTrigger` */
  validateTrigger?: string | string[];
}

export interface FieldEntity {
  onStoreChange: (store: any, namePathList: InternalNamePath[] | null, info: NotifyInfo) => void;
  isFieldTouched: () => boolean;
  isFieldValidating: () => boolean;
  validateRules: (options?: ValidateOptions) => Promise<any>;
  getMeta: () => Meta;
  props: {
    name?: NamePath;
    rules?: Rule[];
    dependencies?: NamePath[];
  };
}

export interface FieldError {
  name: InternalNamePath;
  errors: string[];
}

export interface ValidateOptions {
  triggerName?: string;
}

export type ValidateFields = (nameList?: NamePath[], options?: ValidateOptions) => Promise<any>;

export type NotifyInfo =
  | {
      type: 'valueUpdate' | 'errorUpdate' | 'reset';
      source?: 'internal' | 'external';
    }
  | {
      type: 'setField';
      data: FieldData;
    };

export interface Callbacks {
  onValuesChange?: (changedValues: Store, values: Store) => void;
  onFieldsChange?: (changedFields: FieldData[], allFields: FieldData[]) => void;
}
