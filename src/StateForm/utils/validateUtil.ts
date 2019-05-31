import AsyncValidator from 'async-validator';
import { FieldError, InternalNamePath, Rule, ValidateOptions } from '../interface';
import { FormInstance } from '../StateFormContext';
import NameMap from './NameMap';
import { containsNamePath, getNamePath, isSimilar, matchNamePath } from './valueUtil';

/**
 * We use `async-validator` to validate the value.
 * But only check one value in a time to avoid namePath validate issue.
 */
export function validateRules(
  namePath: InternalNamePath,
  value: any,
  rules: Rule[],
  options: ValidateOptions,
  context: FormInstance,
) {
  const name = namePath.join('.');

  // Fill rule with context
  const filledRules: Rule[] = rules.map(currentRule => {
    if (!currentRule.validator) {
      return currentRule;
    }
    return {
      ...currentRule,
      validator(rule: any, val: any, callback: any) {
        currentRule.validator(rule, val, callback, context);
      },
    };
  });

  const validator = new AsyncValidator({
    [name]: filledRules,
  });

  const promise = new Promise((resolve, reject) => {
    validator.validate({ [name]: value }, options || {}, (errors: any) => {
      if (!errors) {
        resolve();
        return;
      }
      reject(
        errors.map((e: any) => {
          if (e && e.message) {
            return e.message;
          }
          return e;
        }),
      );
    });
  });

  // Internal catch error to avoid console error log.
  promise.catch(e => e);

  return promise;
}

/**
 * Convert `NameMap<string[]>` into `[{ name, errors }]` format.
 */
function nameMapToErrorList(nameMap: NameMap<string[]>): FieldError[] {
  return nameMap.map(({ key, value }) => ({
    name: key,
    errors: value,
  }));
}

export class ErrorCache {
  private cache: NameMap<string[]> = new NameMap();

  public updateError = (fieldErrors: FieldError[]) => {
    this.cache = this.cache.clone();
    fieldErrors.forEach(({ name, errors }) => {
      this.cache.set(name, errors);
    });
  };

  public getFieldsError = (namePathList?: InternalNamePath[]): FieldError[] => {
    const fullErrors: FieldError[] = nameMapToErrorList(this.cache);

    return !namePathList
      ? fullErrors
      : fullErrors.filter(({ name }) => {
          const errorNamePath = getNamePath(name);
          return containsNamePath(namePathList, errorNamePath);
        });
  };

  public resetField = (namePath: InternalNamePath) => {
    this.cache.delete(namePath);
  };
}
