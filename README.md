# rc-form

React High Order Form Component.

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/rc-form.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-form
[travis-image]: https://img.shields.io/travis/react-component/form.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/form
[coveralls-image]: https://img.shields.io/coveralls/react-component/form.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/form?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/react-component/form.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/react-component/form
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/rc-form.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-form

## Development

```
npm install
npm start
open http://localhost:8000/examples/
```

## Feature

* Support react.js and even react-native
* Validate fields with [async-validator](https://github.com/yiminghe/async-validator/)

## Install

[![rc-form](https://nodei.co/npm/rc-form.png)](https://npmjs.org/package/rc-form)

## Usage

```js
import { createForm } from 'rc-form';

class Form extends React.Component {
  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
    });
  }

  render() {
    let errors;
    const { getFieldProps, getFieldError } = this.props.form;
    return (
      <div>
        <input {...getFieldProps('normal')}/>
        <input {...getFieldProps('required', {
          onChange(){}, // have to write original onChange here if you need
          rules: [{required: true}],
        })}/>
        {(errors = getFieldError('required')) ? errors.join(',') : null}
        <button onClick={this.submit}>submit</button>
      </div>
    );
  }
}

export createForm()(Form);
```

Or a quicker version:

```js
import { createForm } from 'rc-form';

class Form extends React.Component {
  componentWillMount() {
    this.requiredDecorator = this.props.form.getFieldDecorator('required', {
      rules: [{required: true}],
    });
  }

  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
    });
  }

  render() {
    let errors;
    const { getFieldError } = this.props.form;
    return (
      <div>
        {this.requiredDecorator(
          <input onChange={
            // can still write your own onChange
          />
        )}
        {(errors = getFieldError('required')) ? errors.join(',') : null}
        <button onClick={this.submit}>submit</button>
      </div>
    );
  }
}

export createForm()(Form);
```

## createForm(formOption): Function

| Option    | Description                              | Type       | Default |
|-----------|------------------------------------------|------------|---------|
| formOption.validateMessages | Preseted messages of [async-validator](https://github.com/yiminghe/async-validator) | Object | {} |
| formOption.mapProps | Get new props transfered to WrappedComponent. | (props): Object | props => props |
| formOption.onFieldsChange | Called when field changed, you can dispatch fields to redux store. | (props, changedFields): void | NOOP |
| formOption.onValuesChange | Called when value changed. | (props, changedValues): void | NOOP |
| formOption.mapPropsToFields | Convert value from props to fields. Used for read fields from redux store. | (props): Object | NOOP |
| formOption.withRef(deprecated) | Maintain an ref for wrapped component instance, use `refs.wrappedComponent` to access. | boolean | false |

### Note: use wrappedComponentRef instead of withRef after rc-form@1.4.0

```jsx
class Form extends React.Component { ... }

// deprecated
const EnhancedForm = createForm({ withRef: true })(Form);
<EnhancedForm ref="form" />
this.refs.form.refs.wrappedComponent // => The instance of Form

// Recommended
const EnhancedForm = createForm()(Form);
<EnhancedForm wrappedComponentRef={(inst) => this.formRef = inst} />
this.formRef // => The instance of Form
```

## createForm() will return another function

### function(WrappedComponent: React.Component): React.Component

Will pass an object as prop form with the following members to WrappedComponent:

### getFieldProps(name, option): Object

Will create props which can be set on a input/InputComponent which support value and onChange interface.

After set, this will create a binding with this input.

```jsx
<form>
  <input {...getFieldProps('name', { ...options })} />
</form>
```

#### name: String

This input's unique name.

#### option: Object

| Option    | Description                              | Type       | Default |
|-----------|------------------------------------------|------------|---------|
| option.exclusive(deprecated) | Whether set value exclusively. Used with radio. | boolean | false |
| option.valuePropName | Prop name of component's value field, eg: checkbox should be set to `checked` ... | String | 'value' |
| option.getValueProps | Get the component props according to field value. | (value): Object | (value) => ({ value }) |
| option.initialValue | Initial value of current component. | any | - |
| option.normalize | Return normalized value. | (value, prevValue, allValues): Object | - |
| option.trigger | Event which is listened to collect form data. | String | 'onChange' |
| option.validateTrigger | Event which is listened to validate. Set to falsy to only validate when call props.validateFields. | String|String[] | 'onChange' |
| option.rules | Validator rules. see: [async-validator](https://github.com/yiminghe/async-validator) | Object[] | - |
| option.validateFirst | Whether stop validate on first rule of error for this field. | boolean | false |
| option.fieldNameProp | Where to store the `name` argument of `getFieldProps`. | String | - |
| option.fieldMetaProp | Where to store the meta data of `getFieldProps`. | String | - |
| option.validate | | Object[] | - |
| option.validate[n].trigger | Event which is listened to validate. Set to falsy to only validate when call props.validateFields. | String|String[] | 'onChange' |
| option.validate[n].rules | Validator rules. see: [async-validator](https://github.com/yiminghe/async-validator) | Object[] | - |
| option.getValueFromEvent | Specify how to get value from event. | (e): any | See below |

```js
function (e) {
  if (!e || !e.target) {
    return e;
  }
  const { target } = e;
  return target.type === 'checkbox' ? target.checked : target.value;
}
```

##### Tips

```js
{
  validateTrigger: 'onBlur',
  rules: [{required: true}],
}
// is the shorthand of
{
  validate: [{
    trigger: 'onBlur',
    rules: [required: true],
  }],
}
```

### getFieldDecorator(name:String, option: Object): (React.Node): React.Node

Similar to `getFieldProps`, but add some helper warnings and you can write onXX directly inside React.Node props:

```jsx
<form>
  {getFieldDecorator('name', otherOptions)(<input />)}
</form>
```

### getFieldsValue([fieldNames: String[]])

Get fields value by fieldNames.

### getFieldValue(fieldName: String)

Get field value by fieldName.

### getFieldInstance(fieldName: String)

Get field react public instance by fieldName.

### setFieldsValue(obj: Object)

Set fields value by kv object.

### setFieldsInitialValue(obj: Object)

Set fields initialValue by kv object. use for reset and initial display/value.

### setFields(obj: Object)

Set fields by kv object. each field can contain errors and value member.

### validateFields([fieldNames: String[]], [options: Object], callback: Function(errors, values))

Validate and get fields value by fieldNames.

options is the same as validate method of [async-validator](https://github.com/yiminghe/async-validator).
And add `force` and `scroll`. `scroll` is the same as [dom-scroll-into-view's function parameter `config`](https://github.com/yiminghe/dom-scroll-into-view#function-parameter).

#### options.force: Boolean

Defaults to false. Whether to validate fields which have been validated(caused by validateTrigger).

### getFieldsError(names): Object{ [name]: String[] }

Get inputs' validate errors.

### getFieldError(name): String[]

Get input's validate errors.

### isFieldValidating(name: String): Bool

Whether this input is validating.

### isFieldsValidating(names: String[]): Bool

Whether one of the inputs is validating.

### isFieldTouched(name: String): Bool

Whether this input's value had been change.

### isFieldsTouched(names: String[]): Bool

Whether one of the inputs' values had been change.

### isSubmitting(): Bool

Whether the form is submitting.

### submit(callback: Function)

Cause isSubmitting to return true, after callback called, isSubmitting return false.

### resetFields([names: String[]])

Reset specified inputs. Defaults to all.


## rc-form/lib/createDOMForm(formOption): Function

createDOMForm enhancement, support props.form.validateFieldsAndScroll

### props.form.validateFieldsAndScroll([fieldNames: String[]], [options: Object], callback: Function(errors, values))

props.form.validateFields enhancement, support scroll to the first invalid form field

#### options.container: HTMLElement

Defaults to first scrollable container of form field(until document).


## Notes

- Do not use stateless function component inside Form component: https://github.com/facebook/react/pull/6534

- you can not set same prop name as the value of validateTrigger/trigger for getFieldProps

```js
<input {...getFieldProps('change',{
  onChange: this.iWantToKnow // you must set onChange here or use getFieldDecorator to write inside <input>
})}>
```

- you can not use ref prop for getFieldProps

```js
<input {...getFieldProps('ref')} />

this.props.form.getFieldInstance('ref') // use this to get ref
```

or

```js
<input {...getFieldProps('ref',{
  ref: this.saveRef // use function here or use getFieldDecorator to write inside <input> (only allow function)
})} />
```

## Test Case

```
npm test
npm run chrome-test
```

## Coverage

```
npm run coverage
```

open coverage/ dir

## License

rc-form is released under the MIT license.
