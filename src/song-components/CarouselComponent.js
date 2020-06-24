import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CarouselContainer = styled.div`
`;

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




function Carousel() {

    var [suggestedSongs, setSongs] = useState([{}])

    useEffect(() => {
        axios
            .get('https://cors-anywhere.herokuapp.com/https://spotify-api-project.herokuapp.com/api/frontend/savedsongs')
            .then((res) => {
                console.log('response from saved songs', res.data);
                setSongs(res.data)
            })
            .catch((err) => console.log('error connecting to saved songs'))
    }, []);

    console.log('suggested songs', suggestedSongs)

    return(
    
        <CarouselContainer>
            <ul>
                {suggestedSongs.map((song) => {
                    return <li>
        <CardWrapper>
            <Title>
                <ImgContainer>
                    <img alt='album-artwork' src={song.album_art} />
                </ImgContainer>
                <div>
                    <H3>{song.song_name} {song.id}</H3>
                    <Listen>  
                        <a target='blank' href={song.song_url}><img src="https://i.imgur.com/UMlMHPP.png" alt="listen-on-spotify" /> </a>
                    </Listen>
                </div>
            </Title>
                
            < hr/>
            <ContentWrapper>
    
            </ContentWrapper>
          
        </CardWrapper>
                    
                    
                    </li>
                })}
            </ul>

        </CarouselContainer>
        
    );
}

export default Carousel;