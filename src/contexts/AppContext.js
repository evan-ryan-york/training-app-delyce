import React, { useContext, createContext, useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { blankNewTask, blankNewTaskIsValid } from "../libraries/objects";


const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [newTask, setNewTask] = useState(blankNewTask);
  const [submitTrigger, setSubmitTrigger] = useState(false);
  const [newTaskIsValid, setNewTaskIsValid] = useState(blankNewTaskIsValid);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleSubmitClick = async () => {
    const tasksRef = collection(db, "tasks-ryan");
    await addDoc(tasksRef, newTask);
    setNewTask(blankNewTask);
    setNewTaskIsValid(blankNewTaskIsValid);
    setSubmitTrigger(() => {
      return !submitTrigger;
    });
  };



  const value = {
    isLoggedIn,
    setIsLoggedIn,
    newTask,
    setNewTask,
    newTaskIsValid,
    setNewTaskIsValid,
    handleSubmitClick
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
