import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginContainer from "./components/LoginContainer";
import ProfileContainer from "./components/ProfileContainer";
import TaskContainer from "./components/TaskContainer";
import { AppContextProvider } from "./contexts/AppContext";

function App() {
  return (
    <Router>
      <AppContextProvider>
        <Routes>
          <Route path="/" element={<TaskContainer />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/task-container" element={<TaskContainer />} />
          <Route path="/profile-container" element={<ProfileContainer />} />
        </Routes>
      </AppContextProvider>
    </Router>
  );
}

export default App;
