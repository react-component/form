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
        <h3>State Form ({list.length} inputs)</h3>
        <StateForm>
          <React.Fragment>
            <Field name="username">
              <Input placeholder="Username" />
            </Field>
            <Field name="password">
              <Input placeholder="Password" />
            </Field>
            <Field name="username">
              <Input placeholder="Shadow of Username" />
            </Field>
            <Field name={[ 'path1', 'path2' ]}>
              <Input placeholder="nest" />
            </Field>
            <Field name={[ 'renderProps' ]}>
              {(control) => <Input {...control} placeholder="render props" />}
            </Field>

            {list.map((_, index) => (
              <Field name={`field_${index}`}>
                <Input placeholder={`field_${index}`} />
              </Field>
            ))}
          </React.Fragment>
        </StateForm>
      </div>
    );
  }
}
