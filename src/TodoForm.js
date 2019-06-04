import React from 'react';
import {Form, } from 'semantic-ui-react'


class TodoForm extends React.Component {
 constructor(props) {
   super(props);
   this.state = { name: " ", };
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 };
  
  handleChange(e){
    this.setState({ name: e.target.value });
  }
  
  handleSubmit(e)  {
    e.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: ''})
    console.log(this.state.name)
  }


  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
        required 
        value={this.state.name}
        name="name"
        onChange={this.handleChange}
        placeholder="Add To Grocery List" />
      </Form>
    )
  }
}



export default TodoForm;