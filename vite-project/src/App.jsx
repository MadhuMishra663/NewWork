import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { BoardProvider } from './components/context/BoardContext';

function App() {
  return (
    <>
      <Header />
      <BoardProvider>
        <div className='content'>
          <Sidebar />
          <Main />
        </div>
      </BoardProvider>
    </>
  );
}

export default App;
