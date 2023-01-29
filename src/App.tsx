import React from 'react';

import './App.css';
import Login from './components/Login';
import {Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import {useNavigate} from 'react-router-dom'

function App() {
  const navigate=useNavigate()
  const email =localStorage.getItem("email")
 React.useEffect(()=>{
  
  if(email){
    navigate('/home')
  }else{
    navigate('/login')
  }
 },[email,navigate])

 React.useEffect(()=>{
  if(!localStorage.getItem("email")){
     navigate('/login')
  }
 })
 
  return (
    
     
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      
       
   
  );
}

export default App;
