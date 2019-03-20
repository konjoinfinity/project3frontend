import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import "./App.css";
import Pet from "./Pet";
import Pets from "./Pets";
import Home from "./Home";
import Nav from "./Nav";
import New from "./New";
import About from "./About";
import Search from "./Search";
import Edit from "./Edit";
import axios from "axios";
import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: "",
      email: "",
      password: "",
      isLoggedIn: false
    };
    this.getPets = this.getPets.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  getPets() {
    fetch("http://localhost:3001/api/pets")
      .then(res => res.json())
      .then(res => {
        this.setState({ pets: res });
      });
  }

  componentDidMount() {
    this.getPets();
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
  }

  handleLogOut(e) {
    e.preventDefault();
    this.setState({
      email: "",
      password: "",
      isLoggedIn: false
    });
    localStorage.clear();
    console.log("User has been logged out");
    this.props.history.push("/login");
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSignUp(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/users/signup", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
        console.log("User has signed up");
        this.props.history.push("/pets");
      })
      .catch(err => console.log(err));
  }

  handleLogIn(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/users/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
        console.log("User is logged in");
        this.props.history.push("/pets");
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Nav isLoggedIn={this.state.isLoggedIn} />

        <main className="container">
          <Switch>
            <Route path="/" exact render={props => <Home {...props} />} />
            <Route
              path="/pets/:id"
              exact
              render={props => (
                <Pet {...props} pets={this.state && this.state.pets} />
              )}
            />
            <Route
              path="/pets"
              exact
              render={props => (
                <Pets {...props} pets={this.state && this.state.pets} />
              )}
            />
            <Route
              path="/new"
              exact
              render={props => (
                <New
                  {...props}
                  pets={this.state && this.state.pets}
                  getPets={this.state && this.getPets}
                />
              )}
            />
            <Route path="/about" exact render={props => <About {...props} />} />
            <Route
              path="/pets/:id/edit"
              exact
              render={props => (
                <Edit
                  {...props}
                  pets={this.state && this.state.pets}
                  getPets={this.state && this.getPets}
                />
              )}
            />
            <Route
              path="/search"
              exact
              render={props => <Search {...props} />}
            />
            <Route
              path="/signup"
              render={props => {
                return (
                  <Signup
                    {...props}
                    isLoggedIn={this.state.isLoggedIn}
                    handleInput={this.handleInput}
                    handleSignUp={this.handleSignUp}
                  />
                );
              }}
            />
            <Route
              path="/logout"
              render={props => {
                return (
                  <Logout
                    {...props}
                    isLoggedIn={this.state.isLoggedIn}
                    handleLogOut={this.handleLogOut}
                  />
                );
              }}
            />
            <Route
              path="/login"
              render={props => {
                return (
                  <Login
                    {...props}
                    isLoggedIn={this.state.isLoggedIn}
                    handleInput={this.handleInput}
                    handleLogIn={this.handleLogIn}
                  />
                );
              }}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(App);
