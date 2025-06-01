import { useState } from 'react';
import Header from './components/Header.jsx';
import Quiz  from './components/Quiz-.jsx'; 

function App() {
  const [count, setCount] = useState(0)
  const playerName = 'Player 1';

  return (
    <div className='flex flex-col items-center justify-center bg-gray-100 min-h-screen'>
      <Header />
      <Quiz name={playerName}/>
    </div>
  )
}

export default App;
