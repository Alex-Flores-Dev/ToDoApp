import React from 'react';
import './App.css';
import { TodoCounter } from '../TodoCounter'
import { TodoContext } from '../TodoContext'
import { TodoSearch } from '../TodoSearch';
import { TodoForm } from '../TodoForm';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

const AppUI = () => {
  const {error,loading,searchedTodos,completeTodo,deleteTodo,openModal,setOpenModal} = React.useContext(TodoContext);
  
    return (
        <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>
                          <TodoList>
                          {error && <p>Desesperate, hubo un error...</p>}
                          {loading && <p>....</p>}
                          {/* {(!loading && !searchedTodos.lenght) && <p>!Crea tu primer App</p>} */}
                          {searchedTodos.map(item=>{
                            return(
                              <TodoItem 
                              key={item.text} 
                              text={item.text} 
                              completed={item.completed}
                              onComplete={()=>completeTodo(item.text)}
                              onDelete = { ()=>deleteTodo(item.text) }
                              />
                            )
                          })}
                        </TodoList>
          <CreateTodoButton
            setOpenModal={setOpenModal}
          />
                          {openModal && (
                            <Modal>
                              <TodoForm/>
                            </Modal>
                          )}
    </React.Fragment>
    );
}

export {AppUI};