import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SearchBar = styled.div`

`;

const SearchResults = styled.div`

`;
function Search() {


    return (
        <form>
            <SearchBar>
                <label htmlFor='search'>Search:</label>
                <input id='search' name='textfield' placeholder='Search' />

            </SearchBar>
            <SearchResults>
      
            </SearchResults>
        </form>
        
    );
}

export default Search;