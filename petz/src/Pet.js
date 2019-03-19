import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

class Pet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: ""
    };
    this.deletePet = this.deletePet.bind(this);
  }

  componentDidMount() {
    fetch(`http://localhost:3001/api/pets/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ pet: res });
      });
  }

  lickHandle(event) {
    event.preventDefault();
    console.log("Lick");
  }

  commentHandle(event) {
    event.preventDefault();
    console.log("Comment");
  }

  deletePet(event) {
    event.preventDefault();
    fetch(`http://localhost:3001/api/pets/${this.state.pet._id}`, {
      method: "DELETE"
    })
      .then(this.props.history.push("/pets"))
      .finally(() => this.props.getPets());
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-image">
                <img
                  src={this.state.pet && this.state.pet.profilepicture}
                  alt="Profile"
                  className="card-image"
                />
                <span className="card-title">
                  {this.state.pet && this.state.pet.name}
                </span>
              </div>
              <div className="card-content">
                <p>{this.state.pet && this.state.pet.description}</p>
                <h4>Species - {this.state.pet && this.state.pet.species}</h4>
                <form onSubmit={this.lickHandle}>
                  <button className="btn blue lighten-2">
                    # of licks {this.state.pet && this.state.pet.licks}
                  </button>
                </form>
                {this.state.pet &&
                  this.state.pet.comments.map((comment, id) => {
                    return (
                      <div className="card" key={id}>
                        <div className="card-body">
                          <div className="card-content">
                            <p>{comment.message}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
                <Link to={this.state.pet && this.state.pet.sociallink}>
                  <i className="fab fa-twitter" />
                </Link>
                <Link to={"/pets/" + this.props.match.params.id + "/edit"}>
                  <button className="btn blue lighten-2">Edit Pet</button>
                </Link>
                <p>
                  <form onSubmit={this.deletePet}>
                    <button className="btn red accent-3">Delete</button>
                  </form>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pet;
