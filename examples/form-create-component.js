import React from 'react';
import ReactDOM from 'react-dom';
import { FormCreate } from '../src';

class MyPage extends React.Component {
  state = {
    result: 0,
  }

  form;

  handleAdd = (e) => {
    e.preventDefault();
    this.form.validateFields((err, { value }) => {
      if (!err) {
        this.setState({ result: this.state.result + +value });
      }
    });
  }

  render() {
    const { result } = this.state;
    return (
      <FormCreate>
        {form => {
          const { getFieldDecorator } = form;
          this.form = form;
          return (
            <form onSubmit={this.handleAdd}>
              result:{result}
              <br/>
              value:
              {getFieldDecorator('value', {
                rules: [{ required: true }],
              })(<input type="number" />)}
              <br/>
              <button type="submit">Add</button>
              <br/>
            </form>
          );
        }}
      </FormCreate>
    );
  }
}

ReactDOM.render(<MyPage />, document.getElementById('__react-content'));
