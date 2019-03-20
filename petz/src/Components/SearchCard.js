import React, { Component } from "react";
import "./SearchCard.css";

class SearchCard extends Component {
	render() {
		return (
			<div className="search-card">
				<img src={this.props.data.profilepicture} alt={this.props.data.name} />
				<div className="pet-data">
					<h3>{this.props.data.name}</h3>
					<p>{this.props.data.description}</p>
				</div>
			</div>
		);
	}
}

export default SearchCard;
