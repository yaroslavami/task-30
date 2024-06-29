import React from 'react';
import './App.css';
import LifecycleLogger from './LifecycleLogger';

function App() {
  return (
    <div className="App">
      <h1>Життєвий цикл компонентів</h1>
      <LifecycleLogger />
    </div>
  );
}

export default App;
