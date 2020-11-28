import React from "react";
import { Redirect } from "react-router-dom";
import MoviesContainer from "../containers/MoviesContainer";

const Genre = (props) => {
  console.log(props);

  //This isn't finding by ID, it's finding by index. A fix?

  let genre = props.genres[props.match.params.id - 1];

  return (
    <div>
      <h1>
        {/* {genre ? null : <Redirect to="/genres" />} */}
        {genre ? genre.name : null}
      </h1>
      <MoviesContainer />
    </div>
  );
};
export default Genre;
