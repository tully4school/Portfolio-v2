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
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Example;
