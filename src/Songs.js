import React from 'react';
import SongSearch from './song-components/SongSearch';
import styled from 'styled-components';
import CarouselComponent from './song-components/CarouselComponent';

const H2 = styled.h2`
    text-align: center;
    font-size: 2rem;
    padding: 5px 0px;
    color: black;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #a1a0a0;
`;

const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    

    @media screen and (max-width: 800px) {
        flex-direction: column;
        justify-content:  center;
        
    }
`;

const SearchContainer = styled.div`
    background-color: #404946;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;
    height: auto;
    width: 450px;
    justify-content: center;

    @media screen and (max-width: 800px) {
        margin: 0 auto;
    }

    @media screen and (max-width: 460px) {
        max-width: 350px;
    }
`;

const SongContainer = styled.div`
    // width: 80%;
    display: flex;

    @media screen and (max-width: 1250px) {
        flex-direction: column;
        align-items: center;
        // width: 70%;
    }

    @media screen and (max-width: 800px) {
        // width: 100%;
    }
`;




function Songs() {
    return (
        <> 
        <PageContainer>

               <SearchContainer>
                   <SongSearch />
               </SearchContainer>
           
               <CarouselComponent />
   
           </PageContainer>

        </>
    );
}

export default Songs;