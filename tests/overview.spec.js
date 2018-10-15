/* eslint-disable no-undef, react/prop-types, react/no-multi-comp,
react/prefer-stateless-function */

import React from 'react';
import { mount } from 'enzyme';
import createForm from '../src/createForm';

describe('getFieldProps\' behaviors', () => {
  it('collect value and relative getters', () => {
    const Test = createForm({ withRef: true })(
      class extends React.Component {
        render() {
          const { getFieldProps } = this.props.form;
          return (
            <form>
              <input {...getFieldProps('normal')} />
              <input {...getFieldProps('nested1.a[0]')} />
              <input {...getFieldProps('nested2[0].b')} />
            </form>
          );
        }
      }
    );
    const wrapper = mount(<Test />);
    const form = wrapper.ref('wrappedComponent').props.form;
    wrapper.find('input').at(0).simulate('change', { target: { value: '1' } });
    expect(form.getFieldValue('normal')).toBe('1');
    wrapper.find('input').at(1).simulate('change', { target: { value: 'a' } });
    expect(form.getFieldValue('nested1.a[0]')).toBe('a');
    expect(form.getFieldValue('nested1')).toEqual({ a: ['a'] });
    wrapper.find('input').at(2).simulate('change', { target: { value: 'b' } });
    expect(form.getFieldValue('nested2[0].b')).toBe('b');
    expect(form.getFieldValue('nested2')).toEqual([{ b: 'b' }]);

    expect(form.getFieldsValue(['normal', 'nested1', 'nested2[0]']))
      .toEqual({
        normal: '1',
        nested1: { a: ['a'] },
        nested2: [{ b: 'b' }],
      });
  });

  it('validate value and relative getters', () => {
    const Test = createForm({ withRef: true })(
      class extends React.Component {
        render() {
          const { getFieldProps } = this.props.form;
          return (
            <form>
              <input {...getFieldProps('normal', { rules: [{ required: true }] })} />
              <input {...getFieldProps('nested1.a[0]', { rules: [{ required: true }] })} />
              <input {...getFieldProps('nested2[0].b', { rules: [{ required: true }] })} />
            </form>
          );
        }
      }
    );
    const wrapper = mount(<Test />);
    const form = wrapper.ref('wrappedComponent').props.form;

    wrapper.find('input').at(0).simulate('change');
    expect(form.getFieldError('normal')).toEqual(['normal is required']);
    wrapper.find('input').at(0).simulate('change', { target: { value: '1' } });
    expect(form.getFieldError('normal')).toBe(undefined);

    wrapper.find('input').at(1).simulate('change');
    expect(form.getFieldError('nested1.a[0]')).toEqual(['nested1.a[0] is required']);
    expect(form.getFieldError('nested1')).toEqual({ a: [['nested1.a[0] is required']] });
    wrapper.find('input').at(1).simulate('change', { target: { value: '1' } });
    expect(form.getFieldError('nested1.a[0]')).toBe(undefined);
    expect(form.getFieldError('nested1')).toEqual({ a: [undefined] });

    wrapper.find('input').at(2).simulate('change');
    expect(form.getFieldError('nested2[0].b')).toEqual(['nested2[0].b is required']);
    expect(form.getFieldError('nested2')).toEqual([{ b: ['nested2[0].b is required'] }]);
    wrapper.find('input').at(2).simulate('change', { target: { value: '1' } });
    expect(form.getFieldError('nested2[0].b')).toBe(undefined);
    expect(form.getFieldError('nested2')).toEqual([{ b: undefined }]);

    expect(form.getFieldsError(['normal', 'nested1', 'nested2[0]']))
      .toEqual({
        normal: undefined,
        nested1: { a: [undefined] },
        nested2: [{ b: undefined }],
      });
  });
});

