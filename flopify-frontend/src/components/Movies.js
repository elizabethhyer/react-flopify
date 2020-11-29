import React, { Component } from "react";

const Movies = (props) => {
  const handleDelete = () => {};

  return (
    <div>
      {props.movies &&
        props.movies.map((m) => (
          <li key={m.id}>
            Title: {m.title} <button onClick={handleDelete}>Delete</button>{" "}
            <br />
            Rating: {m.rating} / 10 <br />
          </li>
        ))}
    </div>
  );
};

export default Movies;
