import React, { useContext } from "react";
import "./../css/toDoCounter.css";
import { Context } from "./../context/index";

const ToDoCounter = () => {
  const { toDoCompleted, totalToDo } = useContext(Context);
  return (
    <div>
      <h2 className="contador">
        Haz completado {toDoCompleted} de <span>{totalToDo}</span> ToDos
      </h2>
    </div>
  );
};

export { ToDoCounter };
