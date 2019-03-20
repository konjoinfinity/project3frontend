import React, { Component } from "react";

class Logout extends Component {
  render() {
    return (
      <div className="card m-5">
        <div className="card-body">
          <div className="card-content">
            <form>
              <button
                className="btn orange lighten-1"
                type="submit"
                onClick={this.props.handleLogOut}
              >
                Log Out
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Logout;
