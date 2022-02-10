import React from "react";
import { TodoContext } from "../../TodoContext";
import { TodoHeader } from "../TodoHeader";
import { TodoSearch } from "../TodoSearch";
import { TodoCounter } from "../TodoCounter";
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
    searchValue, 
    setSearchValue
  } = React.useContext(TodoContext);
  return (
    <>
      <div className="container">
        <TodoHeader>
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
        </TodoHeader>
        <TodoList total={totalTodos} completed={completedTodos}>
          <ul>
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
            <li>
              <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos}/>
            </li>
          </ul>
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
