import AsyncValidator from 'async-validator';
import { FieldError, StateFormContextProps, ValidateOptions } from '../StateFormContext';
import { InternalNamePath, Rule } from '../StateFormField';
import NameMap from './NameMap';
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
  context: StateFormContextProps,
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

function diffErrors(source: FieldError[], target: FieldError[]) {
  const targetFieldErrors = target.filter(({ errors }) => errors.length);
  const results: FieldError[] = [];

  targetFieldErrors.forEach((targetError) => {
    const { name, errors } = targetError;
    if (!errors.length) {
      return;
    }

    const sourceFieldError = source.find(fe => matchNamePath(fe.name, name));
    if (!sourceFieldError || !isSimilar(sourceFieldError.errors, errors)) {
      results.push(targetError);
    }
  });

  return results;
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
          return namePathList.some((namePath) => matchNamePath(namePath, errorNamePath));
        });
  };

  public getDiffErrors = (errors: FieldError[]): FieldError[] => {
    const originErrors = this.getFieldsError();
    const diffSourceNames = diffErrors(originErrors, errors).map(({ name }) => name);
    const diffTargetNames = diffErrors(errors, originErrors).map(({ name }) => name);

    const errorMap = new NameMap<string[]>();
    [...diffSourceNames, ...diffTargetNames].forEach(namePath => {
      errorMap.set(namePath, this.cache.get(namePath));
    });

    return nameMapToErrorList(errorMap);
  };
}
