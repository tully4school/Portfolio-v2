import React, { Component } from "react";
import "./Content.css";
import Logo from "../Logo/Logo";
import Headshot from "../../Images/headshot.jpg";
import Name from "../Name/Name";
import Coded from "../Coded/Coded";
class Content extends Component {
	render() {
		return (
			<>
				<div className='row'>
					<div className='col-md-12'>
						<div className='headshot shadow'>
							<img src={Headshot} alt='Headshot' />
						</div>
					</div>
				</div>
				<div className='row mt-5'>
					<div className='col-md-12'>
						<Coded />
						<Name />
					</div>
				</div>
				<div className='row'>
					<div className='col-6 offset-3 col-md-4 offset-md-4'>
						<div className="logo">
							<Logo />
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<h3 className='title display-4 d-flex justify-content-center mb-5'>
							Software Engineer
						</h3>
					</div>
				</div>
			</>
		);
	}
}
export default Content;
