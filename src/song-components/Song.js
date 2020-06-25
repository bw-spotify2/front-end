import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

    const [song, setSong] = useState([])

    useEffect(() => {
        axios
            .get('https://spotify-api-project.herokuapp.com/api/frontend/savedsongs')
            .then((res) => {
                // console.log('response from saved songs', res.data);
                setSong(res)
            })
            .catch((err) => console.log('error connecting to saved songs'))
    }, []);

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