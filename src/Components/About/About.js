import React, { Component } from "react";
import "./About.css";
import Header from "../Header/Header";
import IG from "../IG/IG";
class About extends Component {
	render() {
		return (
			<>
				<div className='row'>
					<div className='col-md-12'>
						<Header span='projects-header' header='About Me' />
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12 d-flex px-5 py-5 align-items-center'>
						<p className='about-p'>
							<h2 className='my-4 display-4'>My Background</h2> As a kid I
							had an immense fascination with computers, games, and how they
							work. At the age of 11 I found the site{" "}
							<a href='http://www.angelfire.com'>angelfire.com</a>. As where
							most youth's have diaries or some way to express themselves I
							found this was my perfect space and as I shaped this site and
							wanted to customize it more and more I learned how to use their
							"Advanced" editor (HTML). I spent literally years researching and learning the power of HTML. Even showing off my site at a Show
							& Tell in my middle school class which astounded my teachers. This showed me
							what I wanted to be when I "grew up", the name wasn't there yet, but the passion for Web Development was.
							<IG />
							<h2 className='my-4 display-4'>Becoming an engineer</h2> I spent
							years working for a company doing side work for their websites but
							holding different titles and basically working as a junior DBA. My last employer took me in, trained me
							in HTML5, CSS3 & Twitter Bootstrap Design and I designed and implemented those designs for
							<a href='https://www.koons.com/'> Koons Automall</a>,{" "}
							<a href='https://www.hersonsauto.com/'>Hersons Automall</a>,
							<a href='https://www.toyotacarlsbad.com'> Toyota Carlsbad</a> and{" "}
							<a href='http://www.autosavant.com/'>Autosavant</a> to name a few,
							but I had touched and worked on probably more than 60% of the
							Automobile Dealerships in America. These sites had alot of innerworking parts
							which peaked my interest on what actually goes on under the hood
							(API's, User Authentication, Javascript etc..). So I took
							some time to do my own research and go to school for Software
							Engineering. Now as a graduate of General Assembly, I feel i'm
							ready to take on the world, really hone and apply the amazing
							skills I have learned.
						</p>
					</div>
				</div>
			</>
		);
	}
}
export default About;
