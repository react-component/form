import * as React from 'react';
import StateForm, { FormInstance } from '../../src/StateForm';

const { Field } = StateForm;

const Error = ({ children }) => (
  <ul style={{ color: 'red' }}>
    {children.map(error => (
      <li>{error}</li>
    ))}
  </ul>
);

const FieldState = ({ touched, validating }: { touched: boolean; validating: boolean }) => {
  return (
    <div style={{ color: 'green', position: 'absolute', marginTop: -35, left: 300 }}>
      {touched ? <span>Touched!</span> : null}
      {validating ? <span>Validating!</span> : null}
    </div>
  );
};

interface LabelFieldProps {
  children?: any;
  [name: string]: any;
}

const LabelField: React.FunctionComponent<LabelFieldProps> = ({
  name,
  label,
  children,
  ...restProps
}) => {
  return (
    <Field name={name} {...restProps}>
      {(control, meta) => {
        const childNode =
          typeof children === 'function'
            ? children(control, meta)
            : React.cloneElement(children, { ...control });

        return (
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <label style={{ flex: 'none', width: 100 }}>{label || name}</label>

              {childNode}
            </div>

            <FieldState {...meta} />
            <Error>{meta.errors}</Error>
          </div>
        );
      }}
    </Field>
  );
};

export default LabelField;
