import React, { Component } from "react";
import "./Projects.css";
import $ from "jquery";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import Snoop from "../../Images/Snoop.png";
import Flashcards from "../../Images/Flashcards.png";
import CryptoTracker from "../../Images/CryptoTracker.png";
import Storybook from "../../Images/Storybook.png";
import Cocktails from "../../Images/CocktailMixerApi.png";
import DeliCious from "../../Images/DeliCious.png";
class Projects extends Component {
	componentDidMount() {
		$("#myModal").on("shown.bs.modal", function() {
			$("#myInput").trigger("focus");
		});
	}
	render() {
		return (
			<>
				<div className='row'>
					<div className='col-md-12'>
						<Header span='projects-header' header='Recent Projects' />
					</div>
				</div>
				<div className='projects my-5'>
					<div className='row'>
						<div className='col-md-4 my-5 px-5 justify-space-around'>
							<Modal
								img={<img src={Snoop} className='img-fluid' />}
								src={Snoop}
								name='Week One School Project: Build a Responsive Website!'
								details='My first project as a student at General Assembly was to "build a responsive website using HTML and CSS. Research and pick a design for a website and build an honest replica of it" For my site i picked a picture, looking much the same of what you are seeing right now. What i did not realize until a day before it was due was that this site was much bigger than i thought....yes....i had found the ACTUAL mockup. i did the best i could with the day that remained. you can see it here live.'
							/>
						</div>
						<div className='col-md-4 my-5 px-5'>
							<Modal
								img={<img src={CryptoTracker} className='img-fluid' />}
								src={CryptoTracker}
								name='Week Three School Project UI Element Project!'
								details="My third project was as follows 'You will need to pick a UI pattern from the list below and an API. You'll then build out the UI pattern you chose to work with the API you chose.' I chose an API for CryptoCurrency. I created a site the shows the current top ten crypto's and their current value and their 24 hour change rate on a sleek, simple, easy to read, fully responsive design."
							/>
						</div>
						<div className='col-md-4 my-5 px-5'>
							<Modal
								img={<img src={Flashcards} className='img-fluid' />}
								src={Flashcards}
								name='Week Four School Project: Build a Game with HTML, CSS and JavaScript'
								details="My fourth project was a very fun, and enlightening one. this was to create a familiar game using HTML, CSS and JS! Please choose one of the following options: Flash Cards, Trivia (Self-scoring),Hangman, Tower of Hanoi, Simon. This was 'an opportunity to be creative, and work through some tough programming challenges.' Well, seeing as i thought my vocabulary in JS was lacking i decided to shoot for a flashcard game. the fun part was making a working model consisting of 2000 lines of code and working it down to just over 400. It wasn't my gold model when i turned it in, but was functioning and I was extremely happy. I will be going back in to complete it as soon as i have time tho :)"
							/>
						</div>
					</div>
					<div className='row my-5'>
						<div className='col-md-4 my-5 px-5'>
							<Modal
								img={<img src={Storybook} className='img-fluid' />}
								src={Storybook}
								name='Week Five School Project: Build a React Component Library With Storybook'
								details="My fifth project, another FUUUUN project since i felt since week 1 we didn't really play with much CSS, this was right in my wheelhouse. Prerequisites include: React and Components, Adobe XD and Storybook. We were given XD with a bunch of components to make and we had to make exact replicas of."
							/>
						</div>
						<div className='col-md-4 my-5 px-5'>
							<Modal
								img={<img src={Cocktails} className='img-fluid' />}
								src={Cocktails}
								name='Project 6: Build a JSON API'
								details="My 6th Project: You will be building a JSON API using Mongoose and Express. In addition, you will find a dataset online to pull data from. You'll use this retrieved data to build your own model(s), and also to seed your database with. Requirements: Be built using Express and Mongoose, Have at least one model,Have complete CR functionality implemented with RESTful routes, Be deployed to Heroku, Have well-documented API routes. This was pretty fun, especially knowing that later that week we would start the build of a front-end. The documentation was completed via SwaggerDocs which a classmate and i had a blast learning about."
							/>
						</div>
						<div className='col-md-4 my-5 px-5'>
							<Modal
								img={<img src={DeliCious} className='img-fluid' />}
								src={DeliCious}
								name='Project 8: Building a Full Stack MERN Application'
								details="My 8th project was a big one but a lot of fun. we were broken down into groups of 3 and my group worked really well together. Requirements: Your back end must be a Node, Express, and Mongoose API with at least 2 non-user models. No associations are required, Must have Create, Read, Update, and Delete functionality built throughout the app (i.e. You don't need full CRUD on every model, just full CRUD throughout your models where it makes sense), Your front end must use React and leverage the backend API in the above requirements,You must use React Router to handle multiple views, You must communicate with the back-end API RESTfully to Create, Read, Update, and Delete resources (using either fetch or axios)."
							/>
						</div>
					</div>
				</div>
				{/* <div className='row'>
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
				</div> */}
			</>
		);
	}
}
export default Projects;
