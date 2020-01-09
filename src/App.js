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
		<div className='App'>
			<Container classes='content d-flex flex-column justify-content-around'>
				<Content />
			</Container>
			<Container classes='d-flex flex-column position-relative'>
				<About />
			</Container>
			<Container>
				<Proficiencies />
			</Container>
			<Container>
				<Projects />
			</Container>
		</div>
	);
}

export default App;
