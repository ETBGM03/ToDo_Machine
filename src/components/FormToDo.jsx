import React, { useContext } from "react";
import { Context } from "../context";

const FormToDo = () => {
  const { addToDoModal, setModal } = useContext(Context);

  const cancelar = (e) => {
    e.preventDefault();
    setModal(false);
  };

  const agregar = (e) => {
    e.preventDefault();
    let textoModal = document.getElementById("inputToDo").value;
    addToDoModal(textoModal);
    e.target.reset();
    setModal(false);
  };
  return (
    <>
      <form onSubmit={agregar} className="app-modal">
        <textarea
          cols="30"
          id="inputToDo"
          name="inputToDo"
          placeholder="Escribe el nombre de tu tarea"
          rows="10"
        ></textarea>
        <div className="buttons">
          <button onClick={cancelar} type="button">
            Cancelar
          </button>
          <button type="submit">Agregar</button>
        </div>
      </form>
    </>
  );
};

export { FormToDo };
