import { SetStateAction, useState } from "react";
import "./TextComponent.css";

function TextComponent() {
  // UseState with an empty string
  const [name, setName] = useState("");

  //updateName function that takes an event object
  //as a parameter to handle input change event.
  //
  const updateName = (event: { target: { value: SetStateAction<string> } }) => {
    setName(event.target.value);
  };

  return (
    <div className='.Text-container'>
      <h1>Learn useState: string</h1>
      <br />
      <h3>My name is: {name}</h3>
      <br />
      <div>
        <label>What is your name?</label>
        <br />
        <input type='text' onChange={updateName} />
      </div>
    </div>
  );
}
export default TextComponent;
