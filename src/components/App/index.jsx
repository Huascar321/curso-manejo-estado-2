import React from "react";
import { useTodos } from "./customHooks/useTodos";
import { TodoHeader } from "../TodoHeader";
import { TodoSearch } from "../TodoSearch";
import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoIcon } from "../TodoIcon";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoError } from "../TodoError";
import { TodoLoading } from "../../states/LoadingState";

function App() {
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
    setSearchValue,
    addTodo,
    iconColor,
  } = useTodos();

  return (
    <>
      <div className="container">
        <TodoHeader loading={loading}>
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </TodoHeader>
        <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          searchText={searchValue}
          totalTodos={totalTodos}
          onError={() => <TodoError />}
          onLoading={() => <TodoLoading />}
          onEmptySearchResults={(searchText) => (
            <p style={{ color: "black" }}>
              No hay resultados para {searchText}
            </p>
          )}
          render={(todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              left={
                <TodoIcon
                  iconColor={iconColor}
                  onComplete={() => completeTodo(todo.text)}
                  completed={todo.completed}
                />
              }
              right={
                <TodoIcon
                  iconColor={iconColor}
                  onDelete={() => deleteTodo(todo.text)}
                  completed={todo.completed}
                />
              }
            />
          )}
          renderCounter={() => (
            <TodoCounter
              totalTodos={totalTodos}
              completedTodos={completedTodos}
              loading={loading}
            />
          )}
        >
          {/* {(todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              left={
                <TodoIcon
                  iconColor={iconColor}
                  onComplete={() => completeTodo(todo.text)}
                  completed={todo.completed}
                />
              }
              right={
                <TodoIcon
                  iconColor={iconColor}
                  onDelete={() => deleteTodo(todo.text)}
                  completed={todo.completed}
                />
              }
            />
          )} */}
        </TodoList>

        {!!openModal && (
          <Modal setOpenModal={setOpenModal}>
            <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
          </Modal>
        )}

        <CreateTodoButton setOpenModal={setOpenModal} />
      </div>
    </>
  );
}

export default App;
