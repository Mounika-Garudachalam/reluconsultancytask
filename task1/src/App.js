import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Page from './pages/Page.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/page'  element={<Page/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
