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
        console.log('You clicked the hamburger', showMenu);
        showMenuSet (!showMenu);
    }

    useEffect (()=>{
        console.log('I have mounted');

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
            <div className='nested-wrapper'>
                <div 
                    className="hamburger"
                    onClick={ toggleMenu }
                >
                    <FontAwesomeIcon icon={ faBars } />
                </div>
                {
                    showMenu &&
                    <div className="links">
                        <NavLink to="/" exact>Welcome</NavLink>
                        <NavLink to="/menu">Menu</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/login">Login</NavLink>
                    </div>
                }
            </div>
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
    background-color: #C9B5A5;
    text-align: center;

    .hamburger {
        position: absolute;
        right: 20px;
        top: 20px;

        cursor: pointer;

        svg {
            color: #6D5341;
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
        font-size: 20px;
        background-color: #6D5341;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        margin-bottom: 2px;
        margin-top: 5px;
        line-height: 50px;
        width: 100%;

        @media ${mq.tablet} {
            width: 100px;
            line-height: 50px;
            margin-right: 10px;
            margin-left: 10px;            
        }
        @media ${mq.desktop} {
            width: 150px;
        }

        &:hover {
            background-color: #a7968a;
        }

        &.active {
            background-color: #ff7b2e;
        }
    }
    `;