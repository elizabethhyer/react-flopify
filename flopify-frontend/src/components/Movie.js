import React from "react";
import { connect } from "react-redux";
import { deleteMovie } from "../actions/deleteMovie";
import { Link } from "react-router-dom";
import { render } from "react-dom";

const Movie = (props) => {
  let movie =
    props.movies &&
    props.movies.filter((m) => m.id == props.match.params.movieId)[0];

  const handleDelete = (movie) => {
    props.deleteMovie(movie.id, movie.genre_id);
    console.log("what do i put in delete");
    props.history.push("/genres");
  };

  return (
    <div>
      <h1>{movie ? movie.title : null}</h1>
      <br />
      <h4>Rating: {movie ? movie.rating : null} / 10</h4>
      <br />
      <p>{movie ? movie.description : null}</p>
      <br />
      <Link to={movie && `/genres/${movie.genre_id}/movies/${movie.id}/edit`}>
        Edit Movie
      </Link>
      <br /> <br />
      <button onClick={() => handleDelete(movie)}>Delete</button> <br />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMovie: (movieId, genreId) => dispatch(deleteMovie(movieId, genreId)),
  };
};

export default connect(null, mapDispatchToProps)(Movie);
