import AsyncValidator from 'async-validator';
import { FieldError, ValidateOptions } from '../StateFormContext';
import { InternalNamePath, Rule } from '../StateFormField';
import { getNamePath, isSimilar, matchNamePath } from './valueUtil';

/**
 * We use `async-validator` to validate the value.
 * But only check one value in a time to avoid namePath validate issue.
 */
export function validateRules(
  namePath: InternalNamePath,
  value: any,
  rules: Rule[],
  options: ValidateOptions,
) {
  const name = namePath.join('.');
  const validator = new AsyncValidator({
    [name]: rules,
  });

  const promise = new Promise((resolve, reject) => {
    validator.validate({ [name]: value }, options || {}, (errors: any) => {
      if (!errors) {
        resolve();
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
  promise.catch((e) => e);

  return promise;
}

function includesError(source: FieldError[], target: FieldError[]) {
  const targetFieldErrors = target.filter(({ errors }) => errors.length);
  return targetFieldErrors.every(({ name, errors }) => {
    if (!errors.length) {
      return true;
    }

    const sourceFieldError = source.find(fe => matchNamePath(fe.name, name));
    return sourceFieldError && isSimilar(sourceFieldError.errors, errors);
  });
}

export class ErrorCache {
  private cache: FieldError[] = [];

  public updateError = (errors: FieldError[]) => {
    this.cache = this.cache.filter(({ name }) =>
      errors.every((fieldError) => !matchNamePath(name, fieldError.name)),
    );

    this.cache = [ ...this.cache, ...errors ];
  };

  public getFieldsError = (namePathList?: InternalNamePath[]) => {
    const errors = !namePathList
      ? this.cache
      : this.cache.filter(({ name }) => {
          const errorNamePath = getNamePath(name);
          return namePathList.some((namePath) => matchNamePath(namePath, errorNamePath));
        });

    return errors;
  };

  public isErrorsChange = (errors: FieldError[]) => {
    return !includesError(this.cache, errors) || !includesError(errors, this.cache);
  };
}
