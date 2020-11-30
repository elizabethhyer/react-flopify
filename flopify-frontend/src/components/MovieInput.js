import React, { Component } from "react";
import { connect } from "react-redux";
import { addMovie } from "../actions/addMovie";

class MovieInput extends Component {
  state = {
    title: "",
    description: "",
    rating: 1,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addMovie(this.state, this.props.genre.id);
    this.setState({
      title: "",
      description: "",
      rating: 1,
    });
    this.props.history.push(`/genres/${this.props.genre.id}/movies`);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>(1-10) Rating:</label>
          <select
            name="rating"
            value={this.state.rating}
            onChange={this.handleChange}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
          <br />
          <br />
          <input type="submit" />
          <br />
          <br />
        </form>
      </div>
    );
  }
}

export default connect(null, { addMovie })(MovieInput);
