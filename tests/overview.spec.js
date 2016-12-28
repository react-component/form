import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { createForm } from '../';
import { Simulate } from 'react-addons-test-utils';
import isEqual from 'lodash.isequal';

let Test = React.createClass({
  propTypes: {
    form: React.PropTypes.object,
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (<div>
      <input {...getFieldProps('normal')} />

      <input {...getFieldProps('required', {
        rules: [{
          required: true,
        }],
      })}
      />

      <input {...getFieldProps('blurRequired', {
        validate: [{
          trigger: 'onBlur',
          rules: [{
            required: true,
          }],
        }],
      })}
      />

      <input {...getFieldProps('foo.a.x')} />
      <input {...getFieldProps('foo.a.y')} />
      <input {...getFieldProps('foo.b[0]')} />
      <input {...getFieldProps('foo.b[1]')} />

      <input {...getFieldProps('a[0][1].b.c[0]')} />
      <input {...getFieldProps('a[0][1].b.c[1]')} />

    </div>);
  },
});

Test = createForm({
  withRef: true,
})(Test);

describe('overview usage', () => {
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

  it('collect value', () => {
    expect(form.getFieldValue('normal')).to.be(undefined);
    Simulate.change(form.getFieldInstance('normal'));
    expect(form.getFieldValue('normal')).to.be('');
    form.getFieldInstance('normal').value = '1';
    Simulate.change(form.getFieldInstance('normal'));
    expect(form.getFieldValue('normal')).to.be('1');
  });

  it('collect nested array value', () => {
    form.getFieldInstance('a[0][1].b.c[0]').value = '0';
    form.getFieldInstance('a[0][1].b.c[1]').value = '1';
    Simulate.change(form.getFieldInstance('a[0][1].b.c[0]'));
    Simulate.change(form.getFieldInstance('a[0][1].b.c[1]'));
    expect(isEqual(form.getFieldValue('a'), [
        [undefined, {
          b: {
            c: ['0', '1'],
          },
        }],
    ])).to.be(true);
    expect(form.getFieldValue('a[0][1].b.c[0]')).to.be('0');
    expect(form.getFieldValue('a[0][1].b.c[1]')).to.be('1');
  });

  it('collect nested value', () => {
    form.getFieldInstance('foo.a.x').value = '1';
    form.getFieldInstance('foo.a.y').value = '2';
    form.getFieldInstance('foo.b[0]').value = '3';
    form.getFieldInstance('foo.b[1]').value = '4';
    Simulate.change(form.getFieldInstance('foo.a.x'));
    Simulate.change(form.getFieldInstance('foo.a.y'));
    Simulate.change(form.getFieldInstance('foo.b[0]'));
    Simulate.change(form.getFieldInstance('foo.b[1]'));
    expect(isEqual(form.getFieldValue('foo'), {
      a: {
        x: '1',
        y: '2',
      },
      b: ['3', '4'],
    })).to.be(true);
    expect(form.getFieldValue('foo.a.x')).to.be('1');
    expect(form.getFieldValue('foo.a.y')).to.be('2');
    expect(form.getFieldValue('foo.b[0]')).to.be('3');
    expect(form.getFieldValue('foo.b[1]')).to.be('4');
  });

  it('validate value', () => {
    expect(form.getFieldValue('required')).to.be(undefined);
    Simulate.change(form.getFieldInstance('required'));
    expect(form.getFieldValue('required')).to.be('');
    expect(form.getFieldError('required')).to.eql(['required is required']);
    form.getFieldInstance('required').value = '1';
    Simulate.change(form.getFieldInstance('required'));
    expect(form.getFieldValue('required')).to.be('1');
    expect(form.getFieldError('required')).to.be(undefined);
  });


  it('validate trigger value', () => {
    expect(form.getFieldValue('blurRequired')).to.be(undefined);
    Simulate.change(form.getFieldInstance('blurRequired'));
    expect(form.getFieldValue('blurRequired')).to.be('');
    expect(form.getFieldError('blurRequired')).to.be(undefined);
    Simulate.blur(form.getFieldInstance('blurRequired'));
    expect(form.getFieldValue('blurRequired')).to.be('');
    expect(form.getFieldError('blurRequired')).to.eql(['blurRequired is required']);
    form.getFieldInstance('blurRequired').value = '1';
    Simulate.change(form.getFieldInstance('blurRequired'));
    Simulate.blur(form.getFieldInstance('blurRequired'));
    expect(form.getFieldValue('blurRequired')).to.be('1');
    expect(form.getFieldError('blurRequired')).to.be(undefined);
  });

  it('validateFields works for error', (callback) => {
    form.validateFields((errors, values) => {
      expect(Object.keys(errors).length).to.be(2);
      expect(errors.required.errors.map(e => e.message)).to.eql(['required is required']);
      expect(errors.blurRequired.errors.map(e => e.message)).to.eql(['blurRequired is required']);
      expect(values.normal).to.be(undefined);
      expect(values.blurRequired).to.be(undefined);
      expect(values.required).to.be(undefined);
      callback();
    });
  });

  it('validateFields works for ok', (callback) => {
    form.getFieldInstance('required').value = '2';
    form.getFieldInstance('blurRequired').value = '1';
    Simulate.change(form.getFieldInstance('blurRequired'));
    Simulate.change(form.getFieldInstance('required'));
    form.validateFields((errors, values) => {
      expect(errors).not.to.be.ok();
      expect(values.normal).to.be(undefined);
      expect(values.blurRequired).to.be('1');
      expect(values.required).to.be('2');
      expect(values.foo.a.x).to.be(undefined);
      expect(values.foo.a.y).to.be(undefined);
      expect(values.foo.b[0]).to.be(undefined);
      expect(values.foo.b[1]).to.be(undefined);
      callback();
    });
  });

  it('resetFields works', () => {
    form.getFieldInstance('required').value = '1';
    Simulate.change(form.getFieldInstance('required'));
    expect(form.getFieldValue('required')).to.be('1');
    expect(form.getFieldError('required')).to.be(undefined);
    form.resetFields();
    expect(form.getFieldValue('required')).to.be(undefined);
    expect(form.getFieldError('required')).to.be(undefined);
  });

  it('setFieldsInitialValue works', () => {
    form.setFieldsInitialValue({
      normal: '4',
    });
    form.getFieldInstance('normal').value = '2';
    Simulate.change(form.getFieldInstance('normal'));
    expect(form.getFieldValue('normal')).to.be('2');
    form.resetFields();
    expect(form.getFieldValue('normal')).to.be('4');
  });

  it('setFieldsValue and setFieldsInitialValue for nested field works', () => {
    form.setFieldsInitialValue({
      foo: {
        a: {
          x: '1',
          y: '2',
        },
        b: ['3', '4'],
      },
    });
    form.setFieldsValue({
      foo: {
        a: {
          x: '5',
          y: '6',
        },
        b: ['7', '8'],
      },
    });
    Simulate.change(form.getFieldInstance('foo.a.x'));
    Simulate.change(form.getFieldInstance('foo.a.y'));
    Simulate.change(form.getFieldInstance('foo.b[0]'));
    Simulate.change(form.getFieldInstance('foo.b[1]'));
    expect(isEqual(form.getFieldValue('foo'), {
      a: {
        x: '5',
        y: '6',
      },
      b: ['7', '8'],
    })).to.be(true);
    form.setFieldsValue({ 'foo.a.x': '9' });
    Simulate.change(form.getFieldInstance('foo.a.x'));
    expect(isEqual(form.getFieldValue('foo'), {
      a: {
        x: '9',
        y: '6',
      },
      b: ['7', '8'],
    })).to.be(true);
    form.resetFields();
    expect(isEqual(form.getFieldValue('foo'), {
      a: {
        x: '1',
        y: '2',
      },
      b: ['3', '4'],
    })).to.be(true);
  });

  it('setFieldsValue and setFieldsInitialValue for nested array works', () => {
    form.setFieldsInitialValue({
      a: [
          [undefined, {
            b: {
              c: ['0', '1'],
            },
          }],
      ],
    });
    form.setFieldsValue({
      a: [
          [undefined, {
            b: {
              c: ['2', '3'],
            },
          }],
      ],
    });
    Simulate.change(form.getFieldInstance('a[0][1].b.c[0]'));
    Simulate.change(form.getFieldInstance('a[0][1].b.c[1]'));
    expect(isEqual(form.getFieldValue('a'), [
        [undefined, {
          b: {
            c: ['2', '3'],
          },
        }],
    ])).to.be(true);
    form.setFieldsValue({ 'a[0][1].b.c[0]': '9' });
    Simulate.change(form.getFieldInstance('a[0][1].b.c[0]'));
    expect(isEqual(form.getFieldValue('a'), [
        [undefined, {
          b: {
            c: ['9', '3'],
          },
        }],
    ])).to.be(true);
    form.resetFields();
    expect(isEqual(form.getFieldValue('a'), [
        [undefined, {
          b: {
            c: ['0', '1'],
          },
        }],
    ])).to.be(true);
  });
});
