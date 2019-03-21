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
            <a href="#" className="sidenav-trigger" data-target="mobile-nav">
              <i className="material-icons">menu</i>
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

        <ul className="sidenav" id="mobile-nav">
          {this.props.isLoggedIn === true && (
            <li>
              <Link to="/" className="sidenav-close">
                Home
              </Link>
            </li>
          )}
          {this.props.isLoggedIn === true && (
            <li>
              <Link to="/pets" className="sidenav-close">
                Pets
              </Link>
            </li>
          )}
          {this.props.isLoggedIn === true && (
            <li>
              <Link to="/new" className="sidenav-close">
                New
              </Link>
            </li>
          )}
          {this.props.isLoggedIn === true && (
            <li>
              <Link to="/search" className="sidenav-close">
                Search
              </Link>
            </li>
          )}
          {this.props.isLoggedIn === true && (
            <li>
              <Link to="/about" className="sidenav-close">
                About
              </Link>
            </li>
          )}
          {this.props.isLoggedIn === false && (
            <li>
              <Link to="/login" className="sidenav-close">
                Login
              </Link>
            </li>
          )}
          {this.props.isLoggedIn === false && (
            <li>
              <Link to="/signup" className="sidenav-close">
                Sign Up
              </Link>
            </li>
          )}
          {this.props.isLoggedIn === true && (
            <li>
              <Link to="/logout" className="sidenav-close">
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Nav;
