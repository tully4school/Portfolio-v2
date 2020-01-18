import React, { Component } from "react";
import "./IG.css";
import Modal from "../Modal/ModalIG";
// import MelissaG from "../../Images/melissa.png";
// import Work1 from "../../Images/meandsteve.jpg";
// import MomG from "../../Images/momg.png";
import BusterG from "../../Images/bust.png";
// import JessG from "../../Images/jess.png";
class IG extends Component {
	render() {
		return (
			<div className='col-12 col-sm-8 pl-sm-0 col-md-4 col-lg-3 col-xl-2 ml-md-5 m-auto float-md-right'>
				{/* <div className='col-sm-4 col-lg-4 my-5 my-3 float-right d-flex'>
					<Modal
						dialogClassName='30w'
						img={
							<img
								src={Work1}
								className='img-fluid about'
								alt='Steve & I @ Work'
							/>
						}
						src={Work1}
						classOne='col-3 col-sm-4 d-none'
						classTwo='col-3 col-sm-4 d-none'
						classThree='col-3 col-sm-4 d-none'
						classFour='col-3 col-sm-4 d-none'
						classFive='col-3 col-sm-4 d-none'
						classSix='col-3 col-sm-4 d-none'
						classSeven='col-3 col-sm-4 d-none'
						classEight='col-3 col-sm-4 d-none'
						classNine='col-3 col-sm-4 d-none'
						classTen='col-3 col-sm-4 d-none'
						classEleven='col-3 col-sm-4 d-none'
						classTwelve='col-3 col-sm-4 d-none'
						classThirteen='col-3 col-sm-4 d-none'
					/>
				</div>
				<div className='col-sm-4 col-lg-4 my-5 my-3 float-right d-flex'>
					<Modal
						dialogClassName='30w'
						img={<img src={MomG} className='img-fluid about' alt='Mom & I' />}
						src={MomG}
						classOne='col-3 col-sm-4 d-none'
						classTwo='col-3 col-sm-4 d-none'
						classThree='col-3 col-sm-4 d-none'
						classFour='col-3 col-sm-4 d-none'
						classFive='col-3 col-sm-4 d-none'
						classSix='col-3 col-sm-4 d-none'
						classSeven='col-3 col-sm-4 d-none'
						classEight='col-3 col-sm-4 d-none'
						classNine='col-3 col-sm-4 d-none'
						classTen='col-3 col-sm-4 d-none'
						classEleven='col-3 col-sm-4 d-none'
						classTwelve='col-3 col-sm-4 d-none'
						classThirteen='col-3 col-sm-4 d-none'
					/>
				</div> */}
				<div className='col-sm-12 col-lg-12 my-5 my-3 float-right d-flex'>
					<Modal
						dialogClassName='30w'
						img={
							<img src={BusterG} className='img-fluid about' alt='Jess & I' />
						}
						src={BusterG}
						classOne='col-3 col-sm-4 d-none'
						classTwo='col-3 col-sm-4 d-none'
						classThree='col-3 col-sm-4 d-none'
						classFour='col-3 col-sm-4 d-none'
						classFive='col-3 col-sm-4 d-none'
						classSix='col-3 col-sm-4 d-none'
						classSeven='col-3 col-sm-4 d-none'
						classEight='col-3 col-sm-4 d-none'
						classNine='col-3 col-sm-4 d-none'
						classTen='col-3 col-sm-4 d-none'
						classEleven='col-3 col-sm-4 d-none'
						classTwelve='col-3 col-sm-4 d-none'
						classThirteen='col-3 col-sm-4 d-none'
					/>
				</div>
			</div>
		);
	}
}
export default IG;
