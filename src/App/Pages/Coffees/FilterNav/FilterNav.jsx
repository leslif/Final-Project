import React from 'react';
import styled from 'styled-components';

import FilterNavButton from './FilterNavButton.jsx';
const FilterNav = ({ coffees, currCategory }) => {

    const renderButtons = () => {
        return coffees.categories.map((name, idx) => {
            return <FilterNavButton key={idx} name={ name } />
        });
    }

    return (
        <FilterNavStyled className='FilterNav'>
            { renderButtons () }
        </FilterNavStyled>
    );
}

export default FilterNav;

const FilterNavStyled = styled.div`
    
`;