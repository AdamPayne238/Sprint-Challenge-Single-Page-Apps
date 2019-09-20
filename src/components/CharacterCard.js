import React from "react";

export default function CharacterCard(props) {
  return (
  <div>
  <h1>{props.name}</h1>
  <p>{props.gender}</p>
  <p>{props.species}</p>
  <p>{props.status}</p>
  <image>{props.image}</image>

  </div>
  )
}


// name={characters.name}
// gender={characters.gender}
// species={characters.species}
// status={characters.status}
// image={characters.image}