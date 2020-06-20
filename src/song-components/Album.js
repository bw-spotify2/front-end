import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    background-color: #404946;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;
    height: 450px;
    width: 450px;

    @media screen and (max-width: 460px) {
        width: 350px;
    }
        
`;

const ContentWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const H3 = styled.h3`
    text-align: center;
`;

const ImgContainer = styled.div`
    max-height: 350px;
    max-width: 350px;
`;

const AlbumInfo = styled.div`
    color:white;
`;


function Album() {
    return (
        <CardWrapper>
               <H3>Album Title</H3> 
            < hr/>
            <ContentWrapper>

                <ImgContainer>
                    <img alt='album-artwork' src='https://i.scdn.co/image/ab67616d00001e021a46e59b547c2c356403a478' />
                </ImgContainer>
                <AlbumInfo>
                    <ul>
                        <li>Release In: Year</li>
                        <li>Tracks: num</li>
                        <li>Genre: genre, genre, genre, genre, genre, genre. </li>
                    </ul>
                </AlbumInfo>

            </ContentWrapper>
          
        </CardWrapper>
    );
}

export default Album;
