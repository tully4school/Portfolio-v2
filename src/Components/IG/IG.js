import React, { Component } from "react";
import "./IG.css";
import Modal from "../Modal/Modal";
import MelissaG from "../../Images/melissa.png";
import Work1 from "../../Images/meandsteve.jpg";
import MomG from "../../Images/momg.png";
import BusterG from "../../Images/bust.png";
import JessG from "../../Images/jess.png";
class IG extends Component {
	render() {
		return (
			<div className=' col-sm-12 col-lg-6 ml-5 float-right'>
				<div className='col-sm-4 col-lg-4 my-5 my-3 float-right d-flex'>
					<Modal
						dialogClassName='30w'
						img={
							<img
								src={MelissaG}
								className='img-fluid about'
								alt='Melissa & I'
							/>
						}
						src={MelissaG}
					/>
				</div>
				<div className='col-sm-4 col-lg-4 my-5 my-3 float-right d-flex'>
					<Modal
						dialogClassName='30w'
						img={<img src={MomG} className='img-fluid about' alt='Mom & I' />}
						src={MomG}
					/>
				</div>
				<div className='col-sm-4 col-lg-4 my-5 my-3 float-right d-flex'>
					<Modal
						dialogClassName='30w'
						img={<img src={JessG} className='img-fluid about' alt='Jess & I' />}
						src={JessG}
					/>
				</div>
			</div>
		);
	}
}
export default IG;
