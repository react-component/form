/* eslint-disable no-undef, react/prop-types, react/no-multi-comp,
react/prefer-stateless-function */
import React from 'react';
import { mount } from 'enzyme';
import createDOMForm from '../src/createDOMForm';

jest.mock('dom-scroll-into-view', () => jest.fn());

// https://github.com/ant-design/ant-design/issues/12560
describe('clean field if did update removed', () => {
  // Prepare

  class PreventRerenderNode extends React.Component {
    shouldComponentUpdate() {
      return false;
    }
    handleChange = e => {
      const { form, formKey } = this.props;
      // 手动设值以及更新组件
      form.setFieldsValue({
        [formKey]: e.target.value,
      });
      this.forceUpdate();
    };
    render() {
      const { form, formKey } = this.props;
      return (
        <div>
          <span>{formKey}: </span>
          {form.getFieldDecorator(formKey)(
            <input className={`input-${  formKey}`} onChange={this.handleChange} />,
          )}
        </div>
      );
    }
  }

  class Demo extends React.Component {
    state = {
      keys: ["a", "b", "c", "d"],
    };
    deleteD = () => {
      this.setState({
        keys: this.state.keys.slice(0, 3),
      });
    };
    render() {
      const { form } = this.props;
      return (
        <div>
          {this.state.keys.map(key => (
            <PreventRerenderNode key={key} formKey={key} form={form} />
          ))}
          <button className="delete-d" onClick={this.deleteD}>删除d</button>
        </div>
      );
    }
  }

  const FormDemo = createDOMForm({
    withRef: true,
  })(Demo);

  // Do the test
  it('Preserve when rerender disabled', () => {
    const wrapper = mount(<FormDemo />, { attachTo: document.body });
    const form = wrapper.find('Demo').props().form;

    expect(Object.keys(form.getFieldsValue())).toEqual(expect.arrayContaining(["a", "b", "c", "d"]));
    
    wrapper.find('.input-a').simulate('change', {target: {value: 'My new value1'}});
    wrapper.find('.input-a').simulate('change', {target: {value: 'My new value2'}});

    expect(Object.keys(form.getFieldsValue())).toEqual(expect.arrayContaining(["a", "b", "c", "d"]));

  });

  it('Clean when node deleted', () => {
    const wrapper = mount(<FormDemo />, { attachTo: document.body });
    const form = wrapper.find('Demo').props().form;

    expect(Object.keys(form.getFieldsValue())).toEqual(expect.arrayContaining(["a", "b", "c", "d"]));
    
    wrapper.find('.input-a').simulate('change', {target: {value: 'My new value1'}});
    wrapper.find('.input-a').simulate('change', {target: {value: 'My new value2'}});
    wrapper.find('.delete-d').simulate('click');

    expect(Object.keys(form.getFieldsValue()).indexOf('d')).toEqual(-1);

  });
});
