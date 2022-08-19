import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsList = actors.map((actor) => (
    <div key={actor.name}>
      <h1>{actor.name}</h1>
      <p>{actor.movies}</p>
      <ul>
        {actor.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ));
  return <div>{actorsList}</div>;
}

export default Actors;
