/* eslint-disable jsx-a11y/label-has-associated-control, react/prop-types */

import React from 'react';
import StateForm from '../src/StateForm';
import Input from './components/Input';

const { Field } = StateForm;

const list = new Array(1111).fill();

function LabelField({ name, label, children, ...restProps }) {
  return (
    <Field name={name} {...restProps}>
      {(control, meta) => {
        let childNode;

        if (typeof children === 'function') {
          childNode = children(control, meta);
        } else {
          childNode = React.cloneElement(children, { ...control });
        }

        return (
          <div>
            <label>
              {label || name}
              {childNode}
            </label>

            {meta.errors}
          </div>
        );
      }}
    </Field>
  );
}

export default class Demo extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <h3>State Form ({list.length} inputs)</h3>
        <StateForm>
          {/* <LabelField name="username">
            <Input placeholder="Username" />
          </LabelField>
          <LabelField name="password">
            <Input placeholder="Password" />
          </LabelField> */}
          <LabelField name={['path1', 'path2']} label="Nest Path" rules={[ { required: true } ]}>
            <Input placeholder="nest" />
          </LabelField>
        </StateForm>
      </div>
    );
  }
}
