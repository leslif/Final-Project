import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { mq } from '../common/mediaQueries.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars,
} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    const [showMenu, showMenuSet] = useState (false);

    const toggleMenu = () => {
        //console.log('You clicked the hamburger', showMenu);
        showMenuSet (!showMenu);
    }

    useEffect (()=>{
        //console.log('I have mounted');

        const handleWindowSizeChange = () => {
            const isItMobile = window.matchMedia(`(max-width:499px)`);
            console.log(isItMobile.matches);

            showMenuSet(!isItMobile.matches);
        }

        handleWindowSizeChange();

        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }

    }, []);

    return (
        <NavStyled>
                <div 
                    className="hamburger"
                    onClick={ toggleMenu }
                >
                    <FontAwesomeIcon icon={ faBars } />
                </div>
                {
                    showMenu &&
                    <div className="links">
                        <NavLink to="/" exact><text style={{letterSpacing: 3.5}}>HOME</text></NavLink>
                        <NavLink to="/locations"><text style={{letterSpacing: 3.5}}>LOCATIONS</text></NavLink>
                        <NavLink to="/menu"><text style={{letterSpacing: 3.5}}>MENU</text></NavLink>
                        <NavLink to="/ourstory"><text style={{letterSpacing: 3.5}}>ABOUT</text></NavLink>
                    </div>
                }
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
    background-color: #C9B5A5;
    text-align: center;
    font-family: 'Montserrat', sans-serif;

    .hamburger {
        position: absolute;
        right: 20px;
        top: 40px;
        z-index: 1001;

        cursor: pointer;

        svg {
            color: black;
            width: 22px;
            height: auto;
        }

        display: block;

        @media ${mq.tablet} {
            display: none;
        }
    }

    a{
        display: inline-block;
        text-align: center;
        font-size: 14px;
        background-color: #c9b5a5;
        color: white;
        text-decoration: none;
        margin-bottom: 0px;
        margin-top: 0px;
        line-height: 50px;
        width: 100%;

        @media ${mq.tablet} {
            width: 160px;
            line-height: 50px;
            margin-right: 0px;
            margin-left: 0px;            
        }
        @media ${mq.desktop} {
            width: 210px;
        }

        &:hover {
            background-color: #6D5341;
        }

        &.active {
            background-color: #6D5341;
        }
    }
    `;