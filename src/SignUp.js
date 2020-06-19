import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    text-align: center;
    max-width: 550px;
    border: 5px solid;
    border-image-source: radial-gradient(#A1A0A0, #2A2C2A);
    border-image-slice: 1;
    position: absolute;
    top: 30%;
    left: 50%;
    margin-left: -125px;
`;

const Inputs = styled.input`
    margin: .25rem;
    border-radius: 5px;
    padding: .5rem;
`;

const Submission = styled.div`
    margin: .25rem;
    border-radius: 5px;
    padding: .5rem;
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
    border-image-source: radial-gradient(#A1A0A0, #2A2C2A);
    border-image-slice: 1;
    margin-bottom: 10px;
`;


function SignUp() {
    return (

        <FormContainer>
            <FormTitle>
                <H3>New?</H3> 
                <H3>Sign Up Here</H3>
            </FormTitle>
            <Inputs placeholder='Email' type='text'></Inputs>
            <Inputs placeholder='Username' type='text'></Inputs>
            <Inputs placeholder='Password' type='password'></Inputs>
            <Submission type="submit">Sign Up</Submission>
        </FormContainer>
        
        
        
    );
}

export default SignUp;