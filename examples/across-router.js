/* eslint react/no-multi-comp:0, no-console:0 */

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createForm } from 'rc-form';
import { Router, Route } from 'react-router';
import { regionStyle } from './styles';

let ChildForm = React.createClass({
  propTypes: {
    initialValue: PropTypes.object,
    form: PropTypes.object,
    onDestroy: PropTypes.func,
  },
  componentWillUnmount() {
    this.props.onDestroy(this.props.form.getFieldsValue());
  },
  onClick() {
    window.history.back();
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (<div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: '100%',
        background: 'white',
      }}
    >
      <h2>child form</h2>
      <div style={ regionStyle }>
        name:
        <input {...getFieldProps('name', {
          initialValue: this.props.initialValue.name,
        })}
        />
      </div>
      <div style={ regionStyle }>
        <button onClick={this.onClick}>submit</button>
      </div>
    </div>);
  },
});

ChildForm = createForm()(ChildForm);

const Picker = React.createClass({
  propTypes: {
    childForm: PropTypes.object,
    onChange: PropTypes.func,
    value: PropTypes.object,
  },
  onClick() {
    window.location.hash = '/open';
  },
  render() {
    const { value, childForm } = this.props;
    const valueEl = value ?
      <div onClick={this.onClick}>{value.name}</div> :
      <div onClick={this.onClick}>please select</div>;
    return (<div>
      {valueEl}
      {childForm ? React.cloneElement(childForm, {
        onDestroy: this.props.onChange,
        initialValue: value || {},
      }) : null}
    </div>);
  },
});

let ParentForm = React.createClass({
  propTypes: {
    initialValue: PropTypes.object,
    form: PropTypes.object,
    children: PropTypes.any,
  },
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (<div>
      <h2>parent form</h2>
      <div style={ regionStyle }>
        family: <input {...getFieldProps('family')}/>
      </div>
      <div style={ regionStyle }>
        <Picker childForm={this.props.children} {...getFieldProps('picker')}/>
      </div>

      <div style={ regionStyle }>
        <button onClick={this.onClick}>submit</button>
      </div>
    </div>);
  },
});

ParentForm = createForm()(ParentForm);

ReactDOM.render((<div
  style={{
    height: 300,
    position: 'relative',
  }}
>
  <Router>
    <Route path="/" component={ParentForm}>
      <Route path="/open" component={ChildForm}/>
    </Route>
  </Router>
</div>), document.getElementById('__react-content'));
