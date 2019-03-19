import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Pet from "./Pet";
import Pets from "./Pets";
import Home from "./Home";
import Nav from "./Nav";
import New from "./New";
import About from "./About";
import Signin from "./Signin";
import Signup from "./Signup";
import Search from "./Search";
import Edit from "./Edit";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <main className="container">
          <Switch>
            <Route path="/" exact render={props => <Home {...props} />} />
            <Route path="/pet" exact render={props => <Pet {...props} />} />
            <Route path="/pets" exact render={props => <Pets {...props} />} />
            <Route path="/new" exact render={props => <New {...props} />} />
            <Route path="/about" exact render={props => <About {...props} />} />
            <Route path="/edit" exact render={props => <Edit {...props} />} />
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
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
