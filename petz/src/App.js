import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Pet from "./Pet";
import Home from "./Home";
import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <main className="container">
          <Switch>
            <Route path="/" exact render={props => <Home {...props} />} />
            <Route path="/pets" exact render={props => <Pet {...props} />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
