import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import {createForm} from '../';

const TestComponent = React.createClass({
  propTypes: {
    form: React.PropTypes.object,
  },

  render() {
    const {getFieldProps} = this.props.form;
    return (<div>
      <input {...getFieldProps('normal')} id="t12345"/>
    </div>);
  },
});


describe('refComponent usage', () => {
  let container;
  let component;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
  });

  it('works', () => {
    const Test = createForm({
      withRef: true,
      refComponent: true,
    })(TestComponent);
    component = ReactDOM.render(<Test x={2}/>, container);
    expect(component.fields.normal.instance).to.be(document.getElementById('t12345'));
  });
});
