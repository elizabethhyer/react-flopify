import React from "react";
// import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import MoviesContainer from "../containers/MoviesContainer";

const Genre = (props) => {
  console.log(props);

  let genre = props.genres.filter((g) => g.id == props.match.params.id)[0];

  const genreDisplay = () => {
    if (window.location.pathname.includes("/movies")) {
      return null;
    } else {
      return genre ? genre.name : null;
    }
  };

  const linkDisplay = () => {
    if (window.location.pathname.includes(`/movies/`)) {
      return null;
    } else {
      return (
        <Link to={genre && `/genres/${genre.id}/movies/new`}>
          Add a New Movie!
        </Link>
      );
    }
  };

  console.log(props.match);
  return (
    <div>
      <h1>{genreDisplay()}</h1>
      <h2>{linkDisplay()}</h2>
      <MoviesContainer genre={genre} />
    </div>
  );
};
export default Genre;
