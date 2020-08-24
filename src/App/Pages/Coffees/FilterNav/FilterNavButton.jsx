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
                style={{letterSpacing: 3}}
            >
            { name }
        </FilterNavButtonStyled>
    );
}

export default FilterNavButton;

const FilterNavButtonStyled = styled.div`
    display: inline-block;
    padding: 10px 20px;
    background-color: rgba(202, 181, 165, .87);
    margin: 10px;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: white;
    cursor: pointer;
    filter: drop-shadow(0px 2px 1px #00000057);

    &:hover {
        background-color: #6d5341;
        color:white;
    }

    &.active {
        background-color: #6d5341;
        color: white;
    }

`;