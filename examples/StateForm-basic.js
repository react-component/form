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
            {(control) => (
              <div>
                I am render props
                <Input {...control} placeholder="render props" />
              </div>
            )}
          </Field>

          <h4>Show additional field when `username` is `111`</h4>
          <Field name="condition" shouldUpdate={(prev, next) => prev.username !== next.username}>
            {(control, meta, context) => {
              const { username } = context.getFieldsValue();
              return username === '111' ? (
                <Input {...control} placeholder="I am secret!" />
              ) : null;
            }}
          </Field>

          {list.map((_, index) => (
            <Field key={index} name={`field_${index}`}>
              <Input placeholder={`field_${index}`} />
            </Field>
          ))}
        </StateForm>
      </div>
    );
  }
}
