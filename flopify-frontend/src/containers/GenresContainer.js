import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { fetchGenres } from "../actions/fetchGenres";
import Genres from "../components/Genres";
import Genre from "../components/Genre";
import GenreInput from "../components/GenreInput";

class GenresContainer extends Component {
  componentDidMount() {
    this.props.fetchGenres();
  }

  render() {
    return (
      <div>
        <Route path="/genres/new" component={GenreInput} />
        <Route
          path="/genres/:id"
          render={() => <Genres genres={this.props.genres} />}
        />
        <Route
          exact
          path="/genres"
          render={() => <Genres genres={this.props.genres} />}
        />
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
