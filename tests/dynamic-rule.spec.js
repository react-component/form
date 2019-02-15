/* eslint-disable no-undef, react/prop-types, react/no-multi-comp,
react/prefer-stateless-function */
import React from 'react';
import { mount } from 'enzyme';
import createDOMForm from '../src/createDOMForm';

// https://github.com/ant-design/ant-design/issues/13689
describe('reset form validate when rule changed', () => {

  class Demo extends React.Component {
    render() {
      const { form } = this.props;
      const { getFieldDecorator } = form;
      const type = form.getFieldValue("type");

      return (
        <div>
          {getFieldDecorator('type')(
            <input className="type" />
          )}
          {getFieldDecorator("val1", {
            rules: [{ required: type }]
          })(
            <input className="val1" />
          )}
          {getFieldDecorator("val2", {
            rules: [{ required: !type }]
          })(
            <input className="val1" />
          )}
          <button />
        </div>
      );
    }
  }

  const FormDemo = createDOMForm({
    withRef: true,
  })(Demo);

  // Do the test
  it('should update errors', (done) => {
    const wrapper = mount(<FormDemo />, { attachTo: document.body });
    const form = wrapper.find('Demo').props().form;

    // type => test
    wrapper.find('.type').simulate('change', {target: {value: 'test'}});
    form.validateFields(err => {
      expect(Object.keys(err)).toEqual(['val1']);

      // type => ''
      wrapper.find('.type').simulate('change', {target: {value: ''}});

      form.validateFields(err2 => {
        expect(Object.keys(err2)).toEqual(['val2']);
        done();
      });
    });
  });
});