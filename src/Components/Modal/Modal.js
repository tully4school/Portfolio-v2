import React, { useState } from "react";
import "./Modal.css";
import Modal from "react-bootstrap/Modal";
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
import StorybookIcon from "../../Images/Storybook.png";
import Button from "../Button/Button";
import Resume from "../../Images/JosephTully2019.pdf";

function Example(props) {
	const [show, setShow] = useState(false);
	let classList = "";
	if (props.hidden) {
		classList += ` d-none`;
	}
	return (
		<>
			<img
				className='modal-img img-fluid'
				src={props.src}
				onClick={() => setShow(true)}
				alt='modal'
			/>

			<Modal
				show={show}
				onHide={() => setShow(false)}
				dialogClassName='modal-90w'
				aria-labelledby='example-custom-modal-styling-title'
			>
				<Modal.Header closeButton>
					<Modal.Title id='example-custom-modal-styling-title'>
						{props.name}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className='d-flex justify-content-center'>
					{props.img}
				</Modal.Body>
				<Modal.Footer>
					<div className='row'>
						<div className='col-md-12'>{props.details}</div>
					</div>
					<div className='row'>
						<div className='col-md-12 d-flex justify-content-center'>
							<h5>Frameworks & Languages Used</h5>
						</div>
					</div>
					<div className='row fwUsed'>
						<div className={props.classOne}>
							<img src={HTML5} alt='HTML' className='img-fluid' />
						</div>
						<div className={props.classTwo}>
							<img src={CSS3} alt='CSS3' className='img-fluid' />
						</div>
						<div className={props.classThree}>
							<img src={JS} alt='JS' className='img-fluid' />
						</div>
						<div className={props.classFour}>
							<img src={Node} alt='Node' className='img-fluid' />
						</div>
						<div className={props.classFive}>
							<img src={Bootstrap} alt='Bootstrap' className='img-fluid' />
						</div>
						<div className={props.classSix}>
							<img src={MongoDB} alt='MongoDB' className='img-fluid' />
						</div>
						<div className={props.classSeven}>
							<img src={reactpic} alt='React' className='img-fluid' />
						</div>
						<div className={props.classEight}>
							<img src={Postgresql} alt='Postgresql' className='img-fluid' />
						</div>
						<div className={props.classNine}>
							<img src={Heroku} alt='Heroku' className='img-fluid' />
						</div>
						<div className={props.classTen}>
							<img src={Python} alt='Python' className='img-fluid' />
						</div>
						<div className={props.classEleven}>
							<img src={SQL} alt='SQL' className='img-fluid' />
						</div>
						<div className={props.classTwelve}>
							<img src={Swagger} alt='Swagger' className='img-fluid' />
						</div>
						<div className={props.classThirteen}>
							<img src={StorybookIcon} alt='Storybook' className='img-fluid' />
						</div>
					</div>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Example;
