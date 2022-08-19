import React from "react";
import { directors } from "../data";

function Directors() {
  const directoryList = directors.map((director) => (
    <div key={director.name}>
      <h1>{director.name}</h1>
      <p>{director.movies}</p>
      <ul>
      {director.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ));
  return <div>{directoryList}</div>;
}

export default Directors;
