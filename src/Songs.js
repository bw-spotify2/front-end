import React from 'react';
import Search from './song-components/Search';
import styled from 'styled-components';
import Album from './song-components/Album';
import Song from './song-components/Song';

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
    margin-top: 2%;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

const SearchContainer = styled.div`
    width: 20%;
    border: 1px solid white;

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

const SongContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;


function Songs() {
    return (
        <>
         <H2>Artist - Song Title</H2>
        <PageContainer>
               

            <SearchContainer>
                <Search />  
            </SearchContainer>
        
            <SongContainer>
                <div>
                    <Album />
                </div>
                <div>
                    <Song />
                </div>

            </SongContainer>

        </PageContainer>
        </>
    );
}

export default Songs;