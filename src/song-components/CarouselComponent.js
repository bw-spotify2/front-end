import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SongOne from './SongOne';
import SongTwo from './SongTwo';
import SongThree from './SongThree';
import SongFour from './SongFour';
import SongFive from './SongFive'

const CarouselContainer = styled.div`
`;




function Carousel() {

    var [suggestedSongs, setSongs] = useState([{}])

    useEffect(() => {
        axios
            .get('https://spotify-api-project.herokuapp.com/api/frontend/savedsongs')
            .then((res) => {
                // console.log('response from saved songs', res.data);
                setSongs(res.data)
            })
            .catch((err) => console.log('error connecting to saved songs'))
    }, [Carousel]);

    return(
    
        <CarouselContainer>
            <SongOne songs={suggestedSongs} />       
            <SongTwo songs={suggestedSongs} />
            <SongThree songs={suggestedSongs} />       
            <SongFour songs={suggestedSongs} />
            <SongFive songs={suggestedSongs} />       
        </CarouselContainer>
        
    );
}

export default Carousel;