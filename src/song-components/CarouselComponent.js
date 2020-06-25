import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Line } from 'react-chartjs-2';



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
  margin: 1%;
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

const SongInfoContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const SongInfo = styled.div`
    border: 1px solid white;
    border-radius: 5px;
    margin: 5px;
    padding: 0px 5px;
`;




function CarouselComponent() {

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


    return(
            <>
               <Carousel arrows dots>
                {suggestedSongs.map((song) => {
                    const Graphs = () => {
                        const [chartData, setChartData] = useState({})
                    
                        const chart = () => {
                            setChartData({
                                labels: ['Energy', 'Danceability', 'Acousticness', 'Liveness', 'Speechiness'],
                                datasets: [
                                    {
                                        label: 'Song Characteristics',
                                        data: [(song.energy * 100), (song.danceability * 100), (song.acousticness * 100), (song.liveness * 100), (song.speechiness * 100)],
                                        backgroundColor: 'rgba(0, 0, 0, .5)',
                                        borderWidth: 5,
                                        
                                    }
                                ]
                                
                            })
                       
                        }
                    
                        useEffect(() => {
                            chart()
                        }, [])
                    
                        return(
                            <div>
                                <Line data={chartData} />
                            </div>
                        )
                    
                    }

                    return <li>


                        <CardWrapper>
                            <Title>
                                <ImgContainer>
                                    <img alt='album-artwork' src={song.album_art} />
                                </ImgContainer>
                                <div>
                                    <H3>{song.song_name}</H3>
                                    <Listen>  
                                        <a target='blank' href={song.song_url}><img src="https://i.imgur.com/UMlMHPP.png" alt="listen-on-spotify" /> </a>
                                    </Listen>
                                </div>
                            </Title>
                                
                            < hr/>
                            <ContentWrapper>
                                <Graphs />
                                <SongInfoContainer>
                                    <SongInfo><p>Tempo: {song.tempo}</p></SongInfo>
                                    <SongInfo><p>Duration: {(song.duration_ms / 1000)} Sec</p></SongInfo>
                                </SongInfoContainer>
                            </ContentWrapper>
                        </CardWrapper>
                        
                    </li>
                })}
                </Carousel> 

                
                </>
    );
}

export default CarouselComponent;