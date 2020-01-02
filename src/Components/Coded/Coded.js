import React, { Component } from "react";
import $ from "jquery";
import "./Coded.css";

// Conceptualize; // Organize // Develop // Enhance // Deliver
class Coded extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		$(function() {
			let text = $(".text");
			$(window).scroll(function() {
				let scroll = $(window).scrollTop();
				if (scroll <= 0 || scroll > 800) {
					text.addClass("hidden");
				} else {
					text.removeClass("hidden");
				}
			});
		});
	}
	render() {
		return (
			<div className='coded'>
				<ul className='text'>
					<li className='spaced'>C</li>
					<li className='ghost'>o</li>
					<li className='ghost'>n</li>
					<li className='ghost'>c</li>
					<li className='ghost'>e</li>
					<li className='ghost'>p</li>
					<li className='ghost'>t</li>
					<li className='ghost'>u</li>
					<li className='ghost'>a</li>
					<li className='ghost'>l</li>
					<li className='ghost'>i</li>
					<li className='ghost'>z</li>
					<li className='ghost'>e</li>
					<li className='spaced ghost'>//</li>
					<li className='spaced'>O</li>
					<li className='ghost'>r</li>
					<li className='ghost'>g</li>
					<li className='ghost'>a</li>
					<li className='ghost'>n</li>
					<li className='ghost'>i</li>
					<li className='ghost'>z</li>
					<li className='ghost'>e</li>
					<li className='spaced ghost'>//</li>
					<li className='spaced'>D</li>
					<li className='ghost'>e</li>
					<li className='ghost'>v</li>
					<li className='ghost'>e</li>
					<li className='ghost'>l</li>
					<li className='ghost'>o</li>
					<li className='ghost'>p</li>
					<li className='spaced ghost'>//</li>
					<li className='spaced'>E</li>
					<li className='ghost'>n</li>
					<li className='ghost'>h</li>
					<li className='ghost'>a</li>
					<li className='ghost'>n</li>
					<li className='ghost'>c</li>
					<li className='ghost'>e</li>
					<li className='spaced ghost'>//</li>
					<li className='spaced'>D</li>
					<li className='ghost'>e</li>
					<li className='ghost'>l</li>
					<li className='ghost'>i</li>
					<li className='ghost'>v</li>
					<li className='ghost'>e</li>
					<li className='ghost'>r</li>
				</ul>
			</div>
		);
	}
}

export default Coded;
