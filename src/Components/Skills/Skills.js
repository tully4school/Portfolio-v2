import React, { Component } from "react";
import "./Skills.css";
import Header from "../Header/Header";
import HTML5 from "../../Images/HTML5.png";
import CSS3 from "../../Images/css.png";
import JS from "../../Images/js.png";
import Node from "../../Images/node.png";
import Bootstrap from "../../Images/bootstrap.png";
import MongoDB from "../../Images/mongodb.png";
import Postgresql from "../../Images/postgresql.png";
import Heroku from "../../Images/heroku.png";
import Python from "../../Images/python.png";
import SQL from "../../Images/sql.png";
import reactpic from "../../Images/React.png";
import Swagger from "../../Images/swagger.png";
import Storybook from "../../Images/Storybook.png";
import Button from "../Button/Button";
import Resume from "../../Images/JosephTully2019.pdf";

class Projects extends Component {
	render() {
		return (
			<>
				<div className='row'>
					<div className='col-md-12'>
						<Header span='projects-header' header='Proficiencies' />
					</div>
				</div>
				<div className='proficiencies mt-md-5 p-5'>
					<div className='row mb-lg-5'>
						<div className='col-3'>
							<img src={HTML5} alt='HTML5 logo' className='img-fluid' />
						</div>
						<div className='col-3'>
							<img src={CSS3} alt='HTML5 logo' className='img-fluid' />
						</div>
						<div className='col-3'>
							<img src={JS} alt='HTML5 logo' className='img-fluid' />
						</div>
						<div className='col-3'>
							<img src={Node} alt='HTML5 logo' className='img-fluid' />
						</div>
					</div>
					<div className='row'>
						<div className='col-4 mt-5 mt-sm-5 col-sm-2'>
							<img src={Bootstrap} alt='HTML5 logo' className='img-fluid' />
						</div>
						<div className='col-4 mt-5 mt-sm-5 col-sm-2'>
							<img src={MongoDB} alt='HTML5 logo' className='img-fluid' />
						</div>
						<div className='col-4 mt-5 mt-sm-5 col-sm-2'>
							<img src={Postgresql} alt='HTML5 logo' className='img-fluid' />
						</div>
						<div className='col-4 mt-5 mt-sm-5 col-sm-2'>
							<img src={Heroku} alt='HTML5 logo' className='img-fluid' />
						</div>
						<div className='col-4 mt-5 mt-sm-5 col-sm-2'>
							<img src={Python} alt='HTML5 logo' className='img-fluid' />
						</div>
						<div className='col-4 mt-5 mt-sm-5 col-sm-2'>
							<img src={SQL} alt='HTML5 logo' className='img-fluid' />
						</div>
					</div>
					<div className='row mt-5 mb-xl-5'>
						<div className='col-4 col-sm-2 offset-sm-1'>
							<img src={reactpic} alt='HTML5 logo' className='img-fluid' />
						</div>
						<div className='col-4 col-sm-2 offset-sm-2'>
							<img src={Swagger} alt='HTML5 logo' className='img-fluid' />
						</div>
						<div className='col-4 col-sm-2 offset-sm-2 '>
							<img src={Storybook} alt='HTML5 logo' className='img-fluid' />
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12 d-flex justify-content-center mb-5'>
						{/* <a target='blank' href={Resume}>
								Download my Résumé
							</a> */}
						<Button href={Resume} lable='Download My Résumé'></Button>
					</div>
				</div>
			</>
		);
	}
}
export default Projects;
