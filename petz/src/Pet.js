import React, { Component } from "react";
import "./App.css";
import petpic from "./cat.jpeg";

class Pet extends Component {
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
                <a href="/pet">
                  <button className="btn orange lighten-2">
                    Link to Pet Details
                  </button>
                </a>
                <a href="/edit">
                  <button className="btn orange lighten-2">Edit Pet</button>
                </a>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively. pet.description
                </p>
                <p>pet.species</p>
                <button className="btn orange lighten-2"># of pet.licks</button>
                <div className="card">pet.comments</div>
                <div className="card">
                  <form>
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
              <div className="card-action">
                <a href="https://twitter.com">pet.sociallink</a>
                <i className="fab fa-twitter" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pet;
