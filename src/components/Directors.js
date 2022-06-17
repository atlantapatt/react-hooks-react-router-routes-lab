import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsMap = directors.map((directors, index) => {
    return (
      <div key={index}>
        <h3>{directors.name}</h3>
        <p>Movies:</p>
        <ul>{directors.movies.map((movies, index) => <li key={index}>{movies}</li>)}</ul>
      </div>
    )
  })
  return (
  <div>
    <h1>Directors Page</h1>
    {directorsMap}
  </div>
  )
}

export default Directors;
