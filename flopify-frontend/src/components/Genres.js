import React from "react";
import Genre from "./Genre";

const Genres = (props) => {
  return (
    <div>
      {props.genres.map((g) => (
        <div key={g.id}>
          <Genre genre={g} />
        </div>
      ))}
    </div>
  );
};

export default Genres;
