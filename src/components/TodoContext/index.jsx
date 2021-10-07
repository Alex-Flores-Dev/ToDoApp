import React from "react";
import { useLocalStorage } from "./userLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){

    const {
        item:todos,
        saveItem:saveTodos,
        loading,
        error,
      }= useLocalStorage('TODO_V1',[]);
    
      const [searchValue,setSearchValue]=React.useState('');
      const [openModal,setOpenModal] = React.useState(false);

      const completedTodos=todos.filter(todo=>todo.completed).length;
      const totalTodos = todos.length;
      
      let searchedTodos=[];
    
      if(!searchValue.length>=1){
        searchedTodos=todos;
      }else{
        searchedTodos=todos.filter(todo=>{
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
      }
    
      const addTodo = (text) =>{
        const newTodoList = [...todos];
        newTodoList.push({
          completed:false,
          text,
        });
        saveTodos(newTodoList);
      }
      const completeTodo = (text) =>{
        const todoIndex = todos.findIndex(item => item.text === text);
        const newTodoList = [...todos];
        newTodoList[todoIndex].completed=true;
        saveTodos(newTodoList);
      }
    
      const deleteTodo = (text)=>{
        const newTodoList= todos.filter(item => item.text !== text);
        saveTodos(newTodoList); 
      }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            addTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext,TodoProvider };