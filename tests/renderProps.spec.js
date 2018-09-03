import React from 'react';
import { mount } from 'enzyme';
import FormScope from '../src/FormScope';

describe('renderProps', () => {
  it('check form function exists', () => {
    let formInst = null;
    const setRef = (inst) => {
      formInst = inst;
    };

    mount(
      <div>
        <FormScope ref={setRef}>
          {() => (
            <div />
          )}
        </FormScope>
      </div>,
      { attachTo: document.body },
    );

    expect(formInst.setFieldsInitialValue).toBeTruthy();
  });
});
