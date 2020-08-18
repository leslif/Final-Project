import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderStyled>
                <div className="row-container">
                    <text style={{letterSpacing: 3}}>HOLIDAY SALE: 25% OFF ALL GROUND COFFEES</text>
                </div>
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    background-color: black;
    font-size: 10px;
    color: white;
    padding: 8px;
    justify-content: center;
    text-align: center;
    font-family: 'Montserrat', sans-serif;

    .row-container {
        background-color: black;
    }

`;