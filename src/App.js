import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
		<Layout>
			<Header className="header-color" title=" " scroll>
				<Navigation>
					<Link to="/" className="nav">Home</Link>
					<Link to="/projects" className="nav">Portfolio</Link>
					<Link to="/contact" className="nav">Contact</Link>
				</Navigation>     
			</Header>
			<Drawer title="Your Name" className="drawer">     
				<hr/>
				<Navigation>
					<Link to="/" className="drawer">Home</Link>
					<Link to="/projects" className="drawer">Portfolio</Link>
					<Link to="/contact" className="drawer">Contact</Link>
				</Navigation>
			</Drawer>
			<Content>
				<div className="page-content" />
				<Main></Main>
			</Content>
		</Layout>
	</div>
  );
}

export default App;
