import React, { Component } from "react";
import { connect } from "react-redux";
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
        <GenreInput />
        <Genres />
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
