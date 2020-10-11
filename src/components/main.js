import React from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingPage from './landingPage';
import Contact from './contact';
import Projects from './projects';

const Main = () => (
	<Switch>
		<Route exact path="/" component={LandingPage} />
		<Route exact path="/contact" component={Contact} />
		<Route exact path="/projects" component={Projects} />
	</Switch>
)

export default Main;
