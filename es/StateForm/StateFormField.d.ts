import * as React from 'react';
import { StateFormContextProps } from './StateFormContext';
interface ChildProps {
    value?: any;
    onChange?: (...args: any[]) => void;
    onFocus?: (...args: any[]) => void;
    onBlur?: (...args: any[]) => void;
}
declare type Rule = {
    required: boolean;
    validateTrigger?: string | string[];
} | {
    type: string;
};
interface DiffConfig {
    skipChildProps?: boolean;
}
export interface StateFormFieldProps {
    name: string | number | Array<string | number>;
    children?: React.ReactNode | ((control: ChildProps) => React.ReactNode);
    diffConfig?: DiffConfig;
    rules?: Rule[];
    trigger?: string;
    validateTrigger?: string | string[];
}
export interface StateFormFieldState {
    prevValue: any;
}
declare class StateFormField extends React.Component<StateFormFieldProps, any> {
    static contextType: React.Context<StateFormContextProps>;
    static defaultProps: {
        trigger: string;
        validateTrigger: string;
    };
    private prevValue;
    shouldComponentUpdate(nextProps: StateFormFieldProps): boolean;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    getOnlyChild: (children: string | number | boolean | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactNodeArray | React.ReactPortal | ((control: ChildProps) => React.ReactNode) | null | undefined) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | null;
    getValue: (props?: StateFormFieldProps | undefined) => any;
    getControlled: (childProps?: ChildProps) => {
        value: any;
        onChange?: ((...args: any[]) => void) | undefined;
        onFocus?: ((...args: any[]) => void) | undefined;
        onBlur?: ((...args: any[]) => void) | undefined;
    };
    onStoreChange: (store: any, changedNamePath: (string | number)[] | null) => void;
    render(): {} | null | undefined;
}
export default StateFormField;
