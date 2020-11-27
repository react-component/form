import React from 'react';
import { mount } from 'enzyme';
import FieldElemWrapper from '../src/FieldElemWrapper';

describe('FieldElemWrapper', () => {
  it('should register field when mount and clear field when unmount', () => {
    const name = 'field-name';
    const mockForm = {
      domFields: {},
      recoverClearedField: jest.fn(),
      fieldsStore: {
        getFieldMeta: jest.fn(() => ({})),
        getField: jest.fn(() => ({})),
      },
      clearedFieldMetaCache: {},
      clearField: jest.fn(),
    };
    const children = <span>children</span>;
    const wrapper = mount(
      <FieldElemWrapper name={name} form={mockForm}>
        {children}
      </FieldElemWrapper>,
    );

    expect(wrapper.children().get(0)).toEqual(children);
    expect(mockForm.domFields[name]).toBe(true);
    expect(mockForm.recoverClearedField).toBeCalledWith(name);

    const mockFieldMeta = {};
    const mockField = {};
    mockForm.fieldsStore.getFieldMeta.mockReturnValueOnce(mockFieldMeta);
    mockForm.fieldsStore.getField.mockReturnValueOnce(mockField);
    wrapper.unmount();
    expect(mockForm.clearedFieldMetaCache[name]).toEqual({
      field: mockField,
      meta: mockFieldMeta,
    });
    expect(mockForm.clearField).toBeCalledWith(name);
    expect(mockForm.domFields[name]).toBe(undefined);
  });
});
