import React, { Component } from "react";
import "./IG.css";
import Modal from "../Modal/Modal";
import Melissa from "../../Images/myyyylissaandi.jpg";
import MelissaG from "../../Images/melissa.png";
import Work1 from "../../Images/meandsteve.jpg";
import Mom from "../../Images/Mom.jpg";
import MomG from "../../Images/momg.png";
import Buster from "../../Images/bust.jpg";
import BusterG from "../../Images/bust.png";
import Jess from "../../Images/jess.jpg";
import JessG from "../../Images/jess.png";
import Boys from "../../Images/heroes.jpg";
import Container from "../Container/Container";
class IG extends Component {
	render() {
		return (
			<div className='col-sm-12 col-lg-6 ml-5 float-right'>
				<div className='col-sm-4 col-lg-4 my-5 my-3 float-right d-flex'>
					<Modal
						dialogClassName='30w'
						img={<img src={MelissaG} className='img-fluid about' />}
						src={MelissaG}
					/>
				</div>
				<div className='col-sm-4 col-lg-4 my-5 my-3 float-right d-flex'>
					<Modal
						dialogClassName='30w'
						img={<img src={MomG} className='img-fluid about' />}
						src={MomG}
					/>
				</div>
				<div className='col-sm-4 col-lg-4 my-5 my-3 float-right d-flex'>
					<Modal
						dialogClassName='30w'
						img={<img src={JessG} className='img-fluid about' />}
						src={JessG}
					/>
				</div>
			</div>
		);
	}
}
export default IG;
