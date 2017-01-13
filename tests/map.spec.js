import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import createForm from '../src/createForm';
import { Simulate } from 'react-addons-test-utils';

const TestComponent = React.createClass({
  propTypes: {
    form: React.PropTypes.object,
  },

  render() {
    const { getFieldProps } = this.props.form;
    return (<div>
      <input {...getFieldProps('normal')} />
      <input {...getFieldProps('normal2')} />
    </div>);
  },
});


describe('map usage', () => {
  let container;
  let component;
  let form;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
  });

  it('onFieldsChange works', () => {
    const Test = createForm({
      withRef: true,
      onFieldsChange(props, fields) {
        expect(Object.keys(fields).length).to.be(1);
        const field = fields.normal;
        expect(field.name).to.be('normal');
        expect(field.value).to.be('3');
      },
      mapPropsToFields(props) {
        return {
          normal: {
            value: props.formState.normal,
          },
        };
      },
    })(TestComponent);
    component = ReactDOM.render(<Test formState={{ normal: '2' }}/>, container);
    component = component.refs.wrappedComponent;
    form = component.props.form;
    expect(form.getFieldInstance('normal').value).to.be('2');
    expect(form.getFieldValue('normal')).to.be('2');
    expect(form.getFieldInstance('normal2').value).to.be('');
    expect(form.getFieldValue('normal2')).to.be(undefined);
    form.getFieldInstance('normal').value = '3';
    Simulate.change(form.getFieldInstance('normal'));
    expect(form.getFieldValue('normal')).to.be('3');
  });


  it('mapProps works', () => {
    const Test = createForm({
      withRef: true,
      mapProps(props) {
        return {
          ...props,
          x: props.x + 1,
        };
      },
    })(TestComponent);
    component = ReactDOM.render(<Test x={2}/>, container);
    component = component.refs.wrappedComponent;
    expect(component.props.x).to.be(3);
  });
});
