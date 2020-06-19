import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	padding: 1.5rem;
	text-align: center;
	max-width: 550px;
	border: 5px solid;
	border-image-source: radial-gradient(#a1a0a0, #2a2c2a);
	border-image-slice: 1;
	position: absolute;
	top: 30%;
	left: 50%;
	margin-left: -125px;
`;

const Inputs = styled.input`
	margin: 0.25rem;
	border-radius: 5px;
	padding: 0.5rem;
`;

const Submission = styled.div`
	margin: 0.25rem;
	border-radius: 5px;
	padding: 0.5rem;
	&:hover {
		background-color: white;
		color: black;
		font-weight: 600;
	}
`;

const H3 = styled.h3`
	line-height: 5px;
`;

const FormTitle = styled.div`
	border-bottom: 5px solid;
	border-image-source: radial-gradient(#a1a0a0, #2a2c2a);
	border-image-slice: 1;
	margin-bottom: 10px;
`;


const SignIn = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    
    const handleChanges = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };
    
	return (
		<FormContainer>
			<FormTitle>
				<H3>Please Sign In</H3>
			</FormTitle>

			<Inputs
				placeholder="Username"
				type="text"
				name="username"
				value={user.username}
				onChange={handleChanges}></Inputs>
			<Inputs
				placeholder="Password"
				type="password"
				name="password"
				value={user.password}
				onChange={handleChanges}></Inputs>
			<Submission type="submit">Sign In</Submission>
		</FormContainer>
	);
}

export default SignIn;
