import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import GenresContainer from "./containers/GenresContainer";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <GenresContainer />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     genres: state.genres
//   }
// };

export default connect()(App);
