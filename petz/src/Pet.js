import React, { Component } from "react";
import "./App.css";
import petpic from "./cat.jpeg";
import { Link } from "react-router-dom";

class Pet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: null
    };
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
  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-image">
                <img src={petpic} alt="pet.profilepicture" />
                <span className="card-title">
                  {this.state.pet && this.state.pet.name}
                </span>
              </div>
              <div className="card-content">
                <p>{this.state.pet && this.state.pet.description}</p>
                <p>{this.state.pet && this.state.pet.species}</p>
                <form onSubmit={this.lickHandle}>
                  <button className="btn blue lighten-2">
                    # of licks {this.state.pet && this.state.pet.licks}
                  </button>
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
                <Link to={this.state.pet && this.state.pet.sociallink}>
                  <i className="fab fa-twitter" />
                </Link>
                <Link to={"/pets/" + this.props.match.params.id + "/edit"}>
                  <button className="btn blue lighten-2">Edit Pet</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pet;
