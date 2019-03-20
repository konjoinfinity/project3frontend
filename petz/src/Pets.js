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
              <p>
                <Link to={"/pets/" + pet._id}>
                  <button className="btn orange lighten-2">{pet.name}</button>
                </Link>
              </p>
              <p>{pet.description}</p>
              <p>{pet.species}</p>
              <p>{pet.profilepicture}</p>
              <p>{pet.licks} licks</p>
              <a href={pet.sociallink}>Twitter or Instagram</a>
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
