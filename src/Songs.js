
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
    max-width: 1000px;
    padding-top: 10%;
    margin: 0 auto;
    

	@media screen and (max-width: 900px) {
		flex-direction: column;
        justify-content: center;
        padding-top: 2%;
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

    @media screen and (max-width: 900px) {
        margin: 0 auto;
    }

    @media screen and (max-width: 460px) {
        max-width: 350px;
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
