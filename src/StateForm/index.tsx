import * as React from "react";
import { Store } from "./interface";
import StateFormContext, { HOOK_MARK, StateFormContextProps } from "./StateFormContext";
import StateFormField from "./StateFormField";
import useForm from "./useForm";
import { Omit } from "./utils/typeUtil";

type BaseFormProps = Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit">;

export interface StateFormProps extends BaseFormProps {
  initialValues: Store;
  form?: StateFormContextProps;
  children?: (() => JSX.Element | React.ReactNode) | React.ReactNode;
  onFinish?: (values: any) => {};
}

interface StateForm extends React.FunctionComponent<StateFormProps> {
  Field: typeof StateFormField;
  useForm: typeof useForm;
}

const StateForm: StateForm = ({
  initialValues,
  form,
  children,
  onFinish,
  ...restProps
}: StateFormProps) => {
  // We customize handle event since Context will makes all the consumer re-render:
  // https://reactjs.org/docs/context.html#contextprovider
  const [formInstance] = useForm(form);
  const { useSubscribe, setInitialValues } = formInstance.getInternalHooks(HOOK_MARK);

  // Initial store value when first mount
  const mountRef = React.useRef(null);
  if (!mountRef.current) {
    mountRef.current = true;
    setInitialValues(initialValues);
  }

  // Prepare children by `children` type
  let childrenNode = children;
  const childrenRenderProps = typeof children === "function";
  if (childrenRenderProps) {
    const values = formInstance.getFieldsValue();
    childrenNode = (children as any)(values, formInstance);
  }
  // Not use subscribe when using render props
  useSubscribe(!childrenRenderProps);

  return (
    <form
      {...restProps}
      onSubmit={event => {
        event.preventDefault();
        event.stopPropagation();

        formInstance
          .validateFields()
          .then(values => {
            if (onFinish) {
              onFinish(values);
            }
          })
          // Do nothing about submit catch
          .catch(e => e);
      }}
    >
      <StateFormContext.Provider value={formInstance}>{childrenNode}</StateFormContext.Provider>
    </form>
  );
};

StateForm.Field = StateFormField;
StateForm.useForm = useForm;

export default StateForm;
