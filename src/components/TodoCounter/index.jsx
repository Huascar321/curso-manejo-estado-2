import React from "react";
import './TodoCounter.css';
import { TodoContext } from "../../TodoContext";
function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return <p className="TodoCounter">You have {completedTodos} of {totalTodos} completed TODOs</p>;
}

export { TodoCounter };
