import * as React from 'react';
import { InternalNamePath, NamePath } from './interface';
import StateFormContext, { FormInstance, HOOK_MARK } from './StateFormContext';
import StateFormField from './StateFormField';
import { getNamePath, setValue } from './utils/valueUtil';

interface StateFormListField {
  name: number;
}

interface StateFormListOperations {
  add: () => void;
  remove: (index: number) => void;
}

interface StateFormListProps {
  name: NamePath;
  children?: (
    fields: StateFormListField[],
    operations: StateFormListOperations,
  ) => JSX.Element | React.ReactNode;
}

interface StateFormListRenderProps {
  value: any[];
  onChange: (value: any[]) => void;
}

const StateFormList: React.FunctionComponent<StateFormListProps> = ({ name, children }) => {
  // User should not pass `children` as other type.
  if (typeof children !== 'function') {
    return null;
  }

  return (
    <StateFormContext.Consumer>
      {(context: FormInstance) => {
        const parentPrefixName = getNamePath(context.prefixName) || [];
        const prefixName: InternalNamePath = [...parentPrefixName, ...getNamePath(name)];

        const shouldUpdate = (prevValue: any, nextValue: any, { source }) => {
          if (source === 'internal') {
            return false;
          }
          return prevValue !== nextValue;
        };

        return (
          <StateFormContext.Provider value={{ ...context, prefixName }}>
            <StateFormField name={[]} shouldUpdate={shouldUpdate}>
              {({ value = [], onChange }: StateFormListRenderProps) => {
                const { getInternalHooks, getFieldValue, setFieldsValue, setFields } = context;

                /**
                 * Always get latest value in case user update fields by `form` api.
                 */
                const operations: StateFormListOperations = {
                  add: () => {
                    const newValue = getFieldValue(prefixName) || [];
                    onChange([...newValue, undefined]);
                  },
                  remove: (index: number) => {
                    const { getFields } = getInternalHooks(HOOK_MARK);
                    const newValue = getFieldValue(prefixName) || [];
                    const namePathList: InternalNamePath[] = newValue.map((__, i) => [
                      ...prefixName,
                      i,
                    ]);

                    const fields = getFields(namePathList)
                      .filter((__, i) => i !== index)
                      .map((fieldData, i) => ({
                        ...fieldData,
                        name: [...prefixName, i],
                      }));

                    const nextValue = [...newValue];
                    nextValue.splice(index, 1);

                    setFieldsValue(setValue({}, prefixName, []));
                    setFields(fields);
                  },
                };

                return children(
                  value.map(
                    (__, index): StateFormListField => ({
                      name: index,
                    }),
                  ),
                  operations,
                );
              }}
            </StateFormField>
          </StateFormContext.Provider>
        );
      }}
    </StateFormContext.Consumer>
  );
};

export default StateFormList;
