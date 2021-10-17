import React from "react";
import "./../css/toDoList.css";
const ToDoList = (props) => {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
};

export default ToDoList;
