# rc-form
---

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
import form from 'rc-form';
@form()
class Form  extends React.Component {
  render() {
    let errors;
    const {getFieldProps, getFieldError, isFieldValidating} = props.form;
    return (<div>
    <input {...getFieldProps('normal')}/>
    <input {...getFieldProps('required',{
      rules:[{required:true}]
    })}/>
    {(errors = getFieldError('required')) ? errors.join(',') : null}
    </div>)
  }
}
```

## API

call form() will return another function:

### React.Component: function(WrappedComponent:React.Component)

will pass the following props to WrappedComponent


### Object:getFieldProps(name, option)

Will create props which can be set on a input/InputComponent which support value and onChange interface.

After set, this will create a binding with this input.

#### name

this input's unique name

#### option.rules

validator rules. see: https://github.com/yiminghe/async-validator

### Error[]: getFieldError(name)

get input's validate errors

### Bool: isFieldValidating(name)

whether this input is validating

## Test Case

http://localhost:8000/tests/runner.html?coverage

## Coverage

http://localhost:8000/node_modules/rc-server/node_modules/node-jscover/lib/front-end/jscoverage.html?w=http://localhost:8000/tests/runner.html?coverage

## License

rc-form is released under the MIT license.
