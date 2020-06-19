import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
    text-align: center;
    margin: -.5rem;
    padding: .5rem;
    background-image: linear-gradient(#2A2C2A, #A1A0A0 5%, #2A2C2A);
`;

const Link = styled.a`
    margin: .5rem;
    padding; .5rem;

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
        <h1>Nav Bar</h1>
        <div>
            <Link>Nav Links</Link>
            <Link>Nav Links</Link>
            <Link>Nav Links</Link>
        </div>
    </Nav>
    );
}

export default NavBar;