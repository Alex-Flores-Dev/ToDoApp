import { TodoContext } from '../TodoContext';
import React from 'react';
import './TodoCounter.css'

const TodoCounter = () => {
    const {totalTodos,completedTodos} = React.useContext(TodoContext);
    return (
        <h2 className="Title">Hi man, you have {totalTodos} these are {completedTodos} ToDo App</h2>
    );
}

export {TodoCounter}; 