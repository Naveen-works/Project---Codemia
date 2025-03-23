import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div>
      <h1 className="text-2xl font-bold">Welcome to Codemia</h1>
      <Outlet /> 
    </div>
    </div>
  )
}

export default App
