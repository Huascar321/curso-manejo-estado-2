import React from "react";
import './TodoList.css';

function TodoList(props) {
  const renderFunc = props.children || props.render;

  return (
    <section className="TodoList-container">
      <ul>
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {props.searchedTodos.map(renderFunc)}
        {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}
        {/* {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)} */}
        <li>
          {props.renderCounter()}
        </li>
      </ul>
    </section>
  );
}

export { TodoList };