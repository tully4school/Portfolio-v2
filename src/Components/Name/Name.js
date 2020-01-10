import React, { Component } from "react";
import "./Name.css";

class Name extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			// <div className='name text-center'>
			// 	<h1 className='display-3'>Joseph Tully</h1>
			// 	<h1 className='display-4'>Software Engineer</h1>
			// </div>

			<div className='name justify-content-center'>
				<h3 className='by display-4 d-flex justify-content-center fadeIn'>
					By
				</h3>
				<h1 className='elegantshadow pb-1 fadeIn'>Joseph Tully</h1>
			</div>
		);
	}
}

export default Name;
