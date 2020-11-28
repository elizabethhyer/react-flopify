import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { fetchGenres } from "../actions/fetchGenres";
import Genres from "../components/Genres";
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
