import React, { useState } from "react";
import { useLocalStorage } from "./../hooks/useLocalStorage";

//creamos un context en react
const Context = React.createContext();

function ToDoProvider({ children }) {
  // const toDoss = [
  //   { id: 1, name: "Trainging sofka", complete: false },
  //   { id: 2, name: "Entrar a sofka", complete: false },
  //   { id: 3, name: "Buena presentacion en la re", complete: false },
  //   { id: 4, name: "Prepararme para la empresa", complete: false },
  // ];

  const {
    toDo,
    guardarToDoList: setToDo,
    loading,
    error,
  } = useLocalStorage("toDos_v1", []);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  //saber cuántos ToDos hay completados
  let toDoCompleted = toDo.filter((el) => el.complete !== false).length;
  let totalToDo = toDo.length;

  //hacemos el filtrado por busqueda escrita en el input
  let toDosBuscados = [];

  if (!search.length >= 1) {
    toDosBuscados = toDo;
  } else {
    toDosBuscados = toDo.filter((el) => {
      let textoToDO = el.name.toLowerCase();
      let textoABuscar = search.toLowerCase();
      return textoToDO.includes(textoABuscar);
    });
  }

  //eliminar y marcar completado el ToDO
  let toDoCompletado = (id) => {
    let index = toDo.findIndex((el) => el.id === id);
    let nuevosToDos = [...toDo];
    nuevosToDos[index] = {
      id: nuevosToDos[index].id,
      name: nuevosToDos[index].name,
      complete: true,
    };
    setToDo(nuevosToDos);
  };

  let toDoEliminado = (id) => {
    let index = toDo.filter((el) => el.id !== id);
    setToDo(index);
  };

  //agregar ToDos desde el modal
  const addToDoModal = (name) => {
    if (!name.trim()) {
      alert("El nombre está vacío, escribe algo");
      return;
    }
    let toDos = [...toDo];
    toDos.push({
      id: toDos.length + 1,
      name,
      complete: false,
    });
    setToDo(toDos);
  };
  return (
    <Context.Provider
      value={{
        toDo,
        setToDo,
        loading,
        error,
        toDoCompleted,
        totalToDo,
        toDosBuscados,
        search,
        modal,
        addToDoModal,
        setModal,
        setSearch,
        toDoCompletado,
        toDoEliminado,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ToDoProvider };
