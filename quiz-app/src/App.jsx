import { useState } from 'react';
import Header from './components/Header.jsx';
import Quiz  from './components/Quiz.jsx'; 
import Player from './components/Player.jsx';
import './index.css';

function App() {
  return (
    <div className='flex flex-col items-center justify-center bg-gray-100 min-h-screen'>
      <Header />
      <Player playerName="John Doe" age={41} experience="Veteran" skills="expert"/>
      <Quiz/>
    </div>
  )
}

export default App;