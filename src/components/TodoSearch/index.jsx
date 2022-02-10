import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue, loading }) {

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="main-input-container">
      <span className="icon"></span>
      <input 
      placeholder="Search a todo..." 
      onChange={onSearchValueChange} 
      value={searchValue}
      disabled={!!loading}
      />
    </div>
  );
}

export { TodoSearch };