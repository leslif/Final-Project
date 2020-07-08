import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderStyled>
            <div className='nested-wrapper'>
            Latterian
            </div>
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    background-color: #C9B5A5;
    font-size: 30 px;
    `;