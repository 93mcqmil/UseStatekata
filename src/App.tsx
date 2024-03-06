import { useState } from "react";
import TextComponent from "./Components/TextComponent/TextComponent";
import "./App.css";
import MyCounter from "./Components/Counter/Counter";

function App() {
  return (
    <>
      <MyCounter />
      <TextComponent />
    </>
  );
}

export default App;
