import React from "react";
import styled from "styled-components";

const FormContainerSignUp = styled.form`
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
	margin-left: -165px;
`;

const InputSignUp = styled.input`
	margin: 0.25rem;
	border-radius: 5px;
	padding: 0.5rem;
`;

const SubmissionSignUp = styled.div`
	margin: 0.25rem;
	border-radius: 5px;
	padding: 0.5rem;
	&:hover {
		
		color: black;
		font-weight: 600;
	}
`;

const H3SignUp = styled.h3`
	line-height: 5px;
`;

const FormTitleSignUp = styled.div`
	border-bottom: 5px solid;
	border-image-source: radial-gradient(#a1a0a0, #2a2c2a);
	border-image-slice: 1;
	margin-bottom: 10px;
`;

function SignUp() {

	
function showSignIn() {
    console.log('hello')
    document.getElementById('sign-up').style.display = 'none';
    document.getElementById('sign-in').style.display = 'flex';
}

	return (
        <div id='sign-up'>
        <FormContainerSignUp >
            <FormTitleSignUp>
                <H3SignUp>Please Register</H3SignUp>
            </FormTitleSignUp>

            <InputSignUp
                placeholder='Desired Username'
                type='text'
                name='username'>
            </InputSignUp>

            <InputSignUp
                placeholder='Enter Password'
                type='password'
                name='username'>
            </InputSignUp>

            <SubmissionSignUp>
                <button type='submit'>Sign Up</button>
            </SubmissionSignUp>

            <h5><a href="/#" onClick={showSignIn}>Return To Sign In</a></h5>

        </FormContainerSignUp>

        </div>

	)
};

export default SignUp;