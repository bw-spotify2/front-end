import React from 'react';
import styled from 'styled-components';
// import SongVisual from './song-components/SongVisual'

const CardWrapper = styled.div`
    background-color: #404946;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;
    height: 450px;
    width: 450px;

    @media screen and (max-width: 460px) {
        max-width: 350px;
    }
`;

const ContentWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`;

const H3 = styled.h3`
    text-align: center;
`;

const SongInfo = styled.div`
    color:white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;




function Song() {
    return (
        <CardWrapper>
               <H3>Song Title</H3> 
            < hr/>
            <ContentWrapper>
                <SongInfo>
                    <div>
                      <p>Song data &amp; visualization will go here</p>
                    </div>
                </SongInfo>

            </ContentWrapper>
          
        </CardWrapper>
    );
}

export default Song;