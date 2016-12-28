/* eslint react/no-multi-comp:0, no-console:0 */

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createForm } from 'rc-form';

let Form = React.createClass({
  propTypes: {
    form: PropTypes.object,
  },

  onSubmit(e) {
    e.preventDefault();
    console.log('Values of member[0].name.firstname and a[0][1].b.c[0]');
    console.log(this.props.form.getFieldsValue(['member[0].name.firstname', 'a[0][1].b.c[0]']));
    console.log('Values of all fields');
    console.log(this.props.form.getFieldsValue());

    this.props.form.validateFields((error, values) => {
      if (!error) {
        console.log('ok', values);
      } else {
        console.log('error', error, values);
      }
    });
  },

  onChange(e) {
    console.log(e.target.value);
  },

  setField() {
    this.props.form.setFieldsValue({
      member: [
        {
          name: {
            firstname: 'm1 first',
            lastname: 'm1 last',
          },
        },
        {
          name: {
            firstname: 'm2 first',
            lastname: 'm2 last',
          },
        },
      ],
      a: [
        [undefined, {
          b: {
            c: ['Value of a[0][1].b.c[0]'],
          },
        }],
      ],
      w: {
        x: {
          y: {
            z: ['Value of w.x.y.z[0]'],
          },
        },
      },
    });
  },

  resetFields() {
    console.log('reset');
    this.props.form.resetFields();
  },

  render() {
    const { getFieldDecorator, getFieldError } = this.props.form;

    return (
      <form onSubmit={this.onSubmit}>
        <div>Member 0 firstname</div>
        {getFieldDecorator('member[0].name.firstname', {
          initialValue: '',
          rules: [{
            required: true,
            message: 'What\'s the member_0 firstname?',
          }],
        })(
          <input
            onChange={this.onChange}
          />
        )}
        <div style={{ color: 'red' }}>
          {(getFieldError('member[0].name.firstname') || []).join(', ')}
        </div>

        <div>Member 0 lastname</div>
        {getFieldDecorator('member[0].name.lastname', {
          initialValue: '',
          rules: [{
            required: true,
            message: 'What\'s the member_0 lastname?',
          }],
        })(
          <input
            onChange={this.onChange}
          />
        )}
        <div style={{ color: 'red' }}>
          {(getFieldError('member[0].name.firstname') || []).join(', ')}
        </div>

        <div>Member 1 firstname</div>
        {getFieldDecorator('member[1].name.firstname', {
          initialValue: '',
          rules: [{
            required: true,
            message: 'What\'s the member_1 fistname?',
          }],
        })(
          <input
            onChange={this.onChange}
          />
        )}
        <div style={{ color: 'red' }}>
          {(getFieldError('member[1].name.firstname') || []).join(', ')}
        </div>

        <div>Member 1 lastname</div>
        {getFieldDecorator('member[1].name.lastname', {
          initialValue: '',
          rules: [{
            required: true,
            message: 'What\'s the member_1 lastname?',
          }],
        })(
          <input
            onChange={this.onChange}
          />
        )}
        <div style={{ color: 'red' }}>
          {(getFieldError('member[1].name.firstname') || []).join(', ')}
        </div>

        <div>a[0][1].b.c[0]</div>
        {getFieldDecorator('a[0][1].b.c[0]', {
          initialValue: '',
          rules: [{
            required: true,
            message: 'What\'s a[0][1].b.c[0]?',
          }],
        })(
          <input
            onChange={this.onChange}
          />
        )}
        <div style={{ color: 'red' }}>
          {(getFieldError('a[0][1].b.c[0]') || []).join(', ')}
        </div>

        <div>w.x.y.z[0]</div>
        {getFieldDecorator('w.x.y.z[0]', {
          initialValue: '',
          rules: [{
            required: true,
            message: 'What\'s w.x.y.z[0]?',
          }],
        })(
          <input
            onChange={this.onChange}
          />
        )}
        <div style={{ color: 'red' }}>
          {(getFieldError('w.x.y.z[0]') || []).join(', ')}
        </div>

        <button onClick={this.setField}>Set field</button>
        <button onClick={this.resetFields}>Reset fields</button>
        <button>Submit</button>
      </form>
    );
  },
});

Form = createForm()(Form);

class App extends React.Component {
  render() {
    return (<div>
      <h2>setFieldsValue</h2>
      <Form />
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('__react-content'));
