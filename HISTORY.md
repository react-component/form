# History
----
## 1.3.0 / 2017-01-07

- support touch checking: https://github.com/react-component/form/pull/56

## 1.2.0 / 2017-01-05

- support onValuesChange: https://github.com/react-component/form/pull/55

## 1.1.0 / 2016-12-28

- support nested field: https://github.com/react-component/form/pull/48

## 1.0.0 / 2016-08-29

- support getFieldDecorator. stable.

## 0.17.0 / 2016-06-12

- support checkbox radio https://github.com/react-component/form/pull/21
- add exclusive config

## 0.16.0 / 2016-05-19

- move instance to this.instances

## 0.15.0 / 2016-03-28

- add getValueFromEvent/getValueProps


## 0.14.0 / 2016-02-27

- remove refComponent prop.(defaults to true), so you must use getFieldInstance method to get instance instead of ref

## 0.13.0 / 2016-02-14

- support rc-form/lib/createDOMForm

## 0.12.0 / 2016-02-02

- support refComponent/mapProps option for createForm to scroll error fields into view.

## 0.11.0 / 2016-02-02

- support validateMessages of createForm option.

## 0.10.0 / 2016-01-27

- support setFieldsInitialValue/submit/isFieldsValidating/isSubmitting method for this.props.form

## 0.9.0 / 2016-01-18

- support force, force to revalidate.

```
this.props.validateFields(['xx'], {force: true}).
```

## 0.8.0 / 2016-01-13

- support validate/validateFirst option for getFieldProps 

## 0.7.0 / 2015-12-29

- support this.props.form.resetFields

## 0.6.0 / 2015-12-28

- support normalize in getFieldProps option
