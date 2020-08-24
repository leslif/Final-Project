import React from 'react';
import styled from 'styled-components';
import { mq } from '../../../common/mediaQueries.js';


const Tab = ({tabItem, chosenTabSet, chosenTab}) => {

    const handleClick = () => {
        chosenTabSet(tabItem);
    }

    const theClassName = (tabItem.title === chosenTab.title) ? 'Tab active':'Tab';

    return (
        <TabStyled 
            className={ theClassName }
            onClick={ handleClick }
            style={{letterSpacing: 3}}
        >
            { tabItem.title }
        </TabStyled>
    );
}

export default Tab;

const TabStyled = styled.div`



    display: inline-block;
    width: 300px;
    line-height: 25px;
    /* border-radius: 7px 7px 0px 0px; */
    text-align: center;
    margin-right: 0px;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    cursor: pointer;

    width: 33%;

    background-color: #6D5341;

    &.active {
        background-color: #C9B5A5;
    }

    @media ${mq.tablet} {
            width: 100%;
            font-size: 12px;
        }
`;