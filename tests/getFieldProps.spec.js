/* eslint-disable no-undef, react/prop-types, react/no-multi-comp */

import React from 'react';
import { mount } from 'enzyme';
import createForm from '../src/createForm';

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
    const form = wrapper.ref('wrappedComponent').prop('form');
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
    const form = wrapper.ref('wrappedComponent').prop('form');
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
    const form = wrapper.ref('wrappedComponent').prop('form');
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
    const form = wrapper.ref('wrappedComponent').prop('form');
    wrapper.find('input').simulate('change', { target: { value: 'a' } });
    expect(form.getFieldValue('normal')).toBe('A');
    expect(form.getFieldInstance('normal').value).toBe('A');
  });
});
