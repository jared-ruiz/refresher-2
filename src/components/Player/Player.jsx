import React from "react";
import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  //function to handle edit click
  function handleEditClick() {
    setIsEditing(!isEditing);
  }

//storing jsx logic in variable and dynamically loading it in return statement
  let playerName = <span className="player-name">{name}</span>

  if (isEditing) {
    playerName = <input type="text" required value={name}></input>

}

  return (
    <li>
      <span className="player">
        {playerName}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : "Edit"}</button>
    </li>
  );
}
