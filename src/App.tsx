
import React from 'react'
import User from './Pages/User'
import Login from "./Components/login"
import Detail from './Pages/Detail';
import Dashboard from './Pages/Dashboard';
import { Route, Routes, useLocation } from "react-router-dom";  



function App(){
  

  return (
     <main className='container'>

       
       <Routes location ={location} key={location.pathname}> 
       <Route path="/" element={<Login/>} /> 
       <Route path="detail" element={<Detail/>} />  
       <Route path="/dashboard" element={<Dashboard/>} />  
        <Route path="/user" element={<User/>}>
        

        </Route>
        
        
      
       
      </Routes>
     </main>
  )
}

export default App
