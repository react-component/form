import * as React from 'react';
import StateFormContext from './StateFormContext';
import StateFormField from './StateFormField';
import { setValue } from './util';

const { useReducer } = React;

export interface StateFormProps {
  children?: () => JSX.Element | React.ReactNode;
}

interface StateForm extends React.FunctionComponent<StateFormProps> {
  Field: typeof StateFormField;
}

interface ReducerState {
  [name: string]: any;
}

export interface ReducerAction {
  type: 'updateValue';
  namePath: Array<string | number>;
  value: any;
}

function reducer(store: ReducerState, action: ReducerAction): ReducerState {
  switch (action.type) {
    case 'updateValue':
      return setValue(store, action.namePath, action.value);
  }

  return store;
}

const StateForm: StateForm = ({ children }: StateFormProps) => {
  const [ store, dispatch ] = useReducer<React.Reducer<ReducerState, ReducerAction>>(reducer, {});

  const childrenNode = children ? children() : null;

  return <StateFormContext.Provider value={{ store, dispatch }}>{childrenNode}</StateFormContext.Provider>;
};

StateForm.Field = StateFormField;

export default StateForm;
