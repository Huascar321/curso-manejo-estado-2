import React from "react";
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return <p className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>You have {completedTodos} of {totalTodos} completed TODOs</p>;
}

export { TodoCounter };
