import React, { Component } from "react";
import { connect } from "react-redux";

class MovieInput extends Component {
  render() {
    return (
      <div>
        <form>
          <label>Title:</label>
          <input type="text" />
          <br />
          <br />
          <label>Description:</label>
          <input type="text" />
          <br />
          <br />
          <label>(1-10) Rating:</label>
          <input type="text" />
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

export default connect(null)(MovieInput);
