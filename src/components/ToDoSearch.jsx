import React, { useContext } from "react";
import "./../css/toDoSearch.css";
import { Context } from "../context";
const ToDoSearch = () => {
  const { search, setSearch } = useContext(Context);

  let searchToDO = (valor) => {
    setSearch(valor);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Buscar..."
        className="TodoSearch"
        value={search}
        onChange={(e) => searchToDO(e.target.value)}
      />
    </div>
  );
};

export { ToDoSearch };
