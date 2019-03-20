import React, { Component } from "react";
import "./Comment.css";
import axios from "axios";

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
			.get(`http://localhost:3001/api/comments/${this.state.id}/author`)
			.then(res => this.setState({ pet: res.data }));
	}
	render() {
		console.log(this.state.pet.name);
		const readDate = new Date(this.props.data.createdAt);
		return (
			<div className="comment-card">
				<p>{this.props.data.message}</p>
				<p className="date">
					Posted by {this.state.pet.name} on {readDate.toLocaleString()}
				</p>
			</div>
		);
	}
}

export default Comment;
