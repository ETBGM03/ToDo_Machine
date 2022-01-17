import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import { AppUI } from "./components/AppUI";
import { ToDoProvider } from "./context/index";
function App() {
  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export default App;
