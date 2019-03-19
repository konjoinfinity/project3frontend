import React, { Component } from "react";
import "./App.css";
import petpic from "./cat.jpeg";

class Pet extends Component {
  lickHandle(event) {
    event.preventDefault();
    console.log("Lick");
  }
  commentHandle(event) {
    event.preventDefault();
    console.log("Comment");
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-image">
                <img src={petpic} alt="pet.profilepicture" />
                <span className="card-title">Skywhiskers pet.name</span>
              </div>
              <div className="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively. pet.description
                </p>
                <p>pet.species</p>
                <form onSubmit={this.lickHandle}>
                  <button className="btn blue lighten-2"># of pet.licks</button>
                </form>
                <div className="card">
                  <div className="card-content">pet.comments</div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <form onSubmit={this.commentHandle}>
                      <input
                        id="comment"
                        name="comment"
                        type="text"
                        placeholder="pet.comments"
                      />
                      <button className="btn orange lighten-2">Comment</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card-action">
                <i className="fab fa-twitter" />
                <a href="https://twitter.com">pet.sociallink</a>
                <a href="/edit">
                  <button className="btn orange lighten-2">Edit Pet</button>
                </a>
                <a href="/pet">
                  <button className="btn blue lighten-2">
                    Link to Pet Details
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pet;
