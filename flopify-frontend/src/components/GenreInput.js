import React, { Component } from "react";

class GenreInput extends Component {
  state = { name: "" };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form>
          <label>Add a Genre:</label>
          <br />
          <input
            type="text"
            value={this.state.name}
            name="name"
            placeholder="New Genre"
            onChange={this.handleChange}
          />{" "}
          <br /> <br />
        </form>
      </div>
    );
  }
}

export default GenreInput;
