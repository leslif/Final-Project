import React, { useState } from 'react';
import styled from 'styled-components';

import { coffees } from './coffeesData.js';

import FilterNav from './FilterNav/FilterNav.jsx';
import Gallery from './Gallery/Gallery.jsx'; 

const Coffees = () => {

    const [currCategory, currCategorySet ] = useState(coffees.categories[0]);
    // default category (currCategory) is 0 = the first category "All" in data
    //coffees.categories = const "coffees" (in data set)."categories" name of first data set in data file

    return (
        <CoffeesStyled className='Coffees'>
            <FilterNav coffees={ coffees } currCategory={ currCategory } />
            <Gallery coffees={ coffees } currCategory={ currCategory } />
        </CoffeesStyled>
    );
}

export default Coffees;

const CoffeesStyled = styled.div`
    
`;