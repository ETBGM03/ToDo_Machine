import React from "react";
import "./../css/createToDo.css";
const CreateToDo = ({ setModal }) => {
  return (
    <button
      className="CreateTodoButton"
      type="submit"
      onClick={() => setModal((modalState) => !modalState)}
    >
      +
    </button>
  );
};

export { CreateToDo };
