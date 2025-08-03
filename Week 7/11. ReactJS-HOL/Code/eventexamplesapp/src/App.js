import React, { useState } from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

  // Handler to increase counter and print messages
  const handleIncrease = () => {
    incrementCount();
    sayHello();
  };

  const incrementCount = () => setCount(prev => prev + 1);

  const decrementCount = () => setCount(prev => prev - 1);

  const sayHello = () => {
    console.log("Hello! Static message from handleIncrease.");
    alert("Hello! Static message from handleIncrease.");
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handleSyntheticEvent = (e) => {
    e.preventDefault(); // Synthetic event
    alert("I was clicked");
  };

  return (
    <div className="App">
      <h1>React Event Examples</h1>
      <h2>Counter: {count}</h2>
      
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>

      <br /><br />

      <button onClick={handleIncrease}>Increase</button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome to React Event Handling!")}>Say Welcome</button>

      <br /><br />

      <button onClick={handleSyntheticEvent}>Synthetic Event Test</button>

      <br /><br />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
