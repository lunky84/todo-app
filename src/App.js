import React, { useState, useRef, useEffect } from 'react';
import TodoList from './components/todoList'
import { v4 as uuidv4 } from 'uuid';
import { GlobalStyles } from './globalStyles.styles';
import { AppWrapper } from './components/appWrapper/style';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() =>  {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

 
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem)

    setTodos(items);
  }

  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId='todos'>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} >
                <TodoList todos={todos} toggleTodo={toggleTodo} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <input onKeyDown={handleKeyDown} className="toDoInput" ref={todoNameRef} type="text" />
        <button className="button-primary" onClick={handleAddTodo}>Add task</button>
        <button className="button-secondary" onClick={handleClearTodos}>Clear completed tasks</button>
        <div className="remainingCount">{todos.filter(todo => !todo.complete).length} left to do</div>
      </AppWrapper>
    </>
  )
}

export default App;
