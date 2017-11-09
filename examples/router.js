/* eslint react/no-multi-comp:0, no-console:0 */

import React from 'react';
import PropTypes from 'prop-types';
import { createForm, createFormField } from 'rc-form';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { createRootContainer, createContainer } from 'react-data-binding';
import { createHashHistory } from 'history';

const history = createHashHistory();

const style = `
.region p {
  border: 1px solid red;
  padding: 5px;
  margin: 10px;
}
.error {
  color: red;
}
`;

class App extends React.Component {
  static propTypes = {
    location: PropTypes.object,
    children: PropTypes.object,
  };
  onClick = (e) => {
    e.preventDefault();
    history.goBack();
  }
  render() {
    const { location } = this.props;
    return (<div>
      <style dangerouslySetInnerHTML={{ __html: style }}/>
      <div>header {location.pathname === '/' ? null :
        <a href="#" onClick={this.onClick}>back</a>}
      </div>
      <div>
        {this.props.children}
      </div>
    </div>);
  }
}

App = createRootContainer()(App);

function onClick(name) {
  this.props.setStoreState({
    formState: {
      ...this.props.getStoreState().formState,
      city: {
        value: name,
      },
    },
  });
  history.pushState('/');
}

class CitySelector extends React.Component {
  static propTypes = {
    setStoreState: PropTypes.func,
    getStoreState: PropTypes.func,
  };
  static defaultProps = {
    onChange: () => {},
  };
  render() {
    return (<div className="region">
      <div onClick={onClick.bind(this, 'sh')}>
        shanghai
      </div>
      <div onClick={onClick.bind(this, 'hz')}>
        hangzhou
      </div>
    </div>);
  }
}

CitySelector = createContainer()(CitySelector);

class CityInput extends React.Component {
  static propTypes = {
    value: PropTypes.any,
  };
  onClick = (e) => {
    e.preventDefault();
    history.pushState({}, '/city-selector');
  }
  render() {
    return (<a href="#" onClick={this.onClick}>{this.props.value || 'please select'}</a>);
  }
}

class Form extends React.Component {
  static propTypes = {
    form: PropTypes.object,
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((error, values) => {
      console.log(error || 'ok', values);
    });
    // console.log(this.props.form.getFieldsValue());
  }
  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    return (<div className="region">
      <div>
        <div>user:
          <input {...getFieldProps('user', {
            rules: [{
              required: true,
            }],
          })}
          /></div>
        {getFieldError('user') ?
          <div className="error">{getFieldError('user').join(',')}</div> :
          null}
      </div>
      <div>
        <div>city:
          <CityInput {...getFieldProps('city', {
            rules: [{
              required: true,
            }],
            validatorTrigger: false,
            trigger: false,
          })}
          /></div>
        {getFieldError('city') ?
          <div className="error">{getFieldError('city').join(',')}</div> :
          null}
      </div>
      <div>
        <button onClick={this.onSubmit}>submit</button>
      </div>
    </div>);
  }
}

Form = createForm({
  mapPropsToFields(props) {
    return props.formState ? {
      city: createFormField(props.formState.city),
      user: createFormField(props.formState.user),
    } : {};
  },
  onFieldsChange(props, fields) {
    props.setStoreState({
      formState: {
        ...props.formState,
        ...fields,
      },
    });
  },
})(Form);

Form = createContainer((state) => {
  return {
    formState: state.formState,
  };
})(Form);

const routes = {
  path: '/',
  component: App,
  indexRoute: {
    component: Form,
  },
  childRoutes: [{
    path: 'city-selector',
    component: CitySelector,
  }],
};

render(
  <div style={{ margin: 20 }}>
    <h1>integrate with react-router</h1>
    <Router history={history}>{routes}</Router>
  </div>, document.getElementById('__react-content'));
