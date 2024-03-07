import { useState } from "react";
import "./ObjectComponent.css";
import Nationality from "../Data/Nationality.json";

function ObjectComponent() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    Nationality: "",
  });

  const onChangeName = (event: { target: { value: any } }) => {
    setForm((currentState) => {
      return { ...currentState, name: event.target.value };
    });
  };
  const onChangeAge = (event: { target: { value: any } }) => {
    setForm((currentState) => {
      return { ...currentState, age: event.target.value };
    });
  };
  const onChangeNationality = (event: { target: { value: any } }) => {
    setForm((currentState) => {
      return { ...currentState, Nationality: event.target.value };
    });
  };

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    alert(JSON.stringify(form, null, 4));
  };
  return (
    <div className='Container'>
      <h1>Learn useState: Object Component</h1>
      <br />
      <h3>My Profile</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name </label>
          <input onChange={onChangeName} value={form.name} />
        </div>
        <div>
          <label>Age </label>
          <input onChange={onChangeAge} type='number' value={form.age} />
        </div>
        <div>
          <label>Nationality </label>
          <select onChange={onChangeNationality} value={form.nationality}>
            <option value=''>--Select--</option>
            {Nationality.map((nation, index) => (
              <option value=''>{nation}</option>
            ))}
          </select>
        </div>
        <button onClick={onSubmit} className='btn-primary'>
          Save Profile
        </button>
      </form>
    </div>
  );
}
export default ObjectComponent;
