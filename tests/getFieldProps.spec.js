/* eslint-disable no-undef, react/prop-types, react/no-multi-comp,
react/prefer-stateless-function */

import React from 'react';
import { mount } from 'enzyme';
import createForm from '../src/createForm';

describe('fieldname', () => {
  // https://github.com/ant-design/ant-design/issues/8985
  it('support disordered array', () => {
    const Test = createForm({ withRef: true })(
      class extends React.Component {
        render() {
          const { getFieldProps } = this.props.form;
          return (
            <div>
              <input
                {...getFieldProps('array[1]', {
                  rules: [{ required: true }],
                })}
              />
              <input
                {...getFieldProps('array[0]', {
                  rules: [{ required: true }],
                })}
              />
            </div>
          );
        }
      }
    );

    const wrapper = mount(<Test />);
    const form = wrapper.ref('wrappedComponent').props.form;
    expect(() => form.validateFields()).not.toThrow();
  });
});

describe('initialValue', () => {
  it('works', () => {
    const Test = createForm({ withRef: true })(
      class extends React.Component {
        render() {
          const { getFieldProps } = this.props.form;
          return <input {...getFieldProps('normal', { initialValue: '1' })} />;
        }
      }
    );
    const wrapper = mount(<Test />);
    const form = wrapper.ref('wrappedComponent').props.form;
    expect(form.getFieldValue('normal')).toBe('1');
    wrapper.find('input').simulate('change', { target: { value: '2' } });
    expect(form.getFieldValue('normal')).toBe('2');
    form.resetFields();
    expect(form.getFieldValue('normal')).toBe('1');
  });
});

describe('getValueProps', () => {
  it('works', () => {
    const Test = createForm({ withRef: true })(
      class extends React.Component {
        render() {
          const { getFieldProps } = this.props.form;
          return (
            <input
              {...getFieldProps('normal', {
                getValueProps(v) {
                  return { value: `${v}1` };
                },
              })}
            />
          );
        }
      }
    );
    const wrapper = mount(<Test />);
    const form = wrapper.ref('wrappedComponent').props.form;
    wrapper.find('input').simulate('change', { target: { value: '2' } });
    expect(form.getFieldValue('normal')).toBe('2');
    expect(form.getFieldInstance('normal').value).toBe('21');
  });
});

describe('getValueFromEvent', () => {
  it('works', () => {
    const Test = createForm({ withRef: true })(
      class extends React.Component {
        render() {
          const { getFieldProps } = this.props.form;
          return (
            <input
              {...getFieldProps('normal', {
                getValueFromEvent(e) {
                  return `${e.target.value}1`;
                },
              })}
            />
          );
        }
      }
    );
    const wrapper = mount(<Test />);
    const form = wrapper.ref('wrappedComponent').props.form;
    wrapper.find('input').simulate('change', { target: { value: '2' } });
    expect(form.getFieldValue('normal')).toBe('21');
  });
});

describe('normalize', () => {
  it('works', () => {
    const Test = createForm({ withRef: true })(
      class extends React.Component {
        toUpper = (v) => {
          return v && v.toUpperCase();
        }
        render() {
          const { getFieldProps } = this.props.form;
          return (
            <input
              {...getFieldProps('normal', {
                normalize: this.toUpper,
              })}
            />
          );
        }
      }
    );
    const wrapper = mount(<Test />);
    const form = wrapper.ref('wrappedComponent').props.form;
    wrapper.find('input').simulate('change', { target: { value: 'a' } });
    expect(form.getFieldValue('normal')).toBe('A');
    expect(form.getFieldInstance('normal').value).toBe('A');
  });
});

describe('validate', () => {
  it('works', () => {
    const Test = createForm({ withRef: true })(
      class extends React.Component {
        render() {
          const { getFieldProps } = this.props.form;
          return (
            <input
              {...getFieldProps('normal', {
                validate: [{
                  trigger: 'onBlur',
                  rules: [{
                    required: true,
                  }],
                }],
              })}
            />
          );
        }
      }
    );
    const wrapper = mount(<Test />);
    const form = wrapper.ref('wrappedComponent').props.form;
    expect(form.getFieldValue('normal')).toBe(undefined);
    wrapper.find('input').simulate('change', { target: { value: '' } });
    expect(form.getFieldValue('normal')).toBe('');
    expect(form.getFieldError('normal')).toBe(undefined);
    wrapper.find('input').simulate('blur', { target: { value: '' } });
    expect(form.getFieldValue('normal')).toBe('');
    expect(form.getFieldError('normal')).toEqual(['normal is required']);
    wrapper.find('input').simulate('blur', { target: { value: '1' } });
    expect(form.getFieldValue('normal')).toBe('1');
    expect(form.getFieldError('normal')).toBe(undefined);
  });

  it('suport jsx message', () => {
    const Test = createForm({ withRef: true })(
      class extends React.Component {
        render() {
          const { getFieldProps } = this.props.form;
          return (
            <input
              {...getFieldProps('required', {
                rules: [{
                  required: true,
                  message: <b>1</b>,
                }],
              })}
            />
          );
        }
      }
    );
    const wrapper = mount(<Test />);
    const form = wrapper.ref('wrappedComponent').props.form;
    wrapper.find('input').simulate('change');
    expect(form.getFieldError('required').length).toBe(1);
    expect(form.getFieldError('required')[0].type).toBe('b');
  });
});

describe('hidden', () => {
  it('works', (callback) => {
    const Test = createForm({ withRef: true })(
      class extends React.Component {
        render() {
          const { getFieldProps } = this.props.form;
          return (
            <input
              {...getFieldProps('normal', {
                hidden: true,
                initialValue: '',
                rules: [{ required: true }],
              })}
            />
          );
        }
      }
    );
    const wrapper = mount(<Test />);
    const form = wrapper.ref('wrappedComponent').props.form;
    expect(form.getFieldsValue()).toEqual({});
    form.validateFields((errors, values) => {
      expect(errors).toBe(null);
      expect(values).toEqual({});
      callback();
    });
  });

  it('can be set', () => {
    const Test = createForm({ withRef: true })(
      class extends React.Component {
        render() {
          const { getFieldProps } = this.props.form;
          return (
            <input
              {...getFieldProps('normal', {
                hidden: true,
                initialValue: '',
              })}
            />
          );
        }
      }
    );
    const wrapper = mount(<Test />);
    const form = wrapper.ref('wrappedComponent').props.form;
    expect(form.getFieldsValue(['normal'])).toEqual({ normal: '' });
    form.setFieldsValue({ normal: 'Hello world!' });
    expect(form.getFieldsValue(['normal'])).toEqual({ normal: 'Hello world!' });
  });
});
