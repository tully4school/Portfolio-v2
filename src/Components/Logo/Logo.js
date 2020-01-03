import React, { Component } from "react";
import "./Logo.css";
import logo from "../../Images/logo.png";
function Logo() {
	return (
		<div className='logo d-flex'>
			<img
				className='img-fluid rotation mt-xs-2 mx-auto'
				src={logo}
				alt='logo'
			></img>
		</div>
	);
}

export default Logo;
