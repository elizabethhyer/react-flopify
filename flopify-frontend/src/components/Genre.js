import React from "react";

const Genre = (props) => {
  console.log(props);
  let genre = props.genres[props.match.params.id - 1];

  return <li>{genre ? genre.name : null}</li>;
};
export default Genre;
