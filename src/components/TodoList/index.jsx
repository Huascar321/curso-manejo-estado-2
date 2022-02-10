import { render } from "@testing-library/react";
import React from "react";
import './TodoList.css';

function TodoList(props) {
  return (
    <section className="TodoList-container">
      <ul>
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {props.searchedTodos.map(props.render)}
        <li>
          {props.renderCounter()}
        </li>
      </ul>
    </section>
  );
}

export { TodoList };
