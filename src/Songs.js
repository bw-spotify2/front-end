import React from 'react';
<<<<<<< HEAD
import Search from './song-components/Search';
import styled from 'styled-components';
import Album from './song-components/Album';
import Song from './song-components/Song';
// import Song from '../public/spotify_listen_logo.png'

const Title = styled.div`
`;

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
    

    @media screen and (max-width: 800px) {
        flex-direction: column;
        justify-content:  center;
    }
`;

const SearchContainer = styled.div`
    width: 375px;
    border: 1px solid white;

    @media screen and (max-width: 800px) {
        width: 100%;
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

=======
import SongSearch from './SongSearch'
>>>>>>> 3fc0c8de47b7660e04fbc9019a27d309c4dd4de1

function Songs() {
    return (
        <>
<<<<<<< HEAD
        <Title>
            <div>
                <H2>Artist | Song Title</H2>
            </div>
            <div>
            
            </div>

        </Title> 
         
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

=======
        <SongSearch/>
        <div>Songs will be here</div>
>>>>>>> 3fc0c8de47b7660e04fbc9019a27d309c4dd4de1
        </>
    );
}

export default Songs;