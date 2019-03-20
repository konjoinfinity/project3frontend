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
              {this.props.isLoggedIn === true && (
                <li>
                  <Link to="/">Home</Link>
                </li>
              )}
              {this.props.isLoggedIn === true && (
                <li>
                  <Link to="/pets">Pets</Link>
                </li>
              )}
              {this.props.isLoggedIn === true && (
                <li>
                  <Link to="/new">New</Link>
                </li>
              )}
              {this.props.isLoggedIn === true && (
                <li>
                  <Link to="/search">Search</Link>
                </li>
              )}
              {this.props.isLoggedIn === true && (
                <li>
                  <Link to="/about">About</Link>
                </li>
              )}
              {this.props.isLoggedIn === false && (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
              {this.props.isLoggedIn === false && (
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              )}
              {this.props.isLoggedIn === true && (
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
