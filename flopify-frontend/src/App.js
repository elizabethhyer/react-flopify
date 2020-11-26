import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGenres } from "./actions/fetchGenres";

class App extends Component {
  componentDidMount() {
    this.props.fetchGenres({
      type: "FETCH_GENRES",
      payload: { name: "horror" },
    });
  }

  render() {
    return <div className="App">App</div>;
  }
}

// const mapStateToProps = (state) => {
//   return {
//     genres: state.genres
//   }
// };

export default connect(null, { fetchGenres })(App);
