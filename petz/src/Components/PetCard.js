import React, { Component } from "react";

class PetCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pet: this.props.pet
		};
	}

	componentDidMount() {
		this.setState({ pet: this.props.pet });
	}
	render() {
		return <div>{this.props.pet.name}</div>;
	}
}

export default PetCard;
