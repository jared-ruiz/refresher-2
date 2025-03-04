import React from "react";
import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName)

  //use function notation when updating state based on the previous value of that state
  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    // console.log(event)
    setPlayerName(event.target.value);
  }

//storing jsx logic in variable and dynamically loading it in return statement
  let editablePlayerName = <span className="player-name">{playerName}</span>

  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}></input>

}

  return (
    <li>
      <span className="player">
        {editablePlayerName}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : "Edit"}</button>
    </li>
  );
}
