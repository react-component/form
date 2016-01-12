# rc-form

React High Order Form Component.

Note: This is unstable, under development now.

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

* support ie8,ie8+,chrome,firefox,safari

## install

[![rc-form](https://nodei.co/npm/rc-form.png)](https://npmjs.org/package/rc-form)

## Usage

```js
import { createForm } from 'rc-form';

@createForm()
class Form  extends React.Component {
  render() {
    let errors;
    const {getFieldProps, getFieldError, isFieldValidating} = props.form;
    return (<div>
    <input {...getFieldProps('normal')}/>
    <input {...getFieldProps('required',{
      validate: [{
        trigger: 'onBlur onChange',
        rules:[{required:true}],
      }],
    })}/>
    {(errors = getFieldError('required')) ? errors.join(',') : null}
    </div>)
  }
}
```

## Function: createForm(formOption)

### formOption.onFieldsChange(props, fields)

Called when field changed, you can dispatch fields to redux store.

### formOption.mapPropsToFields(props)

convert value from props to fields. used for read fields from redux store.

createForm() will return another function:

### React.Component: function(WrappedComponent: React.Component)

Will pass a object as prop form with the following members to WrappedComponent:

### Object: getFieldProps(name, option)

Will create props which can be set on a input/InputComponent which support value and onChange interface.

After set, this will create a binding with this input.

#### name

type: String. this input's unique name.

#### option.valuePropName

prop name of component's value field, eg: checkbox should set checked ... 

#### option.initialValue

the initial value of current component.

#### option.normalize(value, prevValue, allValues)

return normalized value 

#### option.trigger

type: String. event which is listened to collect form data. Default to 'onChange', set to false to stop collect form data.

#### option.validate

type: Object[]

##### option.validate[n].trigger

type: String. event which is listened to validate. Default to 'onChange', set to `null` to only validate when call props.validateFields.

##### option.validate[n].rules

type: Object[]. validator rules. see: https://github.com/yiminghe/async-validator

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

### getFieldsValue([fieldNames: String[]])

Get fields value by fieldNames.

### getFieldValue(fieldName: String)

Get field value by fieldName.

### setFieldsValue(obj: Object)

set fields value by kv object.

### setFields(obj: Object)

set fields by kv object. each field can contain errors and value member.

### validateFields([fieldNames: String[]], callback: Function(errors, values))

Validate and get fields value by fieldNames.

### String[]: getFieldError(name)

Get input's validate errors.

### Bool: isFieldValidating(name)

Whether this input is validating.

### resetFields([names: String[]])

reset specified inputs. defaults to all.

## Test Case

http://localhost:8000/tests/runner.html?coverage

## Coverage

http://localhost:8000/node_modules/rc-server/node_modules/node-jscover/lib/front-end/jscoverage.html?w=http://localhost:8000/tests/runner.html?coverage

## License

rc-form is released under the MIT license.
