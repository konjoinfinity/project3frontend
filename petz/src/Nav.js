import React, { Component } from "react";
import petzlogo from "./petzlogo.png";
import { Link } from "react-router-dom";
import "./App.css";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper blue lighten-3">
            <a href="/" className="brand-logo">
              <img src={petzlogo} alt="logo" className="logo" />
            </a>
            <ul className="right">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pets">Pets</Link>
              </li>
              <li>
                <Link to="/new">New</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
