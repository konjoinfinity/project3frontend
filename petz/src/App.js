import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Pet from "./Pet";
import Pets from "./Pets";
import Home from "./Home";
import Nav from "./Nav";
import New from "./New";
import About from "./About";
import Signin from "./Login";
import Signup from "./Signup";
import Search from "./Search";
import Edit from "./Edit";
import axios from "axios";
import SignUpForm from "./Signup";
import LogInForm from "./Login";
import LogOut from "./Logout";

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
        this.props.history.push("/songs");
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
        this.props.history.push("/songs");
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
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
              path="/signin"
              exact
              render={props => <Signin {...props} />}
            />
            <Route
              path="/signup"
              exact
              render={props => <Signup {...props} />}
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
                  <SignUpForm
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
                  <LogOut
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
                  <LogInForm
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

export default App;
