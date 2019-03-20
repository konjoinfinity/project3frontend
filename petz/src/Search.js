import React, { Component } from "react";
import axios from "axios";
import SearchCard from "./Components/SearchCard";

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "*",
			petList: []
		};
		this.updateName = this.updateName.bind(this);
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

	updateResults() {}

	render() {
		let results = [];

		this.state.petList
			.filter(pet =>
				pet.name.toUpperCase().includes(this.state.input.toUpperCase())
			)
			.map(pet => {
				results.push(<SearchCard key={this.id} data={pet} />);
			});

		return (
			<div>
				<h2>I'm looking for a</h2>
				<select style={{ display: "inline" }}>
					<option value="cat">cat</option>
					<option value="dog">dog</option>
				</select>{" "}
				<h2>named...</h2>
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
