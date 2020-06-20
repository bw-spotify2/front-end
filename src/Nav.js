import React from "react";
import styled from "styled-components";
import { Link, Route } from 'react-router-dom';


const Nav = styled.div`
	text-align: center;
	margin: -0.5rem;
	padding: 0.5rem;
	background-image: linear-gradient(#2a2c2a, #a1a0a0 5%, #2a2c2a);
`;

const NavLink = styled.a`
    margin: .5rem;
	padding: .5rem;
	text-decoration: none;
	color: white;
	

    &:hover {
        background-color: #A1A0A0;
        color: black;
        border-radius: 5px;
        padding: .5rem;
    }
`;

function NavBar() {
	return (
		<Nav>
			<h1 id='app-header'>Spotify Song Suggester</h1>
			<Link to='/'><NavLink>Home</NavLink></Link>
			{/* Songs link is temporary so I can start working on the cards */}
			<Link to="/songs"><NavLink>Songs</NavLink></Link>
			
		</Nav>
	);
}

export default NavBar;
