import React, { Component } from "react";
import "./Name.scss";

class Name extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='name text-center'>
				<h1 className='display-3'>Joseph Tully</h1>
				<h1 className='display-4'>Software Engineer</h1>
			</div>
		);
	}
}

export default Name;
