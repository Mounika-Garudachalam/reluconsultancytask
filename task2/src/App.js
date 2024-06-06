import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Sidebar from './home/Sidebar';
import Sidecard from './home/Sidecard';
import Main from './home/Main';

function App() {
  return (
    <BrowserRouter>
    <div className='app'>
        <Sidebar/>
        <Main/>
        <Sidecard/>
    </div>
    </BrowserRouter>
  );
}

export default App;
