import { useState } from "react";
import "./Counter.css";

function MyCounter() {
  const [counter, setCounter] = useState(0);

  //We want to add a method so that everytime the increment button is clicked, its going to add +1.
  const incrementCounter = () => {
    // setCounter(counter + 1);
    //**currentCounter represents the (current state) of the counter before the update*
    setCounter((currentCounter) => {
      return currentCounter + 1;
    });
  };
  //Same thing here but the opposite(- 1).
  // Using setTimeout and enabling a delay by 1 second when i click the decrement btn
  const decrementCounter = () => {
    setTimeout(() => {
      //**currentCounter represents the (current state) of the counter before the update*

      setCounter((currentCounter) => {
        return currentCounter - 1;
      });
    });
  };

  return (
    <div className='Container'>
      <h1>Learn UseState: Number</h1>
      <br />
      <h3>Current Counter: {counter}</h3>
      <button onClick={decrementCounter} className='btn btn-second'>
        Decrement counter
      </button>
      <button onClick={incrementCounter} className='btn btn-primary'>
        Increment counter
      </button>
    </div>
  );
}

export default MyCounter;
