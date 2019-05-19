import React from 'react';
import StateForm from '../src/StateForm';

const { Field } = StateForm;

const list = new Array(1111).fill();

const Input = (props) => {
  return <input {...props} />;
};

const CustomizeInput = (props) => (
  <div style={{ padding: 10 }}>
    <Input style={{ outline: 'none' }} {...props} />
  </div>
);

export default class Demo extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <h3>Render Props ({list.length} inputs)</h3>
        <StateForm>
          {(store) => {
            return (
              <React.Fragment>
                {JSON.stringify(store, null, 2)}
                <Field name="field_1">
                  <CustomizeInput placeholder="Field 1" />
                </Field>
                <Field name="field_1">
                  <CustomizeInput placeholder="Shadow of Field 1" />
                </Field>
                <Field name="field_2">
                  <CustomizeInput placeholder="Field 2" />
                </Field>

                <h4>Show additional field when field 1 is `222`</h4>
                {store.field_1 === '222' && (
                  <Field name="secret">
                    <CustomizeInput placeholder="Field Secret!" />
                  </Field>
                )}

                {list.map((_, index) => (
                  <Field name={`list_field_${index}`}>
                    <CustomizeInput placeholder={`list_field_${index}`} />
                  </Field>
                ))}
              </React.Fragment>
            );
          }}
        </StateForm>
      </div>
    );
  }
}
