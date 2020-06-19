import React from 'react';
import styled from 'styled-components';
import NavBar from './Nav';
import SignIn from './SignIn';

const Wrapper = styled.div`
  margin: .5rem;
`;

const Banner = styled.div`
  margin: 2rem;
  text-align: center;
  color: #2A2C2A;
  font-size: 1.5rem;
  -webkit-text-stroke-width: .1rem;
  -webkit-text-stroke-color: #A1A0A0;
`;

function App() {
  return (
    
    <Wrapper className="App">
      <NavBar />
      <Banner>
        <h2>We find the music so all you have to do is enjoy!</h2>
      </Banner>
      <SignIn />
    </Wrapper>
  );
}

export default App;
