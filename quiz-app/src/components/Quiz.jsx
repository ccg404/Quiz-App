import { useState, useEffect } from 'react';

export default function Quiz(props) {
  const [timeLeft, setTime] = useState(60);
  const [count, setCount] = useState(0)

  /*useEffect(() => {
    if (timeLeft === 0) {
      alerting();
      setTime(60);
      return;
    }
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime -1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);
*/
  function alerting(){
    alert("Time's up! Please submit your answers.");
  }

  function increment(){
    setCount((prevCount) => prevCount + 1);
    if (count >= 5){
      alert("stop clicking the button!");
      setCount(0);
    }
  }

  return (
    <div className='flex flex-col items-center justify-normal p-14 w-5xl h-auto bg-white shadow-lg rounded-lg m-10'>
      <div>
        <p>Time Left: {timeLeft}</p>
        <p>Retries: {count}</p>
      </div>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h2 className="text-2xl font-bold mb-4">Welcome {props.name}</h2>
        <p className="text-gray-600 mb-6">Answer the following questions:</p>
      </div>
      <div>
        <div className='h-5/6 w-2xl p-4 bg-gray-50 shadow-md rounded-lg flex flex-col items-center justify-start gap-8'>
          <h2 className='font-bold text-2xl'>Question 1</h2>
          <p className='text-gray-700'>What is the capital of France?</p>
          <div className='flex flex-row flex-wrap items-center justify-center gap-2 p-5 h-auto w-xs '>
            <button className='bg-blue-500 text-white px-6 py-3 w-32 h-16 rounded hover:bg-blue-600 text-lg' id='btn1' onClick={() => alerting}> Paris</button>
            <button className='bg-blue-500 text-white px-6 py-3 w-32 h-16 rounded hover:bg-blue-600 text-lg' id='btn2'> London</button>
            <button className='bg-blue-500 text-white px-6 py-3 w-32 h-16 rounded hover:bg-blue-600 text-lg' id='btn3'> Berlin</button>
            <button className='bg-blue-500 text-white px-6 py-3 w-32 h-16 rounded hover:bg-blue-600 text-lg' id='btn4'onClick={increment}> Madrid</button>
          </div>
          <div className='flex flex-row items-center justify-center gap-4 p-5 w-full h-20'>
            <button className='p-4 bg-green-700 rounded-xl text-white border-b-8 border-b-green-800 active:border-b-2'>Continue</button>
          </div>
        </div>
      </div>
    </div>  
  );
}