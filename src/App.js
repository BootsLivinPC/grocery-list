import React from 'react';
import List from './List';
import TodoForm from './TodoForm';



class App extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
  todos: [
    {id: 1, name: "Milk", complete: true, },
    {id: 2, name: "Eggs", complete: false, },
    {id: 3, name: "Cheese", complete: true, },
  ]
};
this.addItem = this.addItem.bind(this);
  }


getUniqueId = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);
}
 
addItem(name) {
  const todo = {name, id: this.getUniqueId(), complete: false, };
  this.setState({ todos: [todo, ...this.state.todos], });
};

handleClick = (id) => {
  this.setState({
    todos: this.state.todos.map( todo => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    })
  })
}

 render() {
   return (
     <div className="App">
      <TodoForm addItem={this.addItem} />
      <List name="Grocery List" items={this.state.todos} todoClick={this.handleClick} />
    </div>
   );
 }
  
}

export default App;

