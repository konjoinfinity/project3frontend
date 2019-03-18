import React, { Component } from "react";
import petzlogo from "./petzlogo.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="Nav">
        <nav className="navimg">
          <img src={petzlogo} alt="logo" />
        </nav>
      </div>
    );
  }
}

export default App;
