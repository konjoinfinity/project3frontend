import React, { Component } from "react";
import petzlogo from "./petzlogo.png";
import "./App.css";
import Pet from "./Pet";

class App extends Component {
  render() {
    return (
      <div className="Nav">
        <nav>
          <div class="nav-wrapper blue lighten-3">
            <a href="#!" class="brand-logo">
              <img src={petzlogo} alt="logo" class="logo" />
            </a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
            <ul class="right">
              <li>
                <a href="#">Pets</a>
              </li>
              <li>
                <a href="#">Add Pet</a>
              </li>
              <li>
                <a href="#">Search</a>
              </li>
              <li>
                <a href="#">Sign In</a>
              </li>
              <li>
                <a href="#">Sign Up</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </nav>
        <Pet />
      </div>
    );
  }
}

export default App;
