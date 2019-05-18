import * as React from 'react';
import StateFormContext, { StateFormContextProps } from './StateFormContext';
import StateFormField from './StateFormField';
import useForm from './useForm';

export interface StateFormProps {
  form?: StateFormContextProps;
  children?: (() => JSX.Element | React.ReactNode) | React.ReactNode;
}

interface StateForm extends React.FunctionComponent<StateFormProps> {
  Field: typeof StateFormField;
  useForm: typeof useForm;
}

const StateForm: StateForm = ({ form, children }: StateFormProps) => {
  // We customize handle event since Context will makes all the consumer re-render:
  // https://reactjs.org/docs/context.html#contextprovider
  const formInstance = useForm(form);

  let childrenNode = children;
  const childrenRenderProps = typeof children === 'function';
  if (childrenRenderProps) {
    const store = formInstance.getStore();
    childrenNode = (children as any)(store);
  }

  // Not use subscribe when using render props
  formInstance.useSubscribe(!childrenRenderProps);

  return (
    <StateFormContext.Provider value={formInstance}>
      {childrenNode}
    </StateFormContext.Provider>
  );
};

StateForm.Field = StateFormField;
StateForm.useForm = useForm;

export default StateForm;
