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
				if (scroll >= 200) {
					text.removeClass("hidden");
				} else {
					text.addClass("hidden");
				}
			});
		});
	}
	render() {
		return (
			<div className='coded fadeIn'>
				<ul className='text hidden'>
					<li className='spaced display-4'>C</li>
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
					<li className='spaced display-4 ghost'>//</li>
					<li className='spaced display-4'>O</li>
					<li className='ghost'>r</li>
					<li className='ghost'>g</li>
					<li className='ghost'>a</li>
					<li className='ghost'>n</li>
					<li className='ghost'>i</li>
					<li className='ghost'>z</li>
					<li className='ghost'>e</li>
					<li className='spaced display-4 ghost'>//</li>
					<li className='spaced display-4'>D</li>
					<li className='ghost'>e</li>
					<li className='ghost'>v</li>
					<li className='ghost'>e</li>
					<li className='ghost'>l</li>
					<li className='ghost'>o</li>
					<li className='ghost'>p</li>
					<li className='spaced display-4 ghost'>//</li>
					<li className='spaced display-4'>E</li>
					<li className='ghost'>n</li>
					<li className='ghost'>h</li>
					<li className='ghost'>a</li>
					<li className='ghost'>n</li>
					<li className='ghost'>c</li>
					<li className='ghost'>e</li>
					<li className='spaced display-4 ghost'>//</li>
					<li className='spaced display-4'>D</li>
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
