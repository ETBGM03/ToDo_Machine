import React from "react";
import "./../css/toDoSearch.css";
const ToDoSearch = ({ search, setSearch }) => {
  let searchToDO = (valor) => {
    setSearch(valor);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Buscar.."
        className="TodoSearch"
        value={search}
        onChange={(e) => searchToDO(e.target.value)}
      />
      <h2>{search}</h2>
    </div>
  );
};

export default ToDoSearch;
