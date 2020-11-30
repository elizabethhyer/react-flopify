import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <NavLink to="/" exact style={link}>
          Home
        </NavLink>
        <NavLink to="/genres" exact style={link}>
          View Genres
        </NavLink>
        <NavLink to="/genres/new" exact style={link}>
          Add a Genre
        </NavLink>
      </div>
    );
  }
}
