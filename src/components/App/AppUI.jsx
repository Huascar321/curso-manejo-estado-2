import React from "react";
import { TodoContext } from "../../TodoContext";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { ThreeDots } from "../../states/LoadingState";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completedTodos,
    completeTodo,
    totalTodos,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <div className="container">
        <section className="main">
          <h1>やること</h1>
          <TodoSearch />
        </section>
        <TodoList total={totalTodos} completed={completedTodos}>
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
          {error && <p className="effect-p">Desespérate, hubo un error...</p>}
          {loading && (
            <ThreeDots/>
          )}
        </TodoList>

        {!!openModal && (
          <Modal setOpenModal={setOpenModal}>
            <TodoForm />
          </Modal>
        )}

        <CreateTodoButton setOpenModal={setOpenModal} />
      </div>
    </>
  );
}

export { AppUI };
