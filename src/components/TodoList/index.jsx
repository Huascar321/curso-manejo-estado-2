import React from "react";
import { TodoCounter } from "../TodoCounter";
import './TodoList.css';

function TodoList(props) {
  return (
    <section>
      <ul>
        {props.children}
        <li>
          <TodoCounter total={props.total} completed={props.completed}/>
        </li>
      </ul>
    </section>
  );
}

export { TodoList };
