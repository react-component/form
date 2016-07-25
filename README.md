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
```

## Example

http://localhost:8000/examples/

online example: http://react-component.github.io/form/examples/

## Feature

* support reactjs and even react-native

## Install

[![rc-form](https://nodei.co/npm/rc-form.png)](https://npmjs.org/package/rc-form)

## Usage

```js
import { createForm } from 'rc-form';

@createForm()
class Form extends React.Component {
  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
    });
  }

  render() {
    let errors;
    const {getFieldProps, getFieldError} = this.props.form;
    return (<div>
      <input {...getFieldProps('normal')}/>
      <input {...getFieldProps('required', {
        rules: [{required: true}],
      })}/>
      {(errors = getFieldError('required')) ? errors.join(',') : null}
      <button onClick={this.submit}>submit</button>
    </div>)
  }
}
```

## Note

Do not use stateless function component inside Form component: https://github.com/facebook/react/pull/6534

## createForm(formOption): Function

### formOption.validateMessages: Object

preset messages of [async-validator](https://github.com/yiminghe/async-validator)

### formOption.mapProps: Function(props): Object

Get new props transfered to WrappedComponent. Defaults to props=>props.

### formOption.onFieldsChange(props, fields)

Called when field changed, you can dispatch fields to redux store.

### formOption.mapPropsToFields(props)

convert value from props to fields. used for read fields from redux store.

### formOption.withRef: boolean

Maintain an ref for wrapped component instance, use `refs.wrappedComponent` to access.

createForm() will return another function:

### function(WrappedComponent: React.Component): React.Component

Will pass a object as prop form with the following members to WrappedComponent:

### getFieldProps(name, option): Object

Will create props which can be set on a input/InputComponent which support value and onChange interface.

After set, this will create a binding with this input.

#### name: String

This input's unique name.

#### option.exclusive: boolean

whether set value exclusively. used with radio.

#### option.valuePropName: String

Prop name of component's value field, eg: checkbox should be set to `checked` ...

#### option.getValueFromEvent

Specify how to get value from event. Defaults to

```js
function (e) {
  if (!e || !e.target) {
    return e;
  }
  const { target } = e;
  return target.type === 'checkbox' ? target.checked : target.value;
}
```

#### option.getValueProps

get the component props according to field value. Defaults to

```js
function (value) {
  return { value };
}
```

#### option.initialValue

Initial value of current component.

#### option.normalize(value, prevValue, allValues)

Return normalized value 

#### option.trigger: String

Defaults to `onChange`. Event which is listened to collect form data.

#### option.validate: Object[]

##### option.validate[n].trigger: String|String[]

Event which is listened to validate. 
Defaults to `onChange`, set to falsy to only validate when call props.validateFields.

##### option.validate[n].rules: Object[]

Validator rules. see: [async-validator](https://github.com/yiminghe/async-validator)

### option.validateTrigger && option.rules

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

#### option.validateFirst: Boolean

Defaults to false. whether stop validate on first rule of error for this field.

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

### getFieldError(name): String[]

Get input's validate errors.

### isFieldValidating(name: String): Bool

Whether this input is validating.

### isFieldsValidating(names: String[]): Bool

Whether one of the inputs is validating.

### isSubmitting(): Bool

Whether the form is submitting.

### submit(callback: Function)

Cause isSubmitting to return true, after callback called, isSubmitting return false.

### resetFields([names: String[]])

Reset specified inputs. Defaults to all.

## rc-form/lib/createDOMForm(formOption): Function

createForm enhancement, support props.form.validateFieldsAndScroll

### props.form.validateFieldsAndScroll([fieldNames: String[]], [options: Object], callback: Function(errors, values))

props.form.validateFields enhancement, support scroll to the first invalid form field

#### options.container: HTMLElement

Defaults to first scrollable container of form field(until document).

## Notes

- you can not set same prop name as the value of validateTrigger/trigger.

```js
<input {...getFieldProps('change',{
  onChange: this.iWantToKnow // you must set onChange here
})}>
```

- you can not use ref prop.

```js
<input {...getFieldProps('ref')} />

this.props.form.getFieldInstance('ref') // use this to get ref
```

or

```js
<input {...getFieldProps('ref',{
  ref: this.saveRef // or use function here
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
