import React, { Component } from "react";

class Edit extends Component {
  handleSubmit(event) {
    event.preventDefault();
    console.log("Edit PETZ!!!");
  }

  render() {
    return (
      <div>
        <div className="card m-5">
          <div className="card-body">
            <div className="card-content">
              <h1>Edit Pet</h1>
              <form onSubmit={this.handleSubmit} action="/pets">
                <p>Name </p>
                <p>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="this.state.pet.title"
                    //   onChange="this.handleInputChange"
                  />
                </p>
                <p>Description </p>
                <p>
                  <input
                    id="description"
                    name="description"
                    type="text"
                    placeholder="this.state.pet.description"
                    //   onChange="this.handleInputChange"
                  />
                </p>
                <p>Profile Picture </p>
                <p>
                  <input
                    id="profilepicture"
                    name="profilepicture"
                    type="text"
                    placeholder="this.state.pet.profilepicture"
                    //   onChange="this.handleInputChange"
                  />
                </p>
                <p>Social Link </p>
                <p>
                  <input
                    id="sociallink"
                    name="sociallink"
                    type="text"
                    placeholder="this.state.pet.sociallink"
                    //   onChange="this.handleInputChange"
                  />
                </p>
                <p>
                  <button className="btn orange lighten-2">Edit Pet</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
