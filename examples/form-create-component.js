import React from 'react';
import ReactDOM from 'react-dom';
import Component from '@reactions/component';
import { FormCreate } from '../src';

const Form = () => (
  <FormCreate>
    {({ getFieldDecorator, validateFields }) => (
      <Component initialState={{ result: 0 }}>
        {({ setState, state: { result } }) => {
          const handleAdd = (e) => {
            e.preventDefault();
            validateFields((err, { value }) => {
              if (!err) {
                setState({ result: result + +value });
              }
            });
          };
          return (
            <form onSubmit={handleAdd}>
              result:{result}
              <br/>
              value:
              {getFieldDecorator('value', {
                rules: [{ required: true }],
              })(<input type="number" />)}
              <br/>
              <button type="submit">Add</button>
              <br/>
            </form>
          );
        }}
      </Component>
    )}
  </FormCreate>
);

ReactDOM.render(<Form />, document.getElementById('__react-content'));
