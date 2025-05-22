import { useState } from 'react';
import Header from './components/Header.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center justify-center bg-gray-100 min-h-screen'>
      <Header />
      <h1 className="font-bold text-2xl">Hello World</h1>
    </div>
  )
}

export default App
