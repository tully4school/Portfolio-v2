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

			<div className='name'>
				<h1 class='elegantshadow pb-1 pt-5'>Joseph Tully</h1>
				<h3 class='se'>Software Engineer</h3>
			</div>
		);
	}
}

export default Name;
