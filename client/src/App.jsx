import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-6 py-4 bg-purple-900 rounded-lg border-solid border-2 my-0.5 mx-1 border-gray-800">
   
    <div className="flex items-center gap-4">
      <img src="./src/assets/logo-6.png" className="w-12 h-12" alt="Logo" />
      <h1 className="text-white text-2xl font-semibold">Codemia</h1>
      
    </div>

    <div>
      <img src="./src/assets/settings_png.png" className="w-10 h-10" alt="Settings" />
    </div>
  </div>

      <Outlet /> 
    </div>
  )
}

export default App
