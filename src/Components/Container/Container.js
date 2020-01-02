import React, { Component } from "react";
import "./Container.css";
class Container extends Component {
	render() {
		return (
			<div className='container-fluid'>
				<div className='content d-flex flex-column align-items-center justify-content-center'>
					{this.props.children}
				</div>
			</div>
		);
	}
}
export default Container;
