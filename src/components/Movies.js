import React, {useState} from "react";
import { movies } from "../data";

function Movies() {

 const mapMovies = movies.map((movies, index) => {
  return (
    <div key={index}>
      <h3>Name: {movies.title}</h3>
      <p>Time: {movies.time}</p>
      <p>Genres:</p>
      <ul>{movies.genres.map((genre,index) => <li key={index}>{genre}</li>)}</ul>
    </div>
  )
 })
  return (
  <div>
    <h1>Movies Page</h1>
    {mapMovies}
  </div>
  )
}

export default Movies;
