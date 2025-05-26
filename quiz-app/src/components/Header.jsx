import React from 'react'


function header() {
  return (
    <header className='flex flex-col items-center justify-center gap-4 p-4 w-full h-4/5'>
      <h1 className="font-bold text-4xl">Quiz App</h1>
      <p className="text-gray-500">Test your knowledge with our quiz app!</p>
    </header>
  )
}

export default header