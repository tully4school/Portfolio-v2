import React, { Component } from "react";
import "./Container.css";
class Container extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='container-fluid px-0'>
				<div className={this.props.classes}>{this.props.children}</div>
			</div>
		);
	}
}
export default Container;
