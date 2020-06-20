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


function App() {
	return (
		<Router>
			<Wrapper className="App">
				<NavBar />
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
