import React from "react";
import "./../css/toDoList.css";
const ToDoList = ({ children }) => {
  return (
    <section>
      <ul>{children}</ul>
    </section>
  );
};

export { ToDoList };
