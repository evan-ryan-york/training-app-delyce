import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import NewTask from "./NewTask";
import TaskList from "./TaskList";
import { db } from "../firebase";
import {useNavigate} from "react-router-dom"
import { collection, getDocs } from "firebase/firestore";
import {useAppContext} from "../contexts/AppContext"

export default function TaskContainer(props) {
  const [tasks, setTasks] = useState();
  const {submitTrigger, isLoggedIn} = useAppContext();
  const navigate = useNavigate();

  useEffect(()=>{
    if(isLoggedIn === false){
      navigate("/login")
    }
  },[isLoggedIn])

  useEffect(() => {
    const getTasks = async () => {
      const tempArray = [];
      const tasksRef = collection(db, "tasks-ryan");
      const snapshot = await getDocs(tasksRef);
      snapshot.forEach((task) => {
        tempArray.push({ id: task.id, ...task.data() });
      });
      setTasks(tempArray);
    };
    getTasks();
  }, [submitTrigger]);

  return (
    <>
      <Navbar />

      <div className="tasks-container">
        <h1>Manage To Dos</h1>
        <NewTask />
        <TaskList tasks={tasks} />
      </div>
    </>
  );
}
