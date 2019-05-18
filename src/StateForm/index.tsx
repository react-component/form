import * as React from 'react';
import StateFormContext from './StateFormContext';
import StateFormField from './StateFormField';
import useForm, { FormStore } from './useForm';

export interface StateFormProps {
  form?: FormStore;
  children?: () => JSX.Element | React.ReactNode;
}

interface StateForm extends React.FunctionComponent<StateFormProps> {
  Field: typeof StateFormField;
}

const StateForm: StateForm = ({ form, children }: StateFormProps) => {
  // We customize handle event since Context will makes all the consumer re-render:
  // https://reactjs.org/docs/context.html#contextprovider
  const formInstance = useForm(form);
  const childrenNode = children ? children() : null;

  return (
    <StateFormContext.Provider value={formInstance}>
      {childrenNode}
    </StateFormContext.Provider>
  );
};

StateForm.Field = StateFormField;

export default StateForm;
