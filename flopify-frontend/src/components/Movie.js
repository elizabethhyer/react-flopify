import React from "react";
import { Redirect } from "react-router-dom";
import MovieEdit from "./MovieEdit";

const Movie = (props) => {
  let movie =
    props.movies &&
    props.movies.filter((m) => m.id == props.match.params.movieId)[0];

  return (
    <div>
      <h1>{movie ? movie.title : null}</h1>
      <h4>Rating: {movie ? movie.rating : null} / 10</h4>
      <p>{movie ? movie.description : null}</p>
    </div>
  );
};
export default Movie;
