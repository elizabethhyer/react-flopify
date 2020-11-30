import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Genre from "../components/Genre";
import MovieInput from "../components/MovieInput";
import Movies from "../components/Movies";
import Movie from "../components/Movie";

export default class MoviesContainer extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/genres/:id/movies/new"
            render={(routerProps) => (
              <MovieInput {...routerProps} genre={this.props.genre} />
            )}
          />
          <Route
            path="/genres/:genreId/movies/:movieId"
            render={(routerProps) => (
              <Movie
                {...routerProps}
                movies={this.props.genre && this.props.genre.movies}
              />
            )}
          />
          <Movies movies={this.props.genre && this.props.genre.movies} />
        </Switch>
      </div>
    );
  }
}
