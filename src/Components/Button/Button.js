import React, { Component } from "react";
import "./Button.css";
function Button(props) {
	return (
		<div class='buttons-coll'>
			<a
				href='/static/media/JosephTully2019.94dc99a9.pdf'
				class='custom-btn btn-5'
				target='blank'
			>
				<span>{props.lable}</span>
			</a>
		</div>
	);
}

export default Button;
