import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx"
import LoginHome from "./pages/LoginHome.jsx"
import Test from "./pages/Test.jsx"
import svg from "./art/design.svg"

function App() {



  return (
    <div style={{ height: '100vh', width: '100vw', marginLeft: '-10px', paddingRight: '10px', backgroundImage: `url(${svg})` }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginHome />}/>
            <Route path="/dashboard" element={<Home />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
