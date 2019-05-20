import AsyncValidator from 'async-validator';
import { ValidateOptions } from '../StateFormContext';
import { Rule } from '../StateFormField';

/**
 * We use `async-validator` to validate the value.
 * But only check one value in a time to avoid namePath validate issue.
 */
export function validateRules(value: any, rules: Rule[], options: ValidateOptions) {
  const validator = new AsyncValidator({
    value: rules,
  });

  const promise = new Promise((resolve, reject) => {
    validator.validate({ value }, options || {}, (errors: any) => {
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
