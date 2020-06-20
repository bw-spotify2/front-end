import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    background-color: #404946;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;
    height: 450px;
    width: 450px;
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
`;


function Song() {
    return (
        <CardWrapper>
               <H3>Song Title</H3> 
            < hr/>
            <ContentWrapper>
                <SongInfo>
                    <ul>
                        <li>Release In</li>
                        <li> X Tracks</li>
                        <li>Genere: </li>
                    </ul>
                </SongInfo>

            </ContentWrapper>
          
        </CardWrapper>
    );
}

export default Song;