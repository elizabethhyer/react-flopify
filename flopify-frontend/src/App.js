import "./App.css";
import React, { Component } from "react";
// import { connect } from "react-redux";
import GenresContainer from "./containers/GenresContainer";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <h1>Live Fast, Watch Bad Movies | Flopify</h1>
        <GenresContainer />
      </div>
    );
  }
}

export default App;
