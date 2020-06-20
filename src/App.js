import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./Nav";
import SignIn from "./SignIn";
import Songs from './Songs';
import About from './About';

const Wrapper = styled.div`
	margin: 0.5rem;
`;

const Banner = styled.div`
	margin: 2rem;
	text-align: center;
	color: #2a2c2a;
	font-size: 1.5rem;
	-webkit-text-stroke-width: 0.1rem;
	-webkit-text-stroke-color: #a1a0a0;
`;

function App() {
	return (
		<Router>
			<Wrapper className="App">
				<NavBar />
				<Banner>
					<h2 id='app-callout'>We find the music so all you have to do is enjoy!</h2>
				</Banner>
				<Switch>
					<Route exact path="/" component={SignIn}></Route>
					<Route path='/songs' component={Songs}></Route>
					<Route path='/about' component={About}></Route>
				</Switch>
			</Wrapper>
		</Router>
	);
}

export default App;
