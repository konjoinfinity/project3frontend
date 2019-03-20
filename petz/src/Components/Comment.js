import React, { Component } from "react";
import "./Comment.css";

class Comment extends Component {
	render() {
		const readDate = new Date(this.props.data.createdAt);
		return (
			<div className="comment-card">
				<p>{this.props.data.message}</p>
				<p className="date">{readDate.toLocaleString()}</p>
			</div>
		);
	}
}

export default Comment;
