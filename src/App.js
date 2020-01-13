import React from "react";
import "./App.css";
import Container from "./Components/Container/Container";
import Content from "./Components/Content/Content";
import About from "./Components/About/About";
import Proficiencies from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
	return (
		<div className='App container-fluid'>
			<div className='row'>
				<div className='col-md-12'>
					<Container classes='content d-flex flex-column justify-content-around'>
						<Content />
					</Container>
				</div>
			</div>

			<div className='row'>
				<div className='col-md-12'>
					<Container classes='d-flex flex-column position-relative'>
						<About />
					</Container>
				</div>
			</div>

			<div className='row'>
				<div className='col-md-12'>
					<Container>
						<Proficiencies />
					</Container>
				</div>
			</div>

			<div className='row'>
				<div className='col-md-12'>
					<Container>
						<Projects />
					</Container>
				</div>
			</div>

			<div className='row'>
				<div className='col-md-12'>
					<Container>
						<Contact />
					</Container>
				</div>
			</div>
		</div>
	);
}

export default App;
