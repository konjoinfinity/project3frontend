import React, { Component } from "react";
import { Link } from "react-router-dom";

class Pets extends Component {
  render() {
    let pets;
    this.props.pets &&
      (pets = this.props.pets.map((pet, id) => {
        return (
          <div className="card mt-3 pets-cards" key={id}>
            <div className="card-body pets-index">
              <div className="card-content">
                <div className="card-title">
                  <font color="orange">{pet.name}</font>
                </div>
                <div className="card-image">
                  <img
                    src={pet.profilepicture}
                    alt="profilepic"
                    className="profile-pic"
                  />
                </div>
                <h5>
                  Licks {pet.species === "Dog" ? "🐶" : "🐱"} {pet.licks}
                </h5>
                <div className="card-action">
                  <Link to={"/pets/" + pet._id}>
                    <button className="btn orange lighten-2">Profile</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      }));
    return (
      this.props.isLoggedIn === true && (
        <div>
          <h1>
            <em>The Licking Post</em>
          </h1>
          <div className="container-card">{pets}</div>
        </div>
      )
    );
  }
}

export default Pets;
