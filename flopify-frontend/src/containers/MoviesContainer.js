import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Genre from "../components/Genre"; // Do I not need this? For passing props?
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
            exact
            path="/genres/:genreId/movies/:movieId"
            render={(routerProps) => (
              <Movie
                {...routerProps}
                movies={this.props.genre && this.props.genre.movies}
              />
            )}
          />
          <Route
            path="/genres/:genreId/movies/:movieId/edit"
            render={(routerProps) => (
              <MovieInput
                {...routerProps}
                movies={this.props.genre && this.props.genre.movies}
              />
            )}
          />
          {/* <Route
            path="/genres/:genreId/movies/:movieId/edit"
            render={(routerProps) => (
              <MovieEdit
                {...routerProps}
                movies={this.props.genre && this.props.genre.movies}
              />
            )}
          /> */}
          <Movies movies={this.props.genre && this.props.genre.movies} />
        </Switch>
      </div>
    );
  }
}
