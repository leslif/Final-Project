import React, { useState } from 'react';
import styled from 'styled-components';

import { locations } from './locationsData.js';

import FilterNav from './FilterNav/FilterNav.jsx';
import Gallery from './Gallery/Gallery.jsx'; 

const Locations = () => {

    const [currCategory, currCategorySet ] = useState(locations.categories[0]);
    // default category (currCategory) is 0 = the first category "All" in data
    //locations.categories = const "locations" (in data set)."categories" name of first data set in data file

    return (
        <LocationsStyled className='Locations'>
            <FilterNav 
                locations={ locations } 
                currCategory={ currCategory } 
                currCategorySet={ currCategorySet }
            />
            <Gallery locations={ locations } currCategory={ currCategory } />
        </LocationsStyled >
    );
}

export default Locations;

const LocationsStyled = styled.div`
    
`;