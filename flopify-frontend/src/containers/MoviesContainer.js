import React, { Component } from "react";
import Genre from "../components/Genre";
import MovieInput from "../components/MovieInput";
import Movies from "../components/Movies";

export default class MoviesContainer extends Component {
  render() {
    return (
      <div>
        <MovieInput />
        <Movies movies={this.props.genre && this.props.genre.movies} />
      </div>
    );
  }
}
