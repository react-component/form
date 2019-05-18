import * as React from 'react';
import { ReducerAction } from './index';

const { createContext } = React;

export interface StateFormContextProps {
  store: any;
  dispatch: (action: ReducerAction) => void;
}

const Context = createContext<StateFormContextProps>({
  store: {},
  dispatch() {
    throw new Error('StateForm is not defined.');
  },
});

export default Context;