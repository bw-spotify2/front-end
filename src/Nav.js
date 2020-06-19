import React from "react";
import styled from "styled-components";

const Nav = styled.div`
	text-align: center;
	margin: -0.5rem;
	padding: 0.5rem;
	background-image: linear-gradient(#2a2c2a, #a1a0a0 5%, #2a2c2a);
`;

const Link = styled.a`
    margin: .5rem;
    padding: .5rem;

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
			<h1>Spotify Song Suggester</h1>
			<div>
				<Link>About</Link>
			</div>
		</Nav>
	);
}

export default NavBar;
