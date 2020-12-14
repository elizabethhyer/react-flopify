import React from "react";
import { Link } from "react-router-dom";

const Genres = (props) => {
  return (
    <div>
      {props.genres &&
        props.genres.map((g) => (
          <li key={g.id}>
            <Link to={`/genres/${g.id}`}>{g.name}</Link>
          </li>
        ))}
    </div>
  );
};

export default Genres;
