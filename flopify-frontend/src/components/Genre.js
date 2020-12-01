import React from "react";
import { Redirect } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import MoviesContainer from "../containers/MoviesContainer";

const Genre = (props) => {
  console.log(props);

  let genre = props.genres.filter((g) => g.id == props.match.params.id)[0];

  const genreDisplay = () => {
    if (props.match.params.id) {
      return null;
    } else {
      return genre ? genre.name : null;
    }
  };

  console.log(props.match);
  return (
    <div>
      {/* <h1>{genre ? genre.name : null}</h1> */}
      <h1>{genreDisplay()}</h1>
      <h2>
        <Link to={genre && `/genres/${genre.id}/movies/new`}>
          Add a New Movie!
        </Link>
      </h2>
      <MoviesContainer genre={genre} />
    </div>
  );
};
export default Genre;
