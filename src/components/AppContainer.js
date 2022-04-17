import React from "react";
import LoginContainer from "./LoginContainer";
import TaskContainer from "./TaskContainer";
import { useAppContext } from "../contexts/AppContext";

export default function AppContainer() {
  const { isLoggedIn } = useAppContext();
  return <>{isLoggedIn ? <TaskContainer /> : <LoginContainer />}</>;
}
