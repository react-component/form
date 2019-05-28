import * as React from 'react';
import StateFormContext, { StateFormContextProps } from './StateFormContext';
import StateFormField from './StateFormField';
import useForm from './useForm';
import { Omit } from './utils/typeUtil';

type BaseFormProps = Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'>;

export interface StateFormProps extends BaseFormProps {
  form?: StateFormContextProps;
  children?: (() => JSX.Element | React.ReactNode) | React.ReactNode;
  onSubmit?: (values: any) => {};
}

interface StateForm extends React.FunctionComponent<StateFormProps> {
  Field: typeof StateFormField;
  useForm: typeof useForm;
}

const StateForm: StateForm = ({ form, children, onSubmit, ...restProps }: StateFormProps) => {
  // We customize handle event since Context will makes all the consumer re-render:
  // https://reactjs.org/docs/context.html#contextprovider
  const formInstance = useForm(form);

  let childrenNode = children;
  const childrenRenderProps = typeof children === 'function';
  if (childrenRenderProps) {
    const values = formInstance.getFieldsValue();
    childrenNode = (children as any)(values, formInstance);
  }

  // Not use subscribe when using render props
  formInstance.useSubscribe(!childrenRenderProps);

  return (
    <form
      {...restProps}
      onSubmit={(event) => {
        event.preventDefault();
        formInstance.validateFields().then((values) => {
          if (onSubmit) {
            onSubmit(values);
          }
        });
      }}
    >
      <StateFormContext.Provider value={formInstance}>{childrenNode}</StateFormContext.Provider>
    </form>
  );
};

StateForm.Field = StateFormField;
StateForm.useForm = useForm;

export default StateForm;
