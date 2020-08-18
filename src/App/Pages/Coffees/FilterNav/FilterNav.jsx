import React from 'react';
import styled from 'styled-components';

import FilterNavButton from './FilterNavButton.jsx';
const FilterNav = ({ locations, currCategory, currCategorySet }) => {

    const renderButtons = () => {
        return locations.categories.map((name, idx) => {
            return <FilterNavButton 
                key={idx} 
                name={ name } 
                currCategory={ currCategory }
                currCategorySet={ currCategorySet }
                />
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
    text-align: center;
    padding: 10px;
`;