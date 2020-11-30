import React from "react";
import { Redirect } from "react-router-dom";
import MoviesContainer from "../containers/MoviesContainer";

const Genre = (props) => {
  console.log(props);

  let genre = props.genres.filter((g) => g.id == props.match.params.id)[0];

  genreDisplay = () => {
    genre ? genre.name : null;
  };

  return (
    <div>
      <h1>{genreDisplay()}</h1>
      <MoviesContainer genre={genre} />
    </div>
  );
};
export default Genre;
