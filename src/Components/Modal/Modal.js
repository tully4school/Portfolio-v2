import React, { useState } from "react";
import "./Modal.css";
import Modal from "react-bootstrap/Modal";

function Example(props) {
	const [show, setShow] = useState(false);

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
				<Modal.Footer>{props.details}</Modal.Footer>
			</Modal>
		</>
	);
}

export default Example;
