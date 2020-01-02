import React, { Component } from "react";
import "./Content.css";
import Logo from "../Logo/Logo";
import Headshot from "../../Images/headshot.jpg";
import Name from "../Name/Name";
class Content extends Component {
	render() {
		return (
			<>
				<div className='row mt-4'>
					<div className='col-md-4 offset-md-4 col-lg-4 offset-lg-4'>
						<div className='headshot shadow'>
							<img src={Headshot} alt='Headshot' />
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<Name />
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-2 offset-lg-5'>
						<Logo />
					</div>
				</div>
			</>
		);
	}
}
export default Content;
