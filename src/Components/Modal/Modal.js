import React, { useState, render } from "react";
import "./Modal.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Example(props) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<img
				className='modal-img img-fluid'
				src={props.src}
				onClick={handleShow}
			/>

			<Modal
				show={show}
				onHide={() => setShow(false)}
				dialogClassName='modal-50w'
				aria-labelledby='exampleModal'
			>
				<Modal.Header closeButton>
					<Modal.Title id='exampleModal'>{props.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{props.img}</Modal.Body>
				<Modal.Footer>{props.details}</Modal.Footer>
			</Modal>
		</>
	);
}

export default Example;
