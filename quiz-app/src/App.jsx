import { useState } from 'react';
import Header from './components/Header.jsx';
import Quiz  from './components/Quiz-.jsx'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center justify-center bg-gray-100 min-h-screen'>
      <Header />
      <Quiz />
    </div>
  )
}

export default App
