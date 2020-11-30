import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import GenresContainer from "./containers/GenresContainer";
// import Home from "./components/Home";
// import GenreInput from "./components/GenreInput";
// import Genres from "./components/Genres";
// import Navbar from "./navigation/Navbar";
// import { BrowserRouter as Router, Route } from "react-router-dom";

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
