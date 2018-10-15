/* eslint-disable no-undef, space-before-keywords, react/prop-types, react/no-multi-comp,
react/prefer-stateless-function, react/no-string-refs */

import React from 'react';
import { mount } from 'enzyme';
import createForm from '../src/createForm';
import createFormField from '../src/createFormField';

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
    const form = wrapper.ref('wrappedComponent').props.form;
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
    })(class extends React.Component {
      render() {
        const { getFieldProps } = this.props.form;
        return (
          <form>
            <input {...getFieldProps('user.name')} />
            <input {...getFieldProps('user.age')} type="number" />
            <input {...getFieldProps('agreement')} type="checkbox" />
          </form>
        );
      }
    });
    const wrapper = mount(<Test />);

    wrapper.find('input').first().simulate('change', { target: { value: 'Benjy' } });
    expect(onFieldsChange.mock.calls[0][1]).toMatchObject({ user: { name: { value: 'Benjy' } } });
    expect(onFieldsChange.mock.calls[0][2]).toMatchObject({
      user: {
        name: { value: 'Benjy' },
        age: { value: undefined },
      },
      agreement: { value: undefined },
    });
  });

  it('trigger `onFieldsChange` when `setFields`', () => {
    const onFieldsChange = jest.fn();
    const Test = createForm({
      withRef: true,
      onFieldsChange,
    })(class extends React.Component {
      render() {
        const { getFieldProps } = this.props.form;
        return (
          <form>
            <input {...getFieldProps('user.name')} />
            <input {...getFieldProps('user.age')} type="number" />
            <input {...getFieldProps('agreement')} type="checkbox" />
          </form>
        );
      }
    });
    const wrapper = mount(<Test />);
    const form = wrapper.ref('wrappedComponent').props.form;

    form.setFields({ user: { name: { value: 'Benjy' } } });
    expect(onFieldsChange.mock.calls[0][1]).toMatchObject({ user: { name: { value: 'Benjy' } } });
    expect(onFieldsChange.mock.calls[0][2]).toMatchObject({
      user: {
        name: { value: 'Benjy' },
        age: { value: undefined },
      },
      agreement: { value: undefined },
    });
  });

  it('fields in arguemnts can be passed to `mapPropsToFields` directly', () => {
    const Test = createForm({
      withRef: true,
      onFieldsChange(props, changed, all) {
        props.onChange(all);
      },
      mapPropsToFields({ fields }) {
        return fields;
      },
    })(class extends React.Component {
      render() {
        const { getFieldProps } = this.props.form;
        return (
          <form>
            <input {...getFieldProps('user.name')} />
            <input {...getFieldProps('user.age')} type="number" />
            <input {...getFieldProps('agreement')} type="checkbox" />
          </form>
        );
      }
    });
    class TestWrapper extends React.Component {
      state = {
        fields: {},
      };
      handleFieldsChange = (fields) => {
        this.setState({ fields });
      }
      render() {
        return (
          <Test
            ref="test"
            fields={this.state.fields}
            onChange={this.handleFieldsChange}
          />
        );
      }
    }
    const wrapper = mount(<TestWrapper />);
    wrapper.find('input').at(0).simulate('change', { target: { value: 'Benjy' } });
    wrapper.find('input').at(1).simulate('change', { target: { value: 18 } });
    wrapper.find('input').at(2)
      .simulate('change', { target: { type: 'checkbox', checked: true } });
    expect(wrapper.state('fields')).toMatchObject({
      user: {
        age: { value: 18 },
        name: { value: 'Benjy' },
      },
      agreement: { value: true },
    });
  });
});

