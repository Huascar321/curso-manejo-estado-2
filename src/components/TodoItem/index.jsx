import React from "react";
import { TodoIcon } from "../TodoIcon";
import "./TodoItem.css";

function TodoItem({ left,right,completed,text }) {
  return (
    <>
      <li className="item">
        {left}
        <p className={`${completed && "text--active"}`}>{text}</p>
        {right}
      </li>
      <hr></hr>
    </>
  );
}

export { TodoItem };
