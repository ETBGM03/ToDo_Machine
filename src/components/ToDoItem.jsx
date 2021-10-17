import React from "react";
import "./../css/toDoItem.css";

const ToDoItem = ({ name, completed, completado, eliminado }) => {
  // let toDOCompleted = () => {
  //   alert(`ya completaste el ToDO: ${name}`);
  // };
  // let toDoDeleted = () => {
  //   alert(`Borraste el ToDO: ${name}`);
  // };
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
export default ToDoItem;
