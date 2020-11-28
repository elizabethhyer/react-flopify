import React, { Component } from "react";

const Movies = (props) => {
  return (
    <div>
      {props.movies &&
        props.movies.map((m) => (
          <li key={m.id}>
            Title: {m.title} <br />
            Rating: {m.rating} / 10 <br />
          </li>
        ))}
    </div>
  );
};

export default Movies;
