/* eslint-disable no-undef, react/prop-types */
jest.mock('dom-scroll-into-view', () => jest.fn());

import React from 'react';
import ReactDOM from 'react-dom';
import createDOMForm from '../src/createDOMForm';
import scrollIntoView from 'dom-scroll-into-view';

class Test extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        {getFieldDecorator('normal', {
          rules: [{
            required: true,
          }],
        })(<textarea style={{ overflowY: 'auto' }} />)}
      </div>
    );
  }
}

Test = createDOMForm({
  withRef: true,
})(Test);

describe('validateFieldsAndScroll', () => {
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

  it('validateFieldsAndScroll works on overflowY auto element', (done) => {
    form.validateFieldsAndScroll(() => {
      expect(scrollIntoView.mock.calls[0][1].tagName).not.toBe('TEXTAREA');
      done();
    });
  });
});
