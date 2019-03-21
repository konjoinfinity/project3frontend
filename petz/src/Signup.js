import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      this.props.isLoggedIn === false && (
        <div className="card m-5">
          <div className="card-body">
            <div className="card-content">
              <h2>Sign Up</h2>

              <form>
                <div>
                  <p>Email</p>
                  <p>
                    <input
                      type="text"
                      name="email"
                      onChange={this.props.handleInput}
                    />
                  </p>
                </div>

                <div>
                  <p>Password</p>
                  <p>
                    <input
                      type="password"
                      name="password"
                      onChange={this.props.handleInput}
                    />
                  </p>
                </div>
                <button
                  className="btn orange lighten-1"
                  type="submit"
                  onClick={this.props.handleSignUp}
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default Signup;
