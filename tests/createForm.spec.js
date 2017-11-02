/* eslint-disable no-undef, react/prop-types, react/no-multi-comp */

import React from 'react';
import { mount } from 'enzyme';
import createForm from '../src/createForm';
import createFormField from '../src/createFormField';

class TestComponent extends React.Component {
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <input {...getFieldProps('normal')} />
        <input {...getFieldProps('normal2')} />
      </div>
    );
  }
}

describe('createForm', () => {
  describe('validateMessage', () => {
    it('works', () => {
      class Test extends React.Component {
        render() {
          const { getFieldProps } = this.props.form;
          return (
            <div>
              <input {...getFieldProps('required', {
                rules: [{
                  required: true,
                }],
              })}
              />
            </div>
          );
        }
      }
      Test = createForm({
        withRef: true,
        validateMessages: {
          required: '%s required!',
        },
      })(Test);
      const wrapper = mount(<Test />);
      const form = wrapper.ref('wrappedComponent').prop('form');
      wrapper.find('input').simulate('change');
      expect(form.getFieldError('required').length).toBe(1);
      expect(form.getFieldError('required')[0]).toBe('required required!');
    });
  });

  describe('onFieldsChange', () => {
    it('trigger `onFieldsChange` when value change', () => {
      const onFieldsChange = jest.fn();
      const Test = createForm({
        onFieldsChange,
      })(TestComponent);
      const wrapper = mount(<Test />);

      wrapper.find('input').first().simulate('change', { target: { value: '2' } });
      expect(onFieldsChange.mock.calls[0][1]).toMatchObject({ normal: { value: '2' } });
      expect(onFieldsChange.mock.calls[0][2]).toMatchObject({
        normal: { value: '2' },
        normal2: { value: undefined },
      });

      onFieldsChange.mockClear();
      wrapper.find('input').last().simulate('change', { target: { value: 'B' } });
      expect(onFieldsChange.mock.calls[0][1]).toMatchObject({ normal2: { value: 'B' } });
      expect(onFieldsChange.mock.calls[0][2]).toMatchObject({
        normal: { value: '2' },
        normal2: { value: 'B' },
      });
    });

    it('trigger `onFieldsChange` when `setFields`', () => {
      const onFieldsChange = jest.fn();
      const Test = createForm({
        withRef: true,
        onFieldsChange,
      })(TestComponent);
      const wrapper = mount(<Test />);
      const form = wrapper.ref('wrappedComponent').prop('form');

      form.setFields({ normal: { value: '2' } });
      expect(onFieldsChange.mock.calls[0][1]).toMatchObject({ normal: { value: '2' } });
      expect(onFieldsChange.mock.calls[0][2]).toMatchObject({
        normal: { value: '2' },
        normal2: { value: undefined },
      });

      onFieldsChange.mockClear();
      form.setFields({ normal2: { value: 'B' } });
      expect(onFieldsChange.mock.calls[0][1]).toMatchObject({ normal2: { value: 'B' } });
      expect(onFieldsChange.mock.calls[0][2]).toMatchObject({
        normal: { value: '2' },
        normal2: { value: 'B' },
      });
    });
  });

  describe('onValuesChange', () => {
    it('trigger `onValuesChange` when value change', () => {
      const onValuesChange = jest.fn();
      const Test = createForm({
        onValuesChange,
      })(TestComponent);
      const wrapper = mount(<Test />);
      wrapper.find('input').first().simulate('change', { target: { value: 'Benjy' } });
      expect(onValuesChange.mock.calls[0][1]).toMatchObject({ normal: 'Benjy' });
      expect(onValuesChange.mock.calls[0][2])
        .toMatchObject({ normal: 'Benjy', normal2: undefined });
    });

    it('trigger `onValuesChange` when `setFieldsValue`', () => {
      const onValuesChange = jest.fn();
      const Test = createForm({
        withRef: true,
        onValuesChange,
      })(TestComponent);
      const wrapper = mount(<Test />);
      const form = wrapper.ref('wrappedComponent').prop('form');
      form.setFieldsValue({ normal: 'Benjy' });
      expect(onValuesChange.mock.calls[0][1]).toMatchObject({ normal: 'Benjy' });
      expect(onValuesChange.mock.calls[0][2])
        .toMatchObject({ normal: 'Benjy', normal2: undefined });
    });
  });

  describe('mapProps', () => {
    it('works', () => {
      const Test = createForm({
        withRef: true,
        mapProps(props) {
          return {
            ...props,
            x: props.x + 1,
          };
        },
      })(TestComponent);
      const wrapper = mount(<Test x={2} />);
      const wrappedComponent = wrapper.ref('wrappedComponent');
      expect(wrappedComponent.prop('x')).toBe(3);
    });
  });

  describe('mapPropsToFields', () => {
    it('returned value will replace current fields', () => {
      const Test = createForm({
        withRef: true,
        mapPropsToFields(props) {
          return {
            normal: createFormField({
              value: props.formState.normal,
            }),
          };
        },
      })(TestComponent);
      const wrapper = mount(<Test formState={{ normal: '2' }} />);
      const form = wrapper.ref('wrappedComponent').prop('form');
      wrapper.find('input').last().simulate('change', { target: { value: '3' } });
      wrapper.setProps({ formState: { normal: '1' } });
      expect(form.getFieldValue('normal')).toBe('1');
      expect(form.getFieldValue('normal2')).toBe(undefined);
    });
  });
});
