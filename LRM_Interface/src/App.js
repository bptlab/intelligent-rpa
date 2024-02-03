
import React from 'react';
import Header from './components/Header';
import Home from './components/HomePage';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import { HashRouter } from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <HashRouter>
         <Header/>  
           <Routes>
                <Route path="/" element={<Home/>} /> 
           </Routes> 
    </HashRouter>
    </div>
  );
}

export default App;
