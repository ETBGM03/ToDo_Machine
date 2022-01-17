import React, { useEffect, useState } from "react";

//creacion de un custom hook que nos permite guardar información en el localStorage
export function useLocalStorage(itemName, initialVlaue) {
  const [toDo, setToDo] = useState(initialVlaue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        let lst = localStorage.getItem(itemName);
        let toDosDefault;

        if (!lst) {
          localStorage.setItem(itemName, JSON.stringify(initialVlaue));
          toDosDefault = initialVlaue;
        } else {
          toDosDefault = JSON.parse(lst);
        }
        setToDo(toDosDefault);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  }, []);

  //permite simular un puente entre localstorage y nuestro array de ToDo para mantener los datos
  let guardarToDoList = (nuevosToDOsLst) => {
    try {
      //convertir a string
      let str = JSON.stringify(nuevosToDOsLst);
      localStorage.setItem(itemName, str);
      setToDo(nuevosToDOsLst);
    } catch (error) {
      setError(error);
    }
  };

  return { toDo, guardarToDoList, loading, error };
}
