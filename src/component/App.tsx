import React, { useState } from 'react';
import '@/component/App.css';

function App() {
  const [count, triggerCount] = useState(0);
  console.log(CONFIG);
  return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        <button onClick={() => triggerCount(count + 1)}>+1***</button>
        <p>Edit <code>src/App.tsx</code> and save to reload.</p>
        <a className="App-link">Learn React</a>
      </header>
    </div>
  );
}

export default App;
