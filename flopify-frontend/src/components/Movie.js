import React from "react";
import { Redirect } from "react-router-dom";
import MovieEdit from "./MovieEdit";

const Movie = (props) => {
  let movie = props.genres.movies.filter(
    (m) => m.id == props.match.params.id
  )[0];

  return (
    <div>
      <h1>{movie ? movie.title : null}</h1>
      <MoviesContainer genre={genre} />
      <MovieEdit movie={movie} />
    </div>
  );
};
export default Movie;
