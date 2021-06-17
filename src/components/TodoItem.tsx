import React from "react";
import { render } from "react-dom";
import './Todo.css'

interface TodoItemProps {
  name: string;
  onDelete : (idx : number) => void;
  idx : number
  
}

function TodoItem(props: TodoItemProps) {
  return(
    <div>
      <span> {"‣" + props.name} </span>
      <button className = "delete" onClick = {e=>props.onDelete(props.idx)}> 삭제 </button>
    </div>
  )
}


export default TodoItem;