describe('onValuesChange', () => {
  it('trigger `onValuesChange` when value change', () => {
    const onValuesChange = jest.fn();
    const Test = createForm({
      onValuesChange,
    })(class extends React.Component {
      render() {
        const { getFieldProps } = this.props.form;
        return (
          <form>
            <input {...getFieldProps('user.name')} />
            <input {...getFieldProps('user.age')} type="number" />
            <input {...getFieldProps('agreement')} type="checkbox" />
          </form>
        );
      }
    });
    const wrapper = mount(<Test />);
    wrapper.find('input').first().simulate('change', { target: { value: 'Benjy' } });
    expect(onValuesChange.mock.calls[0][1]).toMatchObject({ user: { name: 'Benjy' } });
    expect(onValuesChange.mock.calls[0][2])
      .toMatchObject({
        user: {
          name: 'Benjy',
          age: undefined,
        },
        agreement: undefined,
      });
  });

  it('trigger `onValuesChange` when `setFieldsValue`', () => {
    const onValuesChange = jest.fn();
    const Test = createForm({
      withRef: true,
      onValuesChange,
    })(class extends React.Component {
      render() {
        const { getFieldProps } = this.props.form;
        return (
          <form>
            <input {...getFieldProps('user.name')} />
            <input {...getFieldProps('user.age')} type="number" />
            <input {...getFieldProps('agreement')} type="checkbox" />
          </form>
        );
      }
    });
    const wrapper = mount(<Test />);
    const form = wrapper.ref('wrappedComponent').props.form;
    form.setFieldsValue({ user: { name: 'Benjy' } });
    expect(onValuesChange.mock.calls[0][1]).toMatchObject({ user: { name: 'Benjy' } });
    expect(onValuesChange.mock.calls[0][2])
      .toMatchObject({
        user: {
          name: 'Benjy',
          age: undefined,
        },
        agreement: undefined,
      });
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
    })(class extends React.Component { render() { return null; } });
    const wrapper = mount(<Test x={2} />);
    const wrappedComponent = wrapper.ref('wrappedComponent');
    expect(wrappedComponent.props.x).toBe(3);
  });
});

describe('mapPropsToFields', () => {
  it('works', () => {
    const Test = createForm({
      withRef: true,
      mapPropsToFields({ formState }) {
        return {
          user: {
            name: createFormField({
              value: formState.userName,
            }),
            age: createFormField({
              value: formState.userAge,
            }),
          },
          agreement: createFormField({
            value: formState.agreement,
          }),
        };
      },
    })(class extends React.Component {
      render() {
        const { form } = this.props;
        const { getFieldProps } = form;
        return (
          <form>
            <input {...getFieldProps('user.name')} />
            <input {...getFieldProps('user.age')} type="number" />
            <input {...getFieldProps('agreement')} type="checkbox" />
          </form>
        );
      }
    });
    const wrapper = mount(
      <Test formState={{ userName: 'Benjy', userAge: 18, agreement: false }} />
    );
    const form = wrapper.ref('wrappedComponent').props.form;
    expect(form.getFieldValue('user.name')).toBe('Benjy');
    expect(form.getFieldValue('user.age')).toBe(18);
    expect(form.getFieldValue('agreement')).toBe(false);

    wrapper.setProps({ formState: { userName: 'Benjy', userAge: 18, agreement: true } });
    expect(form.getFieldValue('user.name')).toBe('Benjy');
    expect(form.getFieldValue('user.age')).toBe(18);
    expect(form.getFieldValue('agreement')).toBe(true);
  });

  it('returned value will replace current fields', () => {
    const Test = createForm({
      withRef: true,
      mapPropsToFields(props) {
        return {
          field1: createFormField({
            value: props.formState.field1,
          }),
        };
      },
    })(class extends React.Component {
      render() {
        const { getFieldProps } = this.props.form;
        return (
          <form>
            <input {...getFieldProps('field1')} />
            <input {...getFieldProps('field2')} />
          </form>
        );
      }
    });
    const wrapper = mount(<Test formState={{ field1: '2' }} />);
    const form = wrapper.ref('wrappedComponent').props.form;
    wrapper.find('input').last().simulate('change', { target: { value: '3' } });
    wrapper.setProps({ formState: { field1: '1' } });
    expect(form.getFieldValue('field1')).toBe('1');
    expect(form.getFieldValue('field2')).toBe(undefined);
  });
});
