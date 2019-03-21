import React, { Component } from "react";
import axios from "axios";
import SearchCard from "./Components/SearchCard";
import "./Search.css";
import apiUrl from "./Constants";

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "*",
			petList: [],
			species: ""
		};
		this.updateName = this.updateName.bind(this);
		this.updateSpecies = this.updateSpecies.bind(this);
	}

	componentDidMount() {
		axios
			.get(apiUrl + "pets")
			.then(res => this.setState({ petList: res.data }))
			.catch(err => console.log(err));
	}

	updateName(event) {
		this.setState({ input: event.target.value }, () => {
			if (this.state.input === "") {
				this.setState({ input: "*" });
			} else {
				this.setState({ input: this.state.input });
			}
		});
	}

	updateSpecies(event) {
		this.setState({ species: event.target.value }, () => {
			this.setState({ species: this.state.species });
		});
	}

	render() {
		let results = [];

		this.state.petList
			.filter(
				pet =>
					pet.name.toUpperCase().includes(this.state.input.toUpperCase()) &&
					pet.species === this.state.species
			)

			.map(pet => {
				return results.push(<SearchCard key={pet._id} data={pet} />);
			});

		return (
			<div>
				<div className="search-text input-field">
					<h2>I'm looking for a</h2>
					<select value={this.state.species} onChange={this.updateSpecies}>
						<option value="" disabled>
							Select a species
						</option>
						<option value="Cat">cat</option>
						<option value="Dog">dog</option>
					</select>
				</div>
				<div className="search-text input-field">
					<h2>named</h2>
					<input
						type="text"
						onChange={this.updateName}
						placeholder="Start typing a name"
					/>
					<h2>...</h2>
				</div>
				{results}
			</div>
		);
	}
}

export default Search;
