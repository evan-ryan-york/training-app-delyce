import React from "react";
import {Link} from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

export default function Navbar() {
  const { setIsLoggedIn, loggedInUser, handleLogout } = useAppContext();

  return (
    <nav>
      <Link to="/task-container" className="NavLink">My Tasks</Link>
      <Link to="/profile-container"  className="NavLink">My Profile</Link>
      {loggedInUser && (
      <span className="NavLink">{loggedInUser.displayName}</span>
      )}
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}