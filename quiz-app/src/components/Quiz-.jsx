import React from 'react'
import { useState, useEffect } from 'react';

export default function Quiz() {
  const [timeLeft, setTime] = useState(60);

  useEffect(() => {
    if (timeLeft === 0) return
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime -1);
    }, 1000)
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className='border-2 flex flex-col items-center justify-normal gap-4 p-4 w-3xl h-96 bg-white shadow-lg rounded-lg'>
      <div>
        <p>Time Left: {timeLeft}</p>
      </div>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h2 className="text-2xl font-bold mb-4">Quiz Title</h2>
        <p className="text-gray-600 mb-6">Answer the following questions:</p>
      </div>
      <div>
      
      </div>
    </div>
  )
}
