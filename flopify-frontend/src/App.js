import "./App.css";
import React, { Component } from "react";

componentDidMount();
{
  fetch("http://localhost:3000/api/v1/genres")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

export default class App extends Component {
  render() {
    return <div className="App"></div>;
  }
}
