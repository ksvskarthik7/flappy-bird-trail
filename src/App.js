import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const height = window.innerHeight;
  const [hop, sethop] = useState(30);
  const mystyle = {
    marginTop: `${hop}px`,
  };
  useEffect(() => {
    sethop(hop + 85);
  }, []);
  return (
    <div>
      <button onClick={() => sethop(hop + 10)}>click me</button>
      <h1 style={mystyle}>Me</h1>

      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
