import React, { Component } from "react";
import Pet from "./Pet";

class Pets extends Component {
  render() {
    return (
      <div>
        <h1>Show All Pets</h1>
        <Pet />
        <Pet />
        <Pet />
      </div>
    );
  }
}

export default Pets;
