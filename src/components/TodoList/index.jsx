import React from "react";
import './TodoList.css';

function TodoList({ children }) {
  return (
    <section>
      {children}
    </section>
  );
}

export { TodoList };
