import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { fetchGenres } from "../actions/fetchGenres";
import Genres from "../components/Genres";
import Genre from "../components/Genre";
import GenreInput from "../components/GenreInput";

class GenresContainer extends Component {
  componentDidMount() {
    this.props.fetchGenres();
  }

  componentDidUpdate() {}

  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/genres/new"
            render={(routerProps) => (
              <GenreInput {...routerProps} genre={this.props.genre} />
            )}
          />
          <Route
            path="/genres/:id"
            render={(routerProps) => (
              <Genre {...routerProps} genres={this.props.genres} />
            )}
          />
          <Route
            path="/genres"
            render={(routerProps) => (
              <Genres {...routerProps} genres={this.props.genres} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    genres: state.genres,
  };
};

export default connect(mapStateToProps, { fetchGenres })(GenresContainer);
