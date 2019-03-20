import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SearchCard.css";

class SearchCard extends Component {
	render() {
		return (
			<div className="search-card">
				<img src={this.props.data.profilepicture} alt={this.props.data.name} />
				<div className="pet-data">
					<h3>
						<Link to={"/pets/" + this.props.data._id}>
							{this.props.data.name}
						</Link>
					</h3>
					<p>{this.props.data.description}</p>
					<p>
						<select>
							<option>1</option>
							<option>2</option>
						</select>
					</p>
				</div>
			</div>
		);
	}
}

export default SearchCard;
