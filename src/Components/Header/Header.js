import React from "react";
import "./Header.css";
function Header(props) {
	return (
		<div className='header d-flex align-items-center display-4 px-3 py-2'>
			<span className={props.span}>{props.header}</span>
		</div>
	);
}

export default Header;
