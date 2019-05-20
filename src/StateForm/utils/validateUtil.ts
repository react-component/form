import AsyncValidator from 'async-validator';
import { ValidateOptions } from '../StateFormContext';
import { InternalNamePath, Rule } from '../StateFormField';

/**
 * We use `async-validator` to validate the value.
 * But only check one value in a time to avoid namePath validate issue.
 */
export function validateRules(namePath: InternalNamePath, value: any, rules: Rule[], options: ValidateOptions) {
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
