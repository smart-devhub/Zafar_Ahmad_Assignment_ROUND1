import React from 'react';

import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import {useNavigate} from 'react-router-dom'

function App() {
  const navigate=useNavigate()
  
 React.useEffect(()=>{
  const email =localStorage.getItem("email")
  if(email){
    navigate('/home')
  }else{
    navigate('/')
  }
 },[])
 
  return (
    
     
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      
       
   
  );
}

export default App;
