import React from "react";
/* import { TodoProvider } from "../../TodoContext";
import { AppUI } from "./AppUI"; */

const tempStyle = {
  color: 'black'
};

function App() {
  const [state, setState] = React.useState('estado compartido');

  return (
    <>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
      </TodoHeader>
      <TodoList>
        <TodoItem state={state}/>
      </TodoList>
    </>
  );
}

function TodoHeader({ children }) {
  return (
    <header>
      {children}
    </header>
  );
}

function TodoList({ children }) {
  return (
    <section className="todoList-container">
      {children}
    </section>
  );
}

function TodoCounter() {
  return <p style={tempStyle}>TodoCounter</p>;
}

function TodoSearch() {
  return <p style={tempStyle}>TodoSearch</p>;
}

function TodoItem({ state }) {
  return <p style={tempStyle}>TodoItem: {state}</p>;
}
/* function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
} */

export default App;
