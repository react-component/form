import * as React from 'react';
import StateFormContext from './StateFormContext';
import StateFormField from './StateFormField';
import useForm from './useForm';

var StateForm = function StateForm(_ref) {
  var form = _ref.form,
      children = _ref.children;
  // We customize handle event since Context will makes all the consumer re-render:
  // https://reactjs.org/docs/context.html#contextprovider
  var formInstance = useForm(form);
  var childrenNode = children;
  var childrenRenderProps = typeof children === 'function';

  if (childrenRenderProps) {
    var values = formInstance.getFieldsValue();
    childrenNode = children(values, formInstance);
  } // Not use subscribe when using render props


  formInstance.useSubscribe(!childrenRenderProps);
  return React.createElement(StateFormContext.Provider, {
    value: formInstance
  }, childrenNode);
};

StateForm.Field = StateFormField;
StateForm.useForm = useForm;
export default StateForm;