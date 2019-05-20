/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import StateForm from '../src/StateForm';
import Input from './components/Input';

const { Field } = StateForm;

const list = new Array(1111).fill();

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
                  <Input placeholder="Field 1" />
                </Field>
                <Field name="field_1">
                  <Input placeholder="Shadow of Field 1" />
                </Field>
                <Field name="field_2">
                  <Input placeholder="Field 2" />
                </Field>

                <h4>Show additional field when field 1 is `222`</h4>
                {store.field_1 === '222' ? (
                  <Field name="secret">
                    <Input placeholder="Field Secret!" />
                  </Field>
                ) : 'Nothing yet...'}

                <h4>Bad performance of render Field</h4>
                <Field name="bad" diffConfig={{ skipChildProps: true }}>
                  {(control) => {
                    console.log('value:', control.value);
                    return (
                      <label>
                        BAD: <Input {...control} />
                      </label>
                    );
                  }}
                </Field>

                {list.map((_, index) => (
                  <Field name={`list_field_${index}`}>
                    <Input placeholder={`list_field_${index}`} />
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
