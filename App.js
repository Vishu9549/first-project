
import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function increaseHandler() {
    setCount(count + 1);
  }

  function decreaseHandler() {
    setCount(count - 1);
  }

  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-2xl font-bold mb-4">
        Increment & Decrement
      </div>
      <div className="flex items-center space-x-4 mb-4">
        <button
          onClick={increaseHandler}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          +
        </button>
        <div className="text-3xl font-semibold">{count}</div>
        <button
          onClick={decreaseHandler}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          -
        </button>
      </div>
      <div>
        <button
          onClick={resetHandler}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
