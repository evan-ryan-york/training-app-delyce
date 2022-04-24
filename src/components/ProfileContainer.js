import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {useAppContext} from "../contexts/AppContext";
import Profile from "./Profile";
import Navbar from "./Navbar";

export default function ProfileContainer(){
    const { isLoggedIn, loading } = useAppContext();
    const navigate = useNavigate();

    useEffect(()=>{
        if(isLoggedIn===false){
            navigate("/login")
        }
    },[isLoggedIn]);

  return (
      <>
        <Navbar/>
        <Profile />
      </>
  );
}