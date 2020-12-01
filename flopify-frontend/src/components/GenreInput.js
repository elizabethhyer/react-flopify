import React, { Component } from "react";
import { connect } from "react-redux";
import { addGenre } from "../actions/addGenre";

class GenreInput extends Component {
  state = { name: "" };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addGenre(this.state);
    this.setState({ name: "" });
    this.props.history.push(`/genres`);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add a Genre:</label>
          <br />
          <input
            type="text"
            value={this.state.name}
            name="name"
            placeholder="New Genre"
            onChange={this.handleChange}
          />
          <input type="submit" />
          <br /> <br />
        </form>
      </div>
    );
  }
}

export default connect(null, { addGenre })(GenreInput);
