import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axiosWithAuth from "./utils/axiosWithAuth";
import { TrackHandler } from "./context/TrackContext";
import styled from "styled-components";
import NavBar from "./Nav";
import SignIn from "./SignIn";
import Songs from "./Songs";
import About from "./About";
import { UserController } from "./context/UserContext";

const Wrapper = styled.div`
	margin: 0.5rem;
`;

function App() {
	const [track, setTrack] = useState([]);

	const songDelete = () => {
		axiosWithAuth()
			.delete("")
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err.message, err.response));
	};

	return (
		<TrackHandler>
			<UserController>
				<Router>
					<Wrapper className="App">
						<NavBar />
						<Switch>
							<Route exact path="/" component={SignIn}></Route>
							<Route path="/songs" component={Songs}></Route>
							<Route path="/about" component={About}></Route>
						</Switch>
					</Wrapper>
				</Router>
			</UserController>
		</TrackHandler>
	);
}

export default App;
