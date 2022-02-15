import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export default function Todo({ className, todo, toggleTodo, index }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    return (
        <Draggable key={todo.id} draggableId={todo.id} index={index}>
            {(provided) => (
                <div className={className} {...provided.draggableProps} ref={provided.innerRef}>
                    <div className="dragHandle" {...provided.dragHandleProps}>
                        <span></span>
                    </div>
                    <input type="checkbox" class="check-with-label" id={todo.id} checked={todo.complete} onChange={handleTodoClick }/>
                    <label className="label-for-check" htmlFor={todo.id}>{todo.name}</label>
                </div>
            )}
        </Draggable>
    )
}
