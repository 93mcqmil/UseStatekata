import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  //We want to add a method so that everytime the increment button is clicked, its going to add +1.
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  //Same thing here but the opposite(- 1).
  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className='Container'>
      <h1>Learn UseState: Number</h1>
      <br />
      <h3>Current Counter: {counter}</h3>
      <button onClick={incrementCounter} className='btn btn-primary'>
        Increment counter
      </button>
      <button onClick={decrementCounter} className='btn btn-primary'>
        Decrementcounter
      </button>
    </div>
  );
}

export default App;
