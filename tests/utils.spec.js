import createFormField, { isFormField } from '../src/createFormField';
import { flattenFields } from '../src/utils';

describe('utils.flattenFields', () => {
  it('works', () => {
    const fields = {
      user: {
        name: createFormField({
          value: 'benjycui',
        }),
        age: createFormField({
          value: 18,
        }),
        hobbies: [
          createFormField({
            value: 'Archery',
          }),
          createFormField({
            value: 'Roller Skating',
          }),
        ],
      },
    };

    expect(flattenFields(fields, (_, node) => isFormField(node)))
      .toEqual({
        'user.name': { value: 'benjycui' },
        'user.age': { value: 18 },
        'user.hobbies[0]': { value: 'Archery' },
        'user.hobbies[1]': { value: 'Roller Skating' },
      });
  });

  it('just ignore `undefined` when `undefined` is not a valid leaf node', () => {
    const fields = {
      user: {
        name: undefined,
        age: undefined,
        hobbies: [
          undefined,
          createFormField({
            value: 'Roller Skating',
          }),
        ],
      },
    };

    expect(flattenFields(fields, (_, node) => isFormField(node)))
      .toEqual({
        'user.hobbies[1]': { value: 'Roller Skating' },
      });
  });
});
