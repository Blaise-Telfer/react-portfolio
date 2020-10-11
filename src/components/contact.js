import React, {Component} from 'react';
import {Tween} from 'react-gsap';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import avatar from './images/avatar.png';

class Contact extends Component{
	render(){
		return(
			<div className="contact-body">
				<Grid className="contact-grid" shadow={5}>
					<Cell col={6} className="about">
						<Tween from={{opacity: 0}} to={{opacity: 1, delay: .5}} ref={ref => this.tween = ref} >
							<img
								className="av-img"
								src={avatar}
							/>
						</Tween>
						<p style={{width:'75%', margin:'auto'}}>
							Contact info Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, fugit 
							minus nobis incidunt error quibusdam inventore odit modi itaque laborum!
						</p>
					</Cell>
					<Cell col={6} className="contact-info">
						<div className="contact-container">
							<h2>Contact Information</h2>
							<hr/>
							<div className="numbers">
								<a href="mailto:[you_email]?subject=[subject]" target="_blank" rel="noopener noreferrer">
									<i className="fas fa-envelope" aria-hidden="true"></i>
									<p>your email</p>
								</a>
								<a href="[github_url]" target="_blank">
									<i className="fab fa-github" aria-hidden="true"></i>
									<p>your GitHub</p>
								</a>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
	
}
export default Contact;