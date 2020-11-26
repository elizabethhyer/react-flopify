import React, { Component } from "react";
import Genres from "../components/Genres";
import GenreInput from "../components/GenreInput";

export default class GenresContainer extends Component {
  render() {
    return (
      <div>
        <GenreInput />
        <Genres />
      </div>
    );
  }
}
