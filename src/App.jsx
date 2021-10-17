import React, { useState } from "react";
import "./App.css";
import ToDoSearch from "./components/ToDoSearch";
import ToDoCounter from "./components/TodoCounter";
import ToDoItem from "./components/ToDoItem";
import CreateToDo from "./components/CreateToDo";
import ToDoList from "./components/ToDoList";

function useLocalStorage(itemName, initialVlaue) {
  let lst = localStorage.getItem(itemName);
  let toDosDefault;

  if (!lst) {
    localStorage.setItem(itemName, JSON.stringify(initialVlaue));
    toDosDefault = initialVlaue;
  } else {
    toDosDefault = JSON.parse(lst);
  }

  const [toDo, setToDo] = useState(toDosDefault);

  //permite simular un puente entre localstorage y nuestro estado para mantener los datos
  let guardarToDOLst = (nuevosToDOsLst) => {
    //convertir a string
    let str = JSON.stringify(nuevosToDOsLst);
    localStorage.setItem(itemName, str);
    setToDo(nuevosToDOsLst);
  };

  return [toDo, guardarToDOLst];
}

function App() {
  //creacion de un custom hook

  // let toDos = [
  //   {
  //     name: "blabla",
  //     complete: true,
  //   },
  //   {
  //     name: "hola2",
  //     complete: false,
  //   },
  //   {
  //     name: "hola",
  //     complete: false,
  //   },
  // ];
  const [toDo, setToDo] = useLocalStorage("toDos_v1", []);
  const [search, setSearch] = useState("");

  let toDoCompleted = toDo.filter((el) => el.complete !== false);
  let totalToDo = toDo.length;

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
  let toDOCompletado = (name) => {
    let index = toDosBuscados.findIndex((el) => el.name === name);
    let nuevosToDos = [...toDo];

    nuevosToDos[index] = {
      name,
      complete: true,
    };

    guardarToDOLst(nuevosToDos);
  };

  let toDoEliminado = (name) => {
    let index = toDosBuscados.filter((el) => el.name !== name);
    // let nuevosToDos = [...toDo];
    // nuevosToDos.splice(index, 1);
    setToDo(index);
  };

  useEffect(() => {}, []);
  return (
    <>
      <ToDoCounter total={totalToDo} completados={toDoCompleted.length} />
      <ToDoSearch search={search} setSearch={setSearch} />
      <ToDoList>
        {toDosBuscados.map((el) => (
          <ToDoItem
            key={el.name}
            name={el.name}
            completed={el.complete}
            completado={() => toDOCompletado(el.name)}
            eliminado={() => toDoEliminado(el.name)}
          />
        ))}
      </ToDoList>
      <CreateToDo />
    </>
  );
}

export default App;
