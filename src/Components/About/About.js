import React, { Component } from "react";
import "./About.css";
import Header from "../Header/Header";
import IG from "../IG/IG";
import Melissa from "../../Images/myyyylissaandi.jpg";
class About extends Component {
	render() {
		return (
			<>
				<div className='row'>
					<div className='col-md-12'>
						<Header span='about' header='About Me' />
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12 d-flex px-5 py-5 align-items-center'>
						<p className='about-p'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
							dignissimos, eaque cupiditate distinctio eligendi laudantium
							aspernatur quis autem est perspiciatis voluptatibus consequatur
							tempora ducimus sed, eveniet quam quasi, hic natus? Lorem ipsum
							dolor sit amet consectetur, adipisicing elit. Voluptate fugit
							illum voluptates corporis quam ut ratione expedita repellendus
							animi, tenetur provident vel harum impedit. Nesciunt maiores
							dignissimos dolores commodi sed? Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Quos harum ducimus ipsum culpa.
							Ducimus ut aspernatur, totam culpa voluptatem quis fuga ea tempore
							sint ab assumenda ad deleniti veniam recusandae.
						</p>
						<div className='col-md-6 d-flex px-5 py-5 align-items-center'>
							<IG />
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default About;
