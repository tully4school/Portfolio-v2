import React from "react";
import "./App.css";
import Logo from "./Components/Logo/Logo";
import Container from "./Components/Container/Container";
import Content from "./Components/Content/Content";
function App() {
	return (
		<div className='App'>
			<Logo />
			<Container>
				<Content />
			</Container>
			<Container>
				<Content />
			</Container>
		</div>
	);
}

export default App;
