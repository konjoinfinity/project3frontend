import React, { Component } from "react";
import axios from "axios";
import SearchCard from "./Components/SearchCard";

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
			.get("http://localhost:3001/api/pets")
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
				results.push(<SearchCard key={this.id} data={pet} />);
			});

		return (
			<div>
				<h2>
					I'm looking for a
					<div className="input-field">
						<select
							style={{ display: "inline" }}
							value={this.state.species}
							onChange={this.updateSpecies}
						>
							<option value="" disabled selected>
								Choose your option
							</option>
							<option value="Cat">cat</option>
							<option value="Dog">dog</option>
						</select>
					</div>
					named...
				</h2>
				<input
					type="text"
					onChange={this.updateName}
					placeholder="Search pets by name..."
				/>
				{results}
			</div>
		);
	}
}

export default Search;
