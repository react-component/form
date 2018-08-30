import React from 'react';
import ReactDOM from 'react-dom';
import { FormCreate } from '../src';

class MyPage extends React.Component {
  state = {
    result: 0,
  }

  componentDidMount() {
    this.setValue();
  }

  setValue = () => {
    this.form.setFieldsValue({ value: 100 });
  }

  handleAdd = (e) => {
    e.preventDefault();
    this.form.validateFields((err, { value }) => {
      if (!err) {
        this.setState({ result: this.state.result + +value });
      }
    });
  }

  form

  render() {
    return (
      <FormCreate>
        {form => {
          const { getFieldDecorator } = form;
          this.form = form;
          return (
            <form onSubmit={this.handleAdd}>
              result:{this.state.result}
              {getFieldDecorator('value', {
                rules: [{ required: true }],
              })(<input type="number" />)}
              <button type="submit">Add</button>
            </form>
          );
        }}
      </FormCreate>
    );
  }
}

ReactDOM.render(<MyPage />, document.getElementById('__react-content'));
