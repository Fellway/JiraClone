import './App.css';
import React from 'react';
import useToken from './services/AccessTokenService';
import { Route, Routes } from 'react-router-dom'
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

function App() {
  const {token, setToken} = useToken();
  
  if (!token) {
    return <Login setToken={setToken} />
  }
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
      </Route>
    </Routes>
  )
}

export default App;
