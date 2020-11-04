/* eslint-disable react/prop-types, react/no-render-return-value */
import React from 'react'
import ReactDOM from 'react-dom'
import { Simulate } from 'react-dom/test-utils'
import createDOMForm from '../src/createDOMForm'

class Test extends React.Component {
  check = (rule, value, callback) => {
    setTimeout(() => {
      if (value === '1') {
        callback()
      } else {
        callback(new Error('must be 1'))
      }
    }, 100)
  }

  render() {
    const { getFieldProps } = this.props.form
    return (
      <div>
        <input {...getFieldProps('normal')} />
        <input
          {...getFieldProps('async', {
            rules: [this.check],
          })}
        />
      </div>
    )
  }
}

Test = createDOMForm({
  withRef: true,
})(Test)

describe('Test validateFieldsAndScroll', () => {
  let container
  let component
  let form

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    component = ReactDOM.render(<Test />, container)
    component = component.refs.wrappedComponent
    form = component.props.form
  })

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container)
    document.body.removeChild(container)
  })

  it('validate validateFieldsAndScroll promise', (done) => {
    form.getFieldInstance('async').value = '1'
    Simulate.change(form.getFieldInstance('async'))
    return form.validateFieldsAndScroll().then(values => {
      expect(values.normal).toBe(undefined)
      expect(values.async).toBe('1')
      done()
    })
  })
})
