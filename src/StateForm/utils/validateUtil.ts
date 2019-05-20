import AsyncValidator from 'async-validator';

/**
 * We use `async-validator` to validate the value.
 * But only check one value in a time to avoid namePath validate issue.
 */
export function validateRules(value: any, rules: any[]) {
  const options = {};
  const validator = new AsyncValidator({
    value: rules,
  });
  validator.validate({ value }, options, (errors) => {
    console.error('Error:', errors);
  });
}
