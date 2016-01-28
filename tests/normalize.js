import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import {createForm} from '../';
import {Simulate} from 'react-addons-test-utils';

let Test = React.createClass({
  propTypes: {
    form: React.PropTypes.object,
  },
  upper(v) {
    return v && v.toUpperCase();
  },

  render() {
    const {getFieldProps} = this.props.form;
    return (<div>
      <input {...getFieldProps('normal', {
        normalize: this.upper,
      })} ref="normal"/>
    </div>);
  },
});

Test = createForm({
  withRef: true,
})(Test);

describe('normalize usage', () => {
  let container;
  let component;
  let form;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    component = ReactDOM.render(<Test />, container);
    component = component.refs.wrappedComponent;
    form = component.props.form;
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
  });

  it('works', () => {
    component.refs.normal.value = 'a';
    Simulate.change(component.refs.normal);
    expect(form.getFieldValue('normal')).to.be('A');
    expect( component.refs.normal.value).to.be('A');
  });
});
