import React, { Component } from "react";
import "./Logo.css";
import logo from "../../Images/logo.png";
function Logo() {
	return (
		<div className='logo px-5'>
			<img className='img-fluid rotation mt-xs-2' src={logo} alt='logo'></img>
		</div>
	);
}

export default Logo;
