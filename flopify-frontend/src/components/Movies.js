import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteMovie } from "../actions/deleteMovie";

const Movies = (props) => {
  const handleDelete = (movie) => {
    props.deleteMovie(movie.id, movie.genre.id);
  };

  return (
    <div>
      {/* {props.movies &&
        props.movies.map((m) => (
          <li key={m.id}>
            <Link to={`/genres/${m.genre.id}/movies/${m.id}`}>
              Title: {m.title}
            </Link>
            <button onClick={() => handleDelete(m)}>Delete</button> <br />
            Rating: {m.rating} / 10 <br />
          </li>
        ))} */}
    </div>
  );
};

export default connect(null, { deleteMovie })(Movies);
