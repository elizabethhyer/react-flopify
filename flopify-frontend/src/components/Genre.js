import React from "react";
import { Redirect } from "react-router-dom";
import MoviesContainer from "../containers/MoviesContainer";

const Genre = (props) => {
  console.log(props);

  let genre = props.genres.filter((g) => g.id == props.match.params.id)[0];

  return (
    <div>
      <h1>{genre ? genre.name : null}</h1>
      <MoviesContainer genre={genre} />
    </div>
  );
};
export default Genre;
