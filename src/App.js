import logo from './logo.svg';
import './App.css';
//import { useEffect, useState } from 'react';
//import axios from 'axios';  

import {Home} from './Home';
import {Customer} from './Customer';  
import {Product} from './Product';
import {Sales} from './Sales';  
import {Store} from './Store';
import {Navigation} from './Navigation';  


import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter> 
     <div className="container">
      <h3> REACT PROJECT</h3>
      <Navigation />
      

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/Customer' element={<Customer/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/Sales' element={<Sales/>}/>
        <Route path='/Store' element={<Store/>}/>
        

      </Routes>
      </div>

    </BrowserRouter>
   
    
 
     
    
  );
}

export default App;
