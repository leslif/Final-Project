import React from 'react';
import styled from 'styled-components';

const FilterNavButton = ({name, currCategory, currCategorySet}) => {

    const changeCategory = () => {
        currCategorySet(name);
    }

    const theClassName = (name === currCategory) ? 'FilterNavButton active': 'FilterNavButton';

    return (
        <FilterNavButtonStyled 
                className={ theClassName }
                onClick={ changeCategory }
            >
            { name }
        </FilterNavButtonStyled>
    );
}

export default FilterNavButton;

const FilterNavButtonStyled = styled.div`
    display: inline-block;
    padding: 10px 20px;
    background-color: rgba(202, 181, 165, .47);
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #6d5341;
        color:white;
    }

    &.active {
        background-color: #6d5341;
        color: white;
    }

`;