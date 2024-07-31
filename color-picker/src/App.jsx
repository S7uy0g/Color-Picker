import React, { useState } from 'react';
import './App.css';
import ColorPicker from './color-picker';

function App() {
  const [count, setCount] = useState(5);

  const increaseCount = () => {
    setCount(prevCount => (prevCount < 10 ? prevCount + 1 : prevCount));
  };

  const decreaseCount = () => {
    setCount(prevCount => (prevCount > 1 ? prevCount - 1 : prevCount));
  };

  return (
    <>
      <h1>ColorPicker</h1>
      <div className='controls'>
        <button onClick={decreaseCount}>-</button>
        <span>{count}</span>
        <button onClick={increaseCount}>+</button>
      </div>
      <div className='mainContainer'>
        {Array.from({ length: count }).map((_, index) => (
          <ColorPicker key={index} />
        ))}
      </div>
    </>
  );
}

export default App;
