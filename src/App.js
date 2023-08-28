import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [count, setcount] = useState(10);
  const mystyle = {
    marginTop: '40px',
    width: '20px',
    height: '20px',
    backgroundColor: 'red',
    marginLeft: `${count}px`,
  };
  function click() {
    const interval = setInterval(() => {
      setcount((count) => count + 1);
    }, 16);

    setTimeout(() => {
      clearInterval(interval);
    }, 5000);
  }
  return (
    <div>
      <div style={mystyle}></div>
      <button style={{ marginTop: '30px' }} onClick={click}>
        click me
      </button>
    </div>
  );
}
