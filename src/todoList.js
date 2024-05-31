import React from 'react';
import TodoItem from './todoItem';

function TodoList({ todos, removeTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} index={index} todo={todo} removeTodo={removeTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
