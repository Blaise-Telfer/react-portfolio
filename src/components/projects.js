import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import projectCard from './images/blank.jpg';


class Projects extends Component{
	constructor(props){
		super(props);
		this.state = {activeTab: 0};
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
	
	
	toggleCategories(){
		if(this.state.activeTab == 0){
			return(
				<div>
					<div className="projects-grid">
						
						<Card shadow={5} style={{minWidth:'450'}}>
							<h2>Project Title</h2>
							<div className="image-box">
								<div className="overlay"></div>
								<img src={projectCard} />
								<CardActions border className="container">
									<a className="toggle" id="backdrop" onClick={this.arrowTab}></a>
									<p style={{display: "none"}}>
										Networking app that allows user to register, log in, 
										create a profile, create posts and search others' posts by category and location.
									</p>
								</CardActions>
								<div className="buttons">
									<a href="[demo_url]" target="_blank">See Page</a>
									<a href="[github_url]" target="_blank">See Code</a>
								</div>
							</div>
						</Card>
						<Card shadow={5} style={{minWidth:'450'}}>
							<h2>Project Title</h2>
							<div className="image-box">
								<div className="overlay"></div>
								<img src={projectCard} />
								<CardActions border className="container">
									<a className="toggle" id="backdrop" onClick={this.arrowTab}></a>
									<p style={{display: "none"}}>
										Networking app that allows user to register, log in, 
										create a profile, create posts and search others' posts by category and location.
									</p>
								</CardActions>
								<div className="buttons">
									<a href="[demo_url]" target="_blank">See Page</a>
									<a href="[github_url]" target="_blank">See Code</a>
								</div>
							</div>
						</Card>
						<Card shadow={5} style={{minWidth:'450'}}>
							<h2>Project Title</h2>
							<div className="image-box">
								<div className="overlay"></div>
								<img src={projectCard} />
								<CardActions border className="container">
									<a className="toggle" id="backdrop" onClick={this.arrowTab}></a>
									<p style={{display: "none"}}>
										Networking app that allows user to register, log in, 
										create a profile, create posts and search others' posts by category and location.
									</p>
								</CardActions>
								<div className="buttons">
									<a href="[demo_url]" target="_blank">See Page</a>
									<a href="[github_url]" target="_blank">See Code</a>
								</div>
							</div>
						</Card>
						
					</div>
					<div className="projects-grid">
						
						<Card shadow={5} style={{minWidth:'450'}}>
							<h2>Project Title</h2>
							<div className="image-box">
								<div className="overlay"></div>
								<img src={projectCard} />
								<CardActions border className="container">
									<a className="toggle" id="backdrop" onClick={this.arrowTab}></a>
									<p style={{display: "none"}}>
										Networking app that allows user to register, log in, 
										create a profile, create posts and search others' posts by category and location.
									</p>
								</CardActions>
								<div className="buttons">
									<a href="[demo_url]" target="_blank">See Page</a>
									<a href="[github_url]" target="_blank">See Code</a>
								</div>
							</div>
						</Card>
						
					</div>
				</div>
			)
		}
		if(this.state.activeTab == 1){
			return(
				<div>
					<div className="projects-grid">
						
						<Card shadow={5} style={{minWidth:'450'}}>
							<h2>Project Title</h2>
							<div className="image-box">
								<div className="overlay"></div>
								<img src={projectCard} />
								<CardActions border className="container">
									<a className="toggle" id="backdrop" onClick={this.arrowTab}></a>
									<p style={{display: "none"}}>
										Networking app that allows user to register, log in, 
										create a profile, create posts and search others' posts by category and location.
									</p>
								</CardActions>
								<div className="buttons">
									<a href="[demo_url]" target="_blank">See Page</a>
									<a href="[github_url]" target="_blank">See Code</a>
								</div>
							</div>
						</Card>
						<Card shadow={5} style={{minWidth:'450'}}>
							<h2>Project Title</h2>
							<div className="image-box">
								<div className="overlay"></div>
								<img src={projectCard} />
								<CardActions border className="container">
									<a className="toggle" id="backdrop" onClick={this.arrowTab}></a>
									<p style={{display: "none"}}>
										Networking app that allows user to register, log in, 
										create a profile, create posts and search others' posts by category and location.
									</p>
								</CardActions>
								<div className="buttons">
									<a href="[demo_url]" target="_blank">See Page</a>
									<a href="[github_url]" target="_blank">See Code</a>
								</div>
							</div>
						</Card>
						
					</div>
				</div>
			)
		}
		else if(this.state.activeTab == 2){
			return(
			<div>
				<div className="projects-grid">
				
					<Card shadow={5} style={{minWidth:'450'}}>
							<h2>Project Title</h2>
							<div className="image-box">
								<div className="overlay"></div>
								<img src={projectCard} />
								<CardActions border className="container">
									<a className="toggle" id="backdrop" onClick={this.arrowTab}></a>
									<p style={{display: "none"}}>
										Networking app that allows user to register, log in, 
										create a profile, create posts and search others' posts by category and location.
									</p>
								</CardActions>
								<div className="buttons">
									<a href="[demo_url]" target="_blank">See Page</a>
									<a href="[github_url]" target="_blank">See Code</a>
								</div>
							</div>
						</Card>
					<Card shadow={5} style={{minWidth:'450'}}>
							<h2>Project Title</h2>
							<div className="image-box">
								<div className="overlay"></div>
								<img src={projectCard} />
								<CardActions border className="container">
									<a className="toggle" id="backdrop" onClick={this.arrowTab}></a>
									<p style={{display: "none"}}>
										Networking app that allows user to register, log in, 
										create a profile, create posts and search others' posts by category and location.
									</p>
								</CardActions>
								<div className="buttons">
									<a href="[demo_url]" target="_blank">See Page</a>
									<a href="[github_url]" target="_blank">See Code</a>
								</div>
							</div>
						</Card>
						
				</div>
			</div>
			)
		}
	}
	
	render(){
		return(
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab className="tab-text">Category 1</Tab>
					<Tab className="tab-text">Category 2</Tab>
					<Tab className="tab-text">Category 3</Tab>
				</Tabs>
				
				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
				
			</div>
		)
	}
}
export default Projects;