import "./App.css";
import React, { Component } from "react";

export default class App extends Component {
  componentDidMount() {
    // debugger
    fetch("http://localhost:3000/api/v1/genres")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  render() {
    return <div className="App"></div>;
  }
}
