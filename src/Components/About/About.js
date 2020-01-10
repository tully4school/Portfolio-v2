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
							<h2 className='my-4 display-4'>My Background</h2> As a small boy i
							had an immense fascination with computers, games, and how they
							work. When i was around 11 i found the site{" "}
							<a href='http://www.angelfire.com'>angelfire.com</a>. As where
							most youth's have diaries or some way to express themselves i
							found this was my perfect space and as i shaped this site and
							wanted to customize it more and more i learned how to use their
							HTML editor and spend literally years researching and growing my
							knowledge of the power of HTML. Even showing off my site as a Show
							& Tell at my middle school which astounded my teachers and made me
							realize this was my true passion.
							<IG />
							<h2 className='my-4 display-4'>Becoming an engineer</h2> I spent
							years working for a company doing side work for their websites but
							holding different titles. My last employer took me in, trained me
							in HTML5, CSS3 & Twitter Bootstrap Design and I designed sites for
							<a href='https://www.koons.com/'> Koons Automall</a>,{" "}
							<a href='https://www.hersonsauto.com/'>Hersons Automall</a>,
							<a href='https://www.toyotacarlsbad.com'> Toyota Carlsbad</a> and{" "}
							<a href='http://www.autosavant.com/'>Autosavant</a> to name a few,
							but I had touched and worked on probably more than 60% of the
							Dealerships in America. These sites had alot of innerworking parts
							which made me interested on what actually goes on under the hood
							(API's, User Authentication, Javascript etc..). So i have taken
							some time to do my own research and go to school for Software
							Engineering. Now as a graduate of General Assembly, i feel im
							ready to take on the wold and really hone and apply the amazing
							skills i have learned.
						</p>
					</div>
				</div>
			</>
		);
	}
}
export default About;
