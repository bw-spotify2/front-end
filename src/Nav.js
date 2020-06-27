import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const H1 = styled.h1`
	@media screen and (max-width: 500px) {
		display: none;
	}
`;

const Nav = styled.div`
	text-align: center;
	margin: -0.5rem;
	padding: 0.5rem;
	background-image: linear-gradient(#2a2c2a, #a1a0a0 5%, #2a2c2a);
`;

const NavLink = styled.span`
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
			<H1 id='app-header'>Spotify Song Suggester</H1>
			<Link to='/'><NavLink>Home</NavLink></Link>
			<Link to={{pathname:'https://kind-agnesi-0a960b.netlify.app/'}} target='blank'><NavLink>About</NavLink></Link>
			{/* Songs link is temporary so I can start working on the cards */}
			<Link to="/songs"><NavLink>Songs</NavLink></Link>
			
		</Nav>
	);
}

export default NavBar;
