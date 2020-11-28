import React from "react";
import { Redirect } from "react-router-dom";

const Genre = (props) => {
  console.log(props);

  //This isn't finding by ID, it's finding by index. A fix?

  let genre = props.genres[props.match.params.id - 1];

  return (
    <li>
      {/* {genre ? null : <Redirect to="/genres" />} */}
      {genre ? genre.name : null}
    </li>
  );
};
export default Genre;
