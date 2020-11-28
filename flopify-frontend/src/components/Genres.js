import React from "react";
import { Route, Link } from "react-router-dom";
import Genre from "./Genre";

const Genres = (props) => {
  return (
    <div>
      {props.genres.map((g) => (
        <li key={g.id}>
          <Link to={`/genres/${g.id}`}>{g.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default Genres;
