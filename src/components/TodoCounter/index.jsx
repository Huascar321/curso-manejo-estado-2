import React from "react";
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos }) {
  return <p className="TodoCounter">You have {completedTodos} of {totalTodos} completed TODOs</p>;
}

export { TodoCounter };
