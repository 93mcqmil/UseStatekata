import CLAASMATES from "./Data/Data.json";
import "./ArrayComponent.css";
import { useState } from "react";

function ArrayComponent() {
  const [teamMembers, setTeamMembers] = useState([]);

  //Function for the AddToTeam button
  //Spread syntax,
  const addToTeam = (name: string) => {
    setTeamMembers((members) => {
      return [...members, name];
    });
  };

  // A function to the "remove" from team button.
  const removeFromTeam = (name: string) => {
    setTeamMembers((members) => {
      const result = [...members];
      result.splice(members.indexOf(name), 1);
      return result;
    });
  };
  console.log(teamMembers);
  return (
    <div className='wrap-container'>
      <h1>Learn useState: Array</h1>
      <br />
      <div className='row'>
        <div className='col-6'>
          <h3>Classmates</h3>
          <ul className='List-group'>
            {CLAASMATES.map((name) => {
              if (teamMembers.includes(name)) return null;
              return (
                <li key={name} className='list-group-item'>
                  {name}
                  <button className='btn' onClick={() => addToTeam(name)}>
                    Add
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='col-6'>
          <h3>Basket Team</h3>
          <ul className='List-group'>
            {teamMembers.map((name) => {
              return (
                <li key={name} className='list-group-item'>
                  {name}
                  <button onClick={() => removeFromTeam(name)}>Remove</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ArrayComponent;
