/* eslint-disable jsx-a11y/label-has-associated-control, react/prop-types */

import React from 'react';
import StateForm from '../src/StateForm';
import Input from './components/Input';
import LabelField from './components/LabelField';

const list = new Array(1111).fill();

export default class Demo extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <h3>State Form ({list.length} inputs)</h3>
        <StateForm>
          <LabelField name="username">
            <Input placeholder="Username" />
          </LabelField>
          <LabelField name="password">
            <Input placeholder="Password" />
          </LabelField>
          <LabelField name={['path1', 'path2']} label="Nest Path" rules={[ { required: true } ]}>
            <Input placeholder="nest" />
          </LabelField>
        </StateForm>
      </div>
    );
  }
}
