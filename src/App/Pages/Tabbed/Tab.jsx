import React from 'react';
import styled from 'styled-components';

const Tab = ({tabItem, chosenTabSet, chosenTab}) => {

    const handleClick = () => {
        chosenTabSet(tabItem);
    }

    const theClassName = (tabItem.title === chosenTab.title) ? 'Tab active':'Tab';

    return (
        <TabStyled 
            className={ theClassName }
            onClick={ handleClick }
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
    border-radius: 7px 7px 0px 0px;
    text-align: center;
    margin-right: 0px;

    background-color: #9e806b;
    &.active {
        background-color: #C9B5A5;
    }
`;