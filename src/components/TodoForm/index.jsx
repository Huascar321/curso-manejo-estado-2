import React from "react";
import { TodoContext } from "../../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Create a TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="What are you planning?"
      />
      <div>
        <button className="cancel-button" type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className="add-button" type="submit">Add</button>
      </div>
    </form>
  );
}

export { TodoForm };
