import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      this.props.isLoggedIn === true && (
        <div>
          <h1>This is the About Page! :-)</h1>
        </div>
      )
    );
  }
}

export default About;
