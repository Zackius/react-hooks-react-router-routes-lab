import React from "react";
import { movies } from "../data";

function Movies() {

  const moviesList = movies.map((movie) => (
    <div key={movie.title}>
      <h3>{movie.title}</h3>
      <p>{movie.time}</p>
      <ul>
      {movie.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  )
    
  )
  return <div>
    <h1>Movies Page</h1>
    {moviesList}
     
    </div>
}

export default Movies;
