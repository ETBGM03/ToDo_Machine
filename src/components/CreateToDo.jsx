import React from "react";
import "./../css/createToDo.css";
const CreateToDo = () => {
  let addToDO = () => {
    alert("hola");
  };
  return (
    <button className="CreateTodoButton" type="submit" onClick={addToDO}>
      +
    </button>
  );
};

export default CreateToDo;
