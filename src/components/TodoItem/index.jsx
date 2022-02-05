import React from "react";
import { TodoIcon } from "../TodoIcon";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <>
      <li className="item">
        <TodoIcon onComplete={props.onComplete} completed={props.completed}/>
        <p className={`${props.completed && "text--active"}`}>{props.text}</p>
        <TodoIcon onDelete={props.onDelete} completed={props.completed}/>
      </li>
      <hr></hr>
    </>
  );
}

export { TodoItem };
