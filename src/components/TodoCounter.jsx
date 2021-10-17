import React from "react";
import "./../css/toDoCounter.css";
const TodoCounter = ({ total, completados }) => {
  return (
    <div>
      <h2 className="contador">
        Haz completado {completados} de <span>{total}</span> ToDos
      </h2>
    </div>
  );
};

export default TodoCounter;
