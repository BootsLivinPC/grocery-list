import React from 'react';

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
      <form onSubmit={this.handleSubmit}>
        <input 
        required 
        value={this.state.name}
        name="name"
        onChange={this.handleChange}
        placeholder="Add To Grocery List" />
      </form>
    )
  }
}



export default TodoForm;