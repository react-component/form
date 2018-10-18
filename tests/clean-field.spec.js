/* eslint-disable no-undef, react/prop-types, react/no-multi-comp,
react/prefer-stateless-function */
import React from 'react';
import { mount } from 'enzyme';
import createDOMForm from '../src/createDOMForm';

jest.mock('dom-scroll-into-view', () => jest.fn());

// https://github.com/ant-design/ant-design/issues/12560
describe('clean field if did update removed', () => {
  // Prepare
  const Popup = ({ visible, children }) => {
    if (!visible) return null;
    return (
      <div>
        {children}
      </div>
    );
  };

  class Demo extends React.Component {
    render() {
      const { init, show } = this.props;
      const { getFieldDecorator } = this.props.form;

      let name;
      let age;

      if (init) {
        name = (
          <div>
            name:
            {getFieldDecorator('name', {
              rules: [{ required: true }],
            })(<input />)}
          </div>
        );
      } else {
        age = (
          <div>
            age:
            {getFieldDecorator('age', {
              rules: [{ required: true }],
            })(<input />)}
          </div>
        );
      }

      return (
        <Popup visible={show}>
          {name}
          {age}
        </Popup>
      );
    }
  }

  const FormDemo = createDOMForm({
    withRef: true,
  })(Demo);

  class Test extends React.Component {
    state = {
      show: false,
      init: false,
    };

    onClick = () => {
      this.setState({ show: true });
      this.setState({ init: true });
    };

    setRef = (demo) => {
      this.demo = demo;
    };
    
    changeField = () => {
      this.setState({ init: false });
    };

    render() {
      const { show, init } = this.state;
      return (
        <div>
          <FormDemo ref={this.setRef} show={show} init={init} />
          <button className="my-btn" onClick={this.onClick}>Show</button>
          <button className="my-btn2" onClick={this.changeField}>ChangeField</button>
        </div>
      );
    }
  }

  // Do the test
  it('Remove when mount', () => {
    const wrapper = mount(<Test />, { attachTo: document.body });
    const form = wrapper.find('Demo').props().form;
    // when visible is false, age is also didn't mount;
    form.validateFields((error) => {
      expect(error).toEqual(null);
    });
    // form.validateFields((error) => {
    //   expect(Object.keys(error)).toEqual(['age']);
    // });

    wrapper.find('.my-btn').simulate('click');

    form.validateFields((error) => {
      expect(Object.keys(error)).toEqual(['name']);
    });

    wrapper.find('.my-btn2').simulate('click');

    form.validateFields((error) => {
      expect(Object.keys(error)).toEqual(['age']);
    });
  });
});
