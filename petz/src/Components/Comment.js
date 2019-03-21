import React, { Component } from "react";
import "./Comment.css";
import axios from "axios";
import { Link } from "react-router-dom";
import apiUrl from "../Constants";

class Comment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.data._id,
			pet: ""
		};
	}
	componentDidMount() {
		axios
			.get(apiUrl + `comments/${this.state.id}/author`)
			.then(res => this.setState({ pet: res.data }));
	}
	render() {
		const readDate = new Date(this.props.data.createdAt);
		return (
			<div className="comment-card">
				<img src={this.state.pet.profilepicture} alt={this.state.pet.name} />

				<div className="comment-info">
					{this.props.data.message}
					<p className="date">
						Posted by{" "}
						<Link to={"/pets/" + this.state.pet._id}>
							{this.state.pet.name}
						</Link>{" "}
						on {readDate.toLocaleString()}
					</p>
				</div>
			</div>
		);
	}
}

export default Comment;
