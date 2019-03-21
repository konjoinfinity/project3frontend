import React, { Component } from "react";
import { Link } from "react-router-dom";

class Pets extends Component {
  render() {
    let pets;
    this.props.pets &&
      (pets = this.props.pets.map((pet, id) => {
        return (
          <div className="song card mt-3" key={id}>
            <div className="card-body">
              <div className="card-content">
                <div className="card-image">
                  <img
                    src={pet.profilepicture}
                    alt="profilepic"
                    className="profile-pic"
                  />
                </div>
                <p>
                  <Link to={"/pets/" + pet._id}>
                    <button className="btn orange lighten-2">{pet.name}</button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        );
      }));
    return (
      <div>
        <h1>Show All Pets</h1>
        {pets}
      </div>
    );
  }
}

export default Pets;
