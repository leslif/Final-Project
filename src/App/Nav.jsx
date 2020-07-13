import React from 'react';
import styled from 'styled-components';

const Navigation = () => {
    return (
        <NavStyled>
            <div className='nested-wrapper'>
                <a href="/">Welcome</a>
                <a href="/menu">Menu</a>
                <a href="/contact">Contact</a>
                <a href="/login">Login</a>
            </div>
        </NavStyled>
    );
}

export default Navigation;

const NavStyled = styled.nav`
    background-color: #C9B5A5;
    text-align: center;

    a{
        display: inline-block;
        text-align: center;
        line-height: 50px;
        font-size: 20px;
        background-color: #6D5341;
        color: white;

        text-decoration: none;

        width: 150px;
        margin-right: 10px;
        margin-left: 10px;
        border-radius: 5px;

        &:hover {
            background-color: #a7968a;
        }
    }
    
    `;