import React, {Component} from 'react';
import {Tween} from 'react-gsap';
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import {Link} from 'react-router-dom';
import avatar from './images/avatar.png';
import projectCard from './images/blank.jpg';


class Landing extends Component{
	
	componentDidMount() {
		const tween = this.tween.getGSAP();
		tween.timeScale(0.5);
	}
	
	arrowTab(e){
		if (e.target && e.target.className == 'toggle'){
			var next = e.target.nextSibling;
			if(next.style.display == "none"){
				next.style.display = "block";
				e.target.id="backdrop2";
			}else{
				next.style.display = "none";
				e.target.id ="backdrop";
			}
		}
	}
	
	
	render(){
		return(
			<div style={{width:'100%', height:'100%', margin:'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
					
						<div class="top-display">
							<Tween from={{opacity: 0, y:-150}} to={{opacity: 1, y: 0, delay: .5}} ref={ref => this.tween = ref} >
								<img
									className="av-img"
									src={avatar}
								/>
								
							</Tween>
							
							<Tween from={{opacity: 0, y:-150}} to={{opacity: 1, y: 0, delay: 1}} ref={ref => this.tween = ref} >
								<div class="info">
									<div class="name">
										<h1>Your Name</h1>
										<h2>Description lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed obcaecati consequatur 
										nobis adipisci tenetur expedita sunt. Harum, laboriosam assumenda vitae.
										</h2>
									</div>
									<div class="btn-display">
										<Link to="/contact" class="contact-btn">Get In Touch</Link>
										<a href="#bottom"><i class="fas fa-arrow-circle-down"></i></a>
										<Link to="/projects" class="contact-btn">See My Work</Link>
									</div>
								</div>
							</Tween>
						</div>
						
						<Tween from={{opacity: 0, x:150}} to={{opacity: 1, x: 0, delay: 1}} ref={ref => this.tween = ref} >
							<div class="icons">
								<a href="mailto:[you_email]?subject=[subject]" target="_blank" rel="noopener noreferrer">
									<i className="fas fa-envelope" aria-hidden="true"></i>
								</a>
								<a href="[github_url]" target="_blank">
									<i className="fab fa-github" aria-hidden="true"></i>
								</a>
								<a href="[url]" target="_blank">
									<i className="fab fa-linkedin" aria-hidden="true"></i>
								</a>	
							</div>
						</Tween>
						
						<div className="banner-text">
							<h1>Web Developer</h1>
							<hr/>
							<p>HTML | CSS | Javascript | React | NodeJS | Express</p>
						</div>
						
						<div class="test">
							<Link to="/projects" class="gallery-tab">Full Portfolio</Link>
						</div>
						
						<Tween from={{opacity: 0, y:150}} to={{opacity: 1, y: 0, delay: .5}} ref={ref => this.tween = ref} >
							<div className="landing-display" id="bottom">
							
								<Card shadow={5} style={{minWidth:'450'}}>
									<h2>Landing Pages</h2>
									<div class="image-box">
										<div class="overlay"></div>
										<img src={projectCard} />
										<CardActions border class="container">
											<a class="toggle" id="backdrop" onClick={this.arrowTab}></a>
											<p style={{display: "none"}}>description</p>
										</CardActions>
										<div class="buttons">
											<a href="[demo_url]" target="_blank">See Page</a>
											<a href="[github_url]" target="_blank">See Github</a>
										</div>
									</div>
								</Card>
								
								<Card shadow={5} style={{minWidth:'450'}}>
									<h2>Websites</h2>
									<div class="image-box">
										<div class="overlay"></div>
										<img src={projectCard} />
										<CardActions border class="container">
											<a class="toggle" id="backdrop" onClick={this.arrowTab}></a>
											<p style={{display: "none"}}>description</p>
										</CardActions>
										<div class="buttons">
											<a href="[demo_url" target="_blank">See Page</a>
											<a href="[github_url]" target="_blank">See Github</a>
										</div>
									</div>
								</Card>
								
								<Card shadow={5} style={{minWidth:'450'}}>
									<h2>Apps</h2>
									<div class="image-box">
										<div class="overlay"></div>
										<img src={projectCard} />
										<CardActions border class="container">
											<a class="toggle" id="backdrop" onClick={this.arrowTab}></a>
											<p style={{display: "none"}}>description</p>
										</CardActions>
										<div class="buttons">
											<a href="[demo_url" target="_blank">See Page</a>
											<a href="[github_url]" target="_blank">See Github</a>
										</div>
									</div>
								</Card>
								
							</div>
						</Tween>
						
					</Cell>
				</Grid>
			</div>
			
		);
	}
}
export default Landing;