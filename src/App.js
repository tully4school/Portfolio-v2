import React from "react";
import "./App.css";
import Logo from "./Components/Logo/Logo";
import Container from "./Components/Container/Container";
import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";

function App() {
	return (
		<div className='App'>
			<Container classes='content d-flex flex-column'>
				<Content />
			</Container>
			<Container classes='vh-100 d-flex flex-column position-relative'>
				<About />
			</Container>
			<Container>
				<Projects />
			</Container>
		</div>
	);
}

export default App;
