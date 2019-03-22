import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import apiUrl from "./Constants";

class Pet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: "",
      licks: "",
      comment: "",
      comments: []
    };
    this.handleLick = this.handleLick.bind(this);
    this.deletePet = this.deletePet.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  componentDidMount() {
    fetch(apiUrl + `pets/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ pet: res });
        this.setState({ licks: res.licks });
        this.setState({ comments: res.comments });
      });
  }

  handleLick(event) {
    event.preventDefault();
    const data = this.state;
    fetch(apiUrl + `pets/${this.props.match.params.id}/licks`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        this.setState({ licks: result.licks });
      })
      .finally(() => this.props.getPets());
  }

  handleComment(event) {
    console.log(event);
    axios
      .put(apiUrl + `pets/${this.props.match.params.id}/comment`, {
        message: this.state.comment
      })
      .then(response => console.log(response))
      .then(result => {
        console.log(result);
      });
    this.componentDidMount();
    this.props.history.push(`/pets/${this.state.pet._id}/`);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  deletePet(event) {
    event.preventDefault();
    fetch(apiUrl + `pets/${this.state.pet._id}`, {
      method: "DELETE"
    })
      .then(this.props.history.push("/pets"))
      .finally(() => this.props.getPets());
  }

  deleteComment(event) {
    console.log(event);
    axios
      .put(apiUrl + `pets/${this.state.pet._id}/comment/delete`, {
        body: event.target.dataset.id
      })
      .then(response => console.log(response))
      .then(result => {
        console.log(result);
      });
    this.componentDidMount();
    this.props.history.push(`/pets/${this.props.match.params.id}/`);
  }

  render() {
    return (
      this.props.isLoggedIn === true && (
        <div>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-content">
                  <span className="card-title">
                    <font color="orange">
                      {this.state.pet.name}{" "}
                      {this.state.pet.species === "Dog" ? "🐶" : "🐱"}
                    </font>
                  </span>

                  <div className="card-image">
                    <img
                      src={this.state.pet.profilepicture}
                      alt="Profile"
                      className="card-image"
                    />
                  </div>
                  <p>{this.state.pet.description}</p>
                  <h4 className="species">
                    Species - {this.state.pet.species}
                  </h4>
                  <div>
                    <button
                      onClick={this.handleLick}
                      className="licks btn blue lighten-2"
                    >
                      # of licks {this.state.licks}
                    </button>
                    <a href={this.state.pet.sociallink}>
                      <img
                        className="instagram"
                        src="https://www.instagram.com/favicon.ico"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="card-action">
                  <Link to={"/pets/" + this.props.match.params.id + "/edit"}>
                    <button className="btn blue lighten-2">Edit Pet</button>
                  </Link>
                  <button className="btn red accent-3" onClick={this.deletePet}>
                    Delete
                  </button>
                </div>
              </div>
              {this.state.pet &&
                this.state.pet.comments.map((comment, id) => {
                  return (
                    <div className="card" key={id}>
                      <div className="card-body">
                        <div className="card-content">
                          <p>{comment.message}</p>
                        </div>
                        <div className="card-action">
                          <form
                            data-id={comment._id}
                            onSubmit={this.deleteComment}
                          >
                            <p>
                              <button className="btn red accent-3">
                                Delete
                              </button>
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                  );
                })}
              <div className="card">
                <div className="card-content">
                  <form onSubmit={this.handleComment}>
                    <input
                      id="comment"
                      name="comment"
                      type="text"
                      onChange={this.handleInputChange}
                    />
                    <button className="btn orange lighten-2">Comment</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default Pet;
