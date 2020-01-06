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
						<div
							class='modal fade'
							id='exampleModal'
							tabindex='-1'
							role='dialog'
							aria-labelledby='exampleModalLabel'
							aria-hidden='true'
						>
							<div class='modal-dialog' role='document'>
								<div class='modal-content'>
									<div class='modal-header'>
										<h5 class='modal-title' id='exampleModalLabel'>
											Modal title
										</h5>
										<button
											type='button'
											class='close'
											data-dismiss='modal'
											aria-label='Close'
										>
											<span aria-hidden='true'>&times;</span>
										</button>
									</div>
									<div class='modal-body'>...</div>
									<div class='modal-footer'>
										<button
											type='button'
											class='btn btn-secondary'
											data-dismiss='modal'
										>
											Close
										</button>
										<button type='button' class='btn btn-primary'>
											Save changes
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className='col-md-4 my-5 px-5'>
							<img
								className='img-fluid'
								src={Flashcards}
								alt='Flashcard Game'
							/>
						</div>
						<div className='col-md-4 my-5 px-5'>
							<img
								className='img-fluid'
								src={CryptoTracker}
								alt='CryptoTracker v1.0'
							/>
						</div>
					</div>
					<div className='row my-5'>
						<div className='col-md-4 my-5 px-5'>
							<img className='img-fluid' src={Storybook} alt='Storybook"' />
						</div>
						<div className='col-md-4 my-5 px-5'>
							<img
								className='img-fluid'
								src={Cocktails}
								alt='Cocktail Recipes API'
							/>
						</div>
						<div className='col-md-4 my-5 px-5'>
							<img className='img-fluid' src={DeliCious} alt='Delicious' />
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
