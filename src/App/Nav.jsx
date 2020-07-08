import React from 'react';
import styled from 'styled-components';

const Navigation = () => {
    return (
        <NavStyled>
            <div className='nested-wrapper'>
            Navigation
            </div>
        </NavStyled>
    );
}

export default Navigation;

const NavStyled = styled.nav`
    background-color: #C9B5A5;
    font-size: 20px;
    `;