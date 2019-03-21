import React, { Component } from "react";
import axios from "axios";
import apiUrl from "./Constants";

class Edit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: null,
			description: null,
			profilepicture: null,
			sociallink: null
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		axios.get(apiUrl + `pets/${this.props.match.params.id}`).then(res => {
			this.setState({ ...res.data });
		});
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
		fetch(apiUrl + `pets/${this.props.match.params.id}`, {
			method: "PUT",
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(result => {
				this.props.history.push(`/pets/${this.props.match.params.id}`);
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
                <h1>Edit Pet</h1>
                <form onSubmit={this.handleSubmit} action="/pets">
                  <p>Name </p>
                  <p>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      defaultValue={this.state && this.state.name}
                      onChange={this.handleInputChange}
                    />
                  </p>
                  <p>Description </p>
                  <p>
                    <input
                      id="description"
                      name="description"
                      type="text"
                      defaultValue={this.state && this.state.description}
                      onChange={this.handleInputChange}
                    />
                  </p>
                  <p>Profile Picture </p>
                  <p>
                    <input
                      id="profilepicture"
                      name="profilepicture"
                      type="text"
                      defaultValue={this.state && this.state.profilepicture}
                      onChange={this.handleInputChange}
                    />
                  </p>
                  <p>Social Link </p>
                  <p>
                    <input
                      id="sociallink"
                      name="sociallink"
                      type="text"
                      defaultValue={this.state && this.state.sociallink}
                      onChange={this.handleInputChange}
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
      )
    );
  }
}

export default Edit;
