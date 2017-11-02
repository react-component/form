/* eslint-disable no-undef, react/prop-types, react/no-multi-comp */

import React from 'react';
import ReactDOM from 'react-dom';
import { Simulate } from 'react-dom/test-utils';
import createForm from '../src/createForm';

class Test extends React.Component {
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <input {...getFieldProps('normal')} />
        <input
          {...getFieldProps('required', {
            rules: [{
              required: true,
            }],
          })}
        />

        <input
          {...getFieldProps('blurRequired', {
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

      </div>
    );
  }
}

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
    expect(form.getFieldValue('normal')).toBe(undefined);
    Simulate.change(form.getFieldInstance('normal'));
    expect(form.getFieldValue('normal')).toBe('');
    form.getFieldInstance('normal').value = '1';
    Simulate.change(form.getFieldInstance('normal'));
    expect(form.getFieldValue('normal')).toBe('1');
  });

  it.skip('collect nested array value', () => {
    form.getFieldInstance('a[0][1].b.c[0]').value = '0';
    form.getFieldInstance('a[0][1].b.c[1]').value = '1';
    Simulate.change(form.getFieldInstance('a[0][1].b.c[0]'));
    Simulate.change(form.getFieldInstance('a[0][1].b.c[1]'));
    expect(form.getFieldValue('a')).toEqual([
      [undefined, {
        b: {
          c: ['0', '1'],
        },
      }],
    ]);
    expect(form.getFieldValue('a[0][1].b.c[0]')).toBe('0');
    expect(form.getFieldValue('a[0][1].b.c[1]')).toBe('1');
  });

  it.skip('collect nested value', () => {
    form.getFieldInstance('foo.a.x').value = '1';
    form.getFieldInstance('foo.a.y').value = '2';
    form.getFieldInstance('foo.b[0]').value = '3';
    form.getFieldInstance('foo.b[1]').value = '4';
    Simulate.change(form.getFieldInstance('foo.a.x'));
    Simulate.change(form.getFieldInstance('foo.a.y'));
    Simulate.change(form.getFieldInstance('foo.b[0]'));
    Simulate.change(form.getFieldInstance('foo.b[1]'));
    expect(form.getFieldValue('foo')).toEqual({
      a: {
        x: '1',
        y: '2',
      },
      b: ['3', '4'],
    });
    expect(form.getFieldValue('foo.a.x')).toBe('1');
    expect(form.getFieldValue('foo.a.y')).toBe('2');
    expect(form.getFieldValue('foo.b[0]')).toBe('3');
    expect(form.getFieldValue('foo.b[1]')).toBe('4');
  });

  it('validate value', () => {
    expect(form.getFieldValue('required')).toBe(undefined);
    Simulate.change(form.getFieldInstance('required'));
    expect(form.getFieldValue('required')).toBe('');
    expect(form.getFieldError('required')).toEqual(['required is required']);
    form.getFieldInstance('required').value = '1';
    Simulate.change(form.getFieldInstance('required'));
    expect(form.getFieldValue('required')).toBe('1');
    expect(form.getFieldError('required')).toBe(undefined);
  });


  it('validate trigger value', () => {
    expect(form.getFieldValue('blurRequired')).toBe(undefined);
    Simulate.change(form.getFieldInstance('blurRequired'));
    expect(form.getFieldValue('blurRequired')).toBe('');
    expect(form.getFieldError('blurRequired')).toBe(undefined);
    Simulate.blur(form.getFieldInstance('blurRequired'));
    expect(form.getFieldValue('blurRequired')).toBe('');
    expect(form.getFieldError('blurRequired')).toEqual(['blurRequired is required']);
    form.getFieldInstance('blurRequired').value = '1';
    Simulate.change(form.getFieldInstance('blurRequired'));
    Simulate.blur(form.getFieldInstance('blurRequired'));
    expect(form.getFieldValue('blurRequired')).toBe('1');
    expect(form.getFieldError('blurRequired')).toBe(undefined);
  });

  it('validateFields works for error', (callback) => {
    form.validateFields((errors, values) => {
      expect(Object.keys(errors).length).toBe(2);
      expect(errors.required.errors.map(e => e.message)).toEqual(['required is required']);
      expect(errors.blurRequired.errors.map(e => e.message)).toEqual(['blurRequired is required']);
      expect(values.normal).toBe(undefined);
      expect(values.blurRequired).toBe(undefined);
      expect(values.required).toBe(undefined);
      callback();
    });
  });

  it('validateFields works for ok', (callback) => {
    form.getFieldInstance('required').value = '2';
    form.getFieldInstance('blurRequired').value = '1';
    Simulate.change(form.getFieldInstance('blurRequired'));
    Simulate.change(form.getFieldInstance('required'));
    form.validateFields((errors, values) => {
      expect(errors).toBeFalsy();
      expect(values.normal).toBe(undefined);
      expect(values.blurRequired).toBe('1');
      expect(values.required).toBe('2');
      expect(values.foo.a.x).toBe(undefined);
      expect(values.foo.a.y).toBe(undefined);
      expect(values.foo.b[0]).toBe(undefined);
      expect(values.foo.b[1]).toBe(undefined);
      callback();
    });
  });

  it('resetFields works', () => {
    form.getFieldInstance('required').value = '1';
    Simulate.change(form.getFieldInstance('required'));
    expect(form.getFieldValue('required')).toBe('1');
    expect(form.getFieldError('required')).toBe(undefined);
    form.resetFields();
    expect(form.getFieldValue('required')).toBe(undefined);
    expect(form.getFieldError('required')).toBe(undefined);
  });

  it('setFieldsInitialValue works', () => {
    form.setFieldsInitialValue({
      normal: '4',
    });
    form.getFieldInstance('normal').value = '2';
    Simulate.change(form.getFieldInstance('normal'));
    expect(form.getFieldValue('normal')).toBe('2');
    form.resetFields();
    expect(form.getFieldValue('normal')).toBe('4');
  });

  it.skip('setFieldsValue and setFieldsInitialValue for nested field works', () => {
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
    expect(form.getFieldValue('foo')).toEqual({
      a: {
        x: '5',
        y: '6',
      },
      b: ['7', '8'],
    });
    form.setFieldsValue({ 'foo.a.x': '9' });
    Simulate.change(form.getFieldInstance('foo.a.x'));
    expect(form.getFieldValue('foo')).toEqual({
      a: {
        x: '9',
        y: '6',
      },
      b: ['7', '8'],
    });
    form.resetFields();
    expect(form.getFieldValue('foo')).toEqual({
      a: {
        x: '1',
        y: '2',
      },
      b: ['3', '4'],
    });
  });

  it.skip('setFieldsValue and setFieldsInitialValue for nested array works', () => {
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
    expect(form.getFieldValue('a')).toEqual([
      [undefined, {
        b: {
          c: ['2', '3'],
        },
      }],
    ]);
    form.setFieldsValue({ 'a[0][1].b.c[0]': '9' });
    Simulate.change(form.getFieldInstance('a[0][1].b.c[0]'));
    expect(form.getFieldValue('a')).toEqual([
      [undefined, {
        b: {
          c: ['9', '3'],
        },
      }],
    ]);
    form.resetFields();
    expect(form.getFieldValue('a')).toEqual([
      [undefined, {
        b: {
          c: ['0', '1'],
        },
      }],
    ]);
  });

  it('jsx works', () => {
    class TestComponent extends React.Component {
      render() {
        const { getFieldProps } = this.props.form;
        return (
          <div>
            <input {...getFieldProps('required', {
              rules: [{
                required: true,
                message: <b>1</b>,
              }],
            })}
            />
          </div>
        );
      }
    }
    TestComponent = createForm({
      withRef: true,
    })(TestComponent);
    component = ReactDOM.render(<TestComponent />, container);
    component = component.refs.wrappedComponent;
    form = component.props.form;
    Simulate.change(form.getFieldInstance('required'));
    expect(form.getFieldError('required').length).toBe(1);
    expect(form.getFieldError('required')[0].type).toBe('b');
  });
});
