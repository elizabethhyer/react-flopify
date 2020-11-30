import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { deleteMovie } from "../actions/deleteMovie";
import { Route, Link } from "react-router-dom";
import MovieEdit from "./MovieEdit";

const Movie = (props) => {
  let movie =
    props.movies &&
    props.movies.filter((m) => m.id == props.match.params.movieId)[0];

  const handleDelete = (movie) => {
    props.deleteMovie(movie.id, movie.genre_id);
  };

  return (
    <div>
      <h1>{movie ? movie.title : null}</h1>
      <br />
      <h4>Rating: {movie ? movie.rating : null} / 10</h4>
      <br />
      <p>{movie ? movie.description : null}</p>
      <br />
      <button onClick={() => handleDelete(movie)}>Delete</button> <br />
      <MovieEdit movie={movie} />
    </div>
  );
};
export default connect(null, { deleteMovie })(Movie);
