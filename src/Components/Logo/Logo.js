import React from "react";
import "./Logo.css";
import logo from "../../Images/logo.png";
function Logo() {
	return (
		<div className='logo d-flex'>
			<img className='rotation mx-auto' src={logo} alt='logo'></img>
		</div>
	);
}

export default Logo;
