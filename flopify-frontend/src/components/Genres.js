import React from "react";

const Genres = (props) => {
  return (
    <div>
      {props.genres.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </div>
  );
};

export default Genres;
