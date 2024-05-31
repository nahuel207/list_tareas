import React from 'react';

function TodoItem({ todo, index, removeTodo }) {
  return (
    <li>
      {todo.text}
      <button onClick={() => removeTodo(index)}>Eliminar</button>
    </li>
  );
}

export default TodoItem;