describe('createForm\'s form behavior', () => {
  it('getFieldValue should return `undefined` when `name` is not registered', () => {
    const Test = createForm({ withRef: true })(
      class extends React.Component {
        render() { return null; }
      }
    );
    const wrapper = mount(<Test />);
    const form = wrapper.ref('wrappedComponent').props.form;
    expect(form.getFieldValue('not-registered')).toBe(undefined);
  });

  it('setFieldsInitialValue works', () => {
    const Test = createForm({ withRef: true })(
      class extends React.Component {
        render() {
          const { getFieldProps } = this.props.form;
          return (
            <form>
              <input {...getFieldProps('normal')} />
              <input {...getFieldProps('nested1.a[0]')} />
              <input {...getFieldProps('nested2[0].b')} />
            </form>
          );
        }
      }
    );
    const wrapper = mount(<Test />);
    const form = wrapper.ref('wrappedComponent').props.form;
    form.setFieldsInitialValue({
      normal: '1',
      nested1: { a: ['2'] },
      nested2: [{ b: '3' }],
    });
    expect(form.getFieldsValue()).toEqual({
      normal: '1',
      nested1: { a: ['2'] },
      nested2: [{ b: '3' }],
    });
  });

  it('resetFields works', () => {
    const Test = createForm({ withRef: true })(
      class extends React.Component {
        render() {
          const { getFieldProps } = this.props.form;
          return (
            <form>
              <input {...getFieldProps('normal', { rules: [{ required: true }] })} />
              <input {...getFieldProps('nested1.a[0]', { rules: [{ required: true }] })} />
              <input {...getFieldProps('nested2[0].b', { rules: [{ required: true }] })} />
            </form>
          );
        }
      }
    );
    const wrapper = mount(<Test />);
    const form = wrapper.ref('wrappedComponent').props.form;

    wrapper.find('input').at(0).simulate('change', { target: { value: '' } });
    expect(form.getFieldValue('normal')).toBe('');
    expect(form.getFieldError('normal')).toEqual(['normal is required']);
    wrapper.find('input').at(1).simulate('change', { target: { value: '' } });
    expect(form.getFieldValue('nested1.a[0]')).toBe('');
    expect(form.getFieldError('nested1.a[0]')).toEqual(['nested1.a[0] is required']);
    wrapper.find('input').at(2).simulate('change', { target: { value: '' } });
    expect(form.getFieldValue('nested2[0].b')).toBe('');
    expect(form.getFieldError('nested2[0].b')).toEqual(['nested2[0].b is required']);
    form.resetFields(['normal', 'nested1', 'nested2[0]']);
    expect(form.getFieldValue('normal')).toBe(undefined);
    expect(form.getFieldError('normal')).toBe(undefined);
    expect(form.getFieldValue('nested1.a[0]')).toBe(undefined);
    expect(form.getFieldError('nested1.a[0]')).toBe(undefined);
    expect(form.getFieldValue('nested2[0].b')).toBe(undefined);
    expect(form.getFieldError('nested2[0].b')).toBe(undefined);
  });

  it('validateFields works for errors', (callback) => {
    const Test = createForm({ withRef: true })(
      class extends React.Component {
        render() {
          const { getFieldProps } = this.props.form;
          return <input {...getFieldProps('normal', { rules: [{ required: true }] })} />;
        }
      }
    );
    const wrapper = mount(<Test />);
    const form = wrapper.ref('wrappedComponent').props.form;
    form.validateFields((errors, values) => {
      expect(errors).toEqual({
        normal: {
          errors: [{ field: 'normal', message: 'normal is required' }],
        },
      });
      expect(values).toEqual({ normal: undefined });
      callback();
    });
  });

  it('validateFields works for ok', (callback) => {
    const Test = createForm({ withRef: true })(
      class extends React.Component {
        render() {
          const { getFieldProps } = this.props.form;
          return <input {...getFieldProps('normal', { rules: [{ required: true }] })} />;
        }
      }
    );
    const wrapper = mount(<Test />);
    const form = wrapper.ref('wrappedComponent').props.form;
    wrapper.find('input').simulate('change', { target: { value: '1' } });
    form.validateFields((errors, values) => {
      expect(errors).toBe(null);
      expect(values).toEqual({ normal: '1' });
      callback();
    });
  });

  it('validateFields(names, callback) works', (callback) => {
    const Test = createForm({ withRef: true })(
      class extends React.Component {
        render() {
          const { getFieldProps } = this.props.form;
          return (
            <form>
              <input {...getFieldProps('normal', { rules: [{ required: true }] })} />
              <input {...getFieldProps('nested1.a[0]', { rules: [{ required: true }] })} />
              <input {...getFieldProps('nested2[0].b', { rules: [{ required: true }] })} />
            </form>
          );
        }
      }
    );
    const wrapper = mount(<Test />);
    const form = wrapper.ref('wrappedComponent').props.form;
    form.validateFields(['nested1', 'nested2[0]'], (errors, values) => {
      expect(errors).toEqual({
        nested1: {
          a: [{
            errors: [{ field: 'nested1.a[0]', message: 'nested1.a[0] is required' }],
          }],
        },
        nested2: [{
          b: {
            errors: [{ field: 'nested2[0].b', message: 'nested2[0].b is required' }],
          },
        }],
      });
      expect(values).toEqual({
        nested1: { a: [undefined] },
        nested2: [{ b: undefined }],
      });
      callback();
    });
  });
});
