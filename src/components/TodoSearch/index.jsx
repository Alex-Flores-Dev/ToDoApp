import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

const TodoSearch = () => {
    const {searchValue,setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange=(event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    
    return (
        <input 
        className="TodoSearch" 
        type="text" 
        placeholder="Hi"
        value={searchValue}
        onChange={onSearchValueChange}
        />
    );
}

export {TodoSearch};