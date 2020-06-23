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

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const H3 = styled.h3`
    text-align: center;
    margin: 5px;
    
`;

const ImgContainer = styled.div`
    max-height:100px;
    max-width: 100px;
    margin: 5px;
`;

const Listen = styled.div`
    padding: 5px;
    margin: 5px;

    &:hover {
        background-color: white;
        border-radius: 10px;
        padding: 5px;
    }
`;


function SongFive(props) {
    console.log('SongFive', props.songs[4])


    return (
        <CardWrapper>
            {/* <Title>
                <ImgContainer>
                    <img alt='album-artwork' src={props.songs[4].album_art} />
                </ImgContainer>
                <div>
                <H3>{props.songs[4].song_name}</H3>
                <Listen>  
                
                <a target='blank' href={props.songs[4].song_url}><img src="https://i.imgur.com/UMlMHPP.png" alt="listen-on-spotify" /> </a>
                </Listen>
                </div>
                
            </Title>
                
            < hr/>
            <ContentWrapper>
    
            </ContentWrapper> */}
          
        </CardWrapper>
    );
}

export default SongFive;