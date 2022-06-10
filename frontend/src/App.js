import './App.css';
import React from 'react';
import useToken from './services/AccessTokenService';
import getCookie from './services/CookieService';
import { Route, Routes } from 'react-router-dom'
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";


function App() {
  const {token, setToken} = useToken();
  if (!token) {
    const accessToken = sessionStorage.getItem('access_token');
    console.log(accessToken);
    if (accessToken) {
      return <Dashboard/>
    }
    return <Login setToken={setToken} />
  }
  return <Login setToken={setToken} />
}

export default App;
