import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="main-input-container">
      <span className="icon"></span>
      <input placeholder="Search a todo..." onChange={onSearchValueChange} value={searchValue}></input>
    </div>
  );
}

export { TodoSearch };
