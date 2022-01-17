import React, { useContext } from "react";
import { ToDoSearch } from "../components/ToDoSearch";
import { ToDoCounter } from "../components/ToDoCounter";
import { ToDoItem } from "../components/ToDoItem";
import { CreateToDo } from "../components/CreateToDo";
import { ToDoList } from "../components/ToDoList";
import { Context } from "../context/index";
import { Modal } from "./Modal";
import { FormToDo } from "./FormToDo";
const AppUI = () => {
  const {
    error,
    loading,
    toDoCompletado,
    toDoEliminado,
    toDosBuscados,
    totalToDo,
    modal,
    setModal,
  } = useContext(Context);

  return (
    <>
      <ToDoCounter />
      <ToDoSearch />
      {error && <span>Hubo un error</span>},
      {loading && <span>Cargando...</span>},
      {!loading && !totalToDo && <h2>No hay ToDos, ¡crea el primero!</h2>}
      <ToDoList>
        {toDosBuscados.map(({ id, name, complete }) => (
          <ToDoItem
            key={id}
            name={name}
            completed={complete}
            completado={() => toDoCompletado(id)}
            eliminado={() => toDoEliminado(id)}
          />
        ))}
      </ToDoList>
      {modal && (
        <Modal>
          <FormToDo />
        </Modal>
      )}
      <CreateToDo setModal={setModal} />
    </>
  );
};

export { AppUI };
