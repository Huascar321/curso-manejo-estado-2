import React from "react";
import "./TodoForm.css";

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");

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
        <button className="add-button" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
