import React from 'react';
import { StyledTodo } from '../todo/style';

export default function TodoList({ todos, toggleTodo }) {
  return ( 
    todos.map((todo, index) => {
        return <StyledTodo key={todo.id} toggleTodo={toggleTodo} todo={todo} index={index} />
    })
  )
}
