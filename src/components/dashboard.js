import React from 'react';
import useToken from './useToken';
import Login from './login';
import {
    useNavigate,
  } from "react-router-dom";

export default function Dashboard() {
    let navigate = useNavigate();
    function logout () {
        sessionStorage.clear()
        navigate("/")
    }
    const { token, setToken } = useToken();
    if(!token) {
        return <Login setToken={setToken} />
      }
  return(
    <>
    <h2>Dashboard</h2>
    <button onClick={logout}>Logout</button>
    </>
  );
}