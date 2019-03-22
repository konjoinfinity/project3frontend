import React, { Component } from "react";
import apiUrl from "./Constants";

class New extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			description: "",
			species: "",
			profilepicture: "",
			sociallink: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		const data = this.state;
		console.log(event);
		fetch(apiUrl + "pets/", {
			method: "POST",
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(result => {
				this.props.history.push("/pets");
				console.log(result);
			})
			.finally(() => this.props.getPets());
	}												
      
  render() {
    return (
      this.props.isLoggedIn === true && (
        <div>
          <div className="card m-5">
            <div className="card-body">
              <div className="card-content">
                <h1>Create New Pet</h1>
                <form onSubmit={this.handleSubmit} action="/pets">
                  <p>Name </p>
                  <p>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      onChange={this.handleInputChange}
                    />
                  </p>
                  <p>Description </p>
                  <p>
                    <input
                      id="description"
                      name="description"
                      type="text"
                      onChange={this.handleInputChange}
                    />
                  </p>
                  <p>Species</p>
                  <div>
                    <p>
                      <select
                        className="browser-default m5"
                        id="species"
                        name="species"
                        onChange={this.handleInputChange}
                      >
                        <option defaultValue="">Cat or Dog?</option>
                        <option value="Cat">Cat</option>
                        <option value="Dog">Dog</option>
                      </select>
                    </p>
                  </div>

                  <p>Profile Picture Link</p>
                  <p>
                    <input
                      id="profilepicture"
                      name="profilepicture"
                      type="text"
                      onChange={this.handleInputChange}
                    />
                  </p>
                  <p>Social Link </p>
                  <p>
                    <input
                      id="sociallink"
                      name="sociallink"
                      type="text"
                      onChange={this.handleInputChange}
                    />
                  </p>
                  <p>
                    <button className="btn orange lighten-2">Create Pet</button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default New;
