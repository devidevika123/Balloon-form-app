import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Balloon from './Balloon';
import Form from './Form';
import "./App.css"
function App() {
  return (
    <>
     
       <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/balloon" element={<Balloon />} />
        <Route path="/form" element={<Form/>} />
         </Routes>  
      
      
    
    </>
  );
}

export default App;
