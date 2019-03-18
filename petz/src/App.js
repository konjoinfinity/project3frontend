import React, { Component } from "react";
import petzlogo from "./petzlogo.png";
import "./App.css";
import Pet from "./Pet";

class App extends Component {
  render() {
    return (
      <div className="Nav">
        <nav className="navimg">
          <img src={petzlogo} alt="logo" />
        </nav>
        <Pet />
      </div>
    );
  }
}

export default App;
