import React from "react";
import LikeButton from "./LikeButton";
import { Link } from "react-router-dom";

const Movies = (props) => {
  return (
    <div>
      {props.movies &&
        props.movies.map((m) => (
          <li key={m.id}>
            <Link to={`/genres/${m.genre_id}/movies/${m.id}`}>{m.title}</Link>
            <LikeButton />
            <br />
            Rating: {m.rating} / 10 <br />
            <br />
          </li>
        ))}
    </div>
  );
};

export default Movies;
