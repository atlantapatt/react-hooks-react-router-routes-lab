import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsMap = actors.map((actors, index) => {
    return (
      <div key={index}>
        <h3>{actors.name}</h3>
        <p>Movies:</p>
        <ul>{actors.movies.map((movies, index) => <li key={index}>{movies}</li>)}</ul>
      </div>
    )
  })
  return (
  <div>
    <h1>Actors Page</h1>
    {actorsMap}
  </div>
  )
}

export default Actors;
