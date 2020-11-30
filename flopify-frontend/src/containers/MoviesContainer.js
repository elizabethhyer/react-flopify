import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Genre from "../components/Genre";
import MovieInput from "../components/MovieInput";
import Movies from "../components/Movies";

export default class MoviesContainer extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/genres/:id/movies/new" component={MovieInput} />
          <Route
            path="/genres/:id/movies/:id"
            render={(routerProps) => (
              <Movie {...routerProps} movies={this.props.genres.movies} />
            )}
          />
          <Movies movies={this.props.genre && this.props.genre.movies} />
        </Switch>
        {/* <MovieInput genre={this.props.genre} />
         */}
      </div>
    );
  }
}
