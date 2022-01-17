import React, { useContext } from "react";
import { Context } from "../context";
import "./../css/toDoItem.css";

const ToDoItem = ({ completado, eliminado, completed, name }) => {
  // const { toDoCompletado, toDoEliminado } = useContext(Context);
  return (
    <li className="TodoItem">
      <span
        onClick={completado}
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
      >
        √
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {name}
      </p>
      <span onClick={eliminado} className="Icon Icon-delete">
        X
      </span>
    </li>
  );
};
export { ToDoItem };
