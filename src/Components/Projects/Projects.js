import React, { Component } from "react";
import "./Projects.css";
import Header from "../Header/Header";
import Snoop from "../../Images/Snoop.png";
import Flashcards from "../../Images/Flashcards.png";
import CryptoTracker from "../../Images/CryptoTracker.png";
import Storybook from "../../Images/Storybook.png";
import Cocktails from "../../Images/CocktailMixerApi.png";
import DeliCious from "../../Images/DeliCious.png";
class Projects extends Component {
	render() {
		return (
			<>
				<div className='row'>
					<div className='col-md-12'>
						<Header span='projects-header' header='Recent Projects' />
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12 projects'>
						<div class='wrapper'>
							<div class='media'>
								<div class='layer'>
									<h3>First Project</h3>
									<p>
										For our first project we had to take a picture and turn it
										into the real thing.
									</p>
								</div>
								<img src={Snoop} alt='First Project "Snoop"' />
							</div>
							<div class='media'>
								<div class='layer'>
									<h3>Flashcards</h3>
									<p>The first "game" we made using javascript</p>
								</div>
								<img src={Flashcards} alt='Flashcard Game' />
							</div>
							<div class='media'>
								<div class='layer'>
									<h3>CryptoTracker v1.0</h3>
									<p>
										For this the idea was to make a site using our choice of API
									</p>
								</div>
								<img src={CryptoTracker} alt='CryptoTracker v1.0' />
							</div>
							<div class='media'>
								<div class='layer'>
									<h3>Storybook</h3>
									<p>
										Created my first Component Library with playground using
										Storybook
									</p>
									<ul>
										<li>React.js</li>
										<li>Javascript</li>
										<li>HTML5</li>
										<li>CSS3</li>
										<li>Storybook</li>
									</ul>
								</div>
								<img src={Storybook} alt='Storybook"' />
							</div>
							<div class='media'>
								<div class='layer'>
									<h3>Cocktail API</h3>
									<p>
										We put together our own API as well as our own
										documentation. Full CRUD
									</p>
									<ul>
										<li>MongoDB // Mongoose</li>
										<li>YAML // SwaggerHub</li>
										<li>Javascript // Express.js</li>
									</ul>
								</div>
								<img src={Cocktails} alt='Cocktail Recipes API' />
							</div>
							<div class='media'>
								<div class='layer'>
									<h3>DeliCious</h3>
									<p>First Group Project with Tyler Eikenberg & Karen Heyn</p>
									<p>
										We created a Yelp like site for the top 100 Restaurants in
										DC
									</p>
									<ul>
										<li>React.js</li>
										<li>Bootstrap</li>
										<li>Storybook</li>
										<li>Mapbox</li>
									</ul>
								</div>
								<img src={DeliCious} alt='Delicious' />
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default Projects;
