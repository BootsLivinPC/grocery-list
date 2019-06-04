import React from 'react';


const Todo = (props) => (
  <li 
  style={ props.complete ? {...styles.todo, ...styles.complete } : styles.todo }
  onClick={() => props.todoClick(props.id)}
  >
  {props.name}
  </li>
);

const styles = {
  todo: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' },
};

export default Todo;