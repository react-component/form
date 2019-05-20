import * as React from 'react';
import { StateFormContextProps } from './StateFormContext';
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
declare const StateForm: StateForm;
export default StateForm;
