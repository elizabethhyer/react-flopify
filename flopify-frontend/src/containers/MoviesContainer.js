import React, { Component } from "react";
import MovieInput from "../components/MovieInput";
import Movies from "../components/Movies";

export default class MoviesContainer extends Component {
  render() {
    return (
      <div>
        <MovieInput />
        <Movies />
      </div>
    );
  }
}
