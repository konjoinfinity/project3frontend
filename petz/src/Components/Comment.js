import React, { Component } from "react";
import "./Comment.css";

class Comment extends Component {
	render() {
		return <div className="comment-card">{this.props.data.message}</div>;
	}
}

export default Comment;
