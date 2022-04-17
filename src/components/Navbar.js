import React from "react";
import { useAppContext } from "../contexts/AppContext";

export default function Navbar() {
  const { setIsLoggedIn } = useAppContext();

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <nav>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}
