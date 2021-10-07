import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm(){
    const [newTodoValue,setNewTodoValue]=React.useState('');
    const{
        addTodo,
        openModal,
        setOpenModal,
    }=React.useContext(TodoContext);

    const onSubmit  = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(!openModal);
    }
    const onCancel=()=>{
        setOpenModal(!openModal);
    }

    const onChange=(event)=>{
        setNewTodoValue(event.target.value);
    };
    return(
        <form onSubmit={onSubmit}>
            <label>Please write a ToDo task</label>
            <textarea placeholder="Escribe algo" value={newTodoValue} onChange={onChange}/>
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button-add" type="submit">Add</button>
                <button className="TodoForm-button TodoForm-button-cancel" onClick={onCancel} type="button">Cancel</button>
            </div>
        </form>
    )
}
export {TodoForm};