import { StateFormContextProps } from './StateFormContext';

export type InternalNamePath = Array<string | number>;
export type NamePath = string | number | InternalNamePath;

export interface Store {
  [name: string]: any;
}

export interface Meta {
  errors: string[];
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
    callback: (error: any) => void,
    context: StateFormContextProps, // TODO: Maybe not good place to export this?
  ) => void;
  whitespace?: boolean;
  validateTrigger?: string | string[];
}

export interface FieldEntity {
  onStoreChange: (store: any, namePathList: InternalNamePath[] | null, info: NotifyInfo) => void;
  isFieldTouched: () => boolean;
  isFieldValidating: () => boolean;
  validateRules: (options?: ValidateOptions) => Promise<any>;
  props: {
    name?: NamePath;
    rules?: Rule[];
  };
}

export interface FieldError {
  name: InternalNamePath;
  errors: string[];
}

export interface ValidateOptions {
  force?: boolean;
  triggerName?: string;
}

export type ValidateFields = (nameList?: NamePath[], options?: ValidateOptions) => Promise<any>;

export interface NotifyInfo {
  type: 'valueUpdate' | 'errorUpdate' | 'reset';
}
