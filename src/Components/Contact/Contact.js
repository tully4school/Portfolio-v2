import React, { Component } from "react";
import "./Contact.css";
import Header from "../Header/Header";
import ContactForm from "../ContactForm/ContactForm";
class Contact extends Component {
	render() {
		return (
			<>
				<div className='row'>
					<div className='col-md-12'>
						<Header span='contact' header='Contact Me' />
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<ContactForm />
					</div>
				</div>
			</>
		);
	}
}

export default Contact;
