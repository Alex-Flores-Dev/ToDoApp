import './TodoItem.css'
import { BiListCheck,BiSad } from "react-icons/bi";

function TodoItem(props){
    return (
        <li className="TodoItem">
            <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 
            onClick={props.onComplete}><BiListCheck/></span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span 
            className="Icon Icon-delete" 
            onClick={props.onDelete}><BiSad/></span>
        </li>
    );
}

export {TodoItem};