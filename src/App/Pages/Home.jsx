import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import image from '../iced-coffee-hero-1.jpg';
import backgroundLayer from '../background-layer-1.jpg';

import { ReactComponent as Logo } from '../../common/LOGO2.svg';
import { NavLink } from 'react-router-dom';

import Tabbed from './Tabbed/Tabbed.jsx';
import Staff from './Staff/Staff.jsx';

import OurStory from './Home/OurStory.jsx';

const Home = () => {

    return (
        <HomeStyled className='Home'>
            <div className='nested-wrapper'>
                <div className='img-box' style={ { backgroundImage: `url(${image})` } }>
                    <h2 style={{letterSpacing: 5}}>relax. there's coffee</h2>
                    <div className='logo'>
                        <Logo />
                    </div>
                </div>
                <OurStory imgSrc={ backgroundLayer } title='OUR  STORY'>
                    <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</div>
                    <div className="links">
                        <NavLink to="/ourstory"><div className='text' style={{letterSpacing: 3.5}}>LEARN MORE</div></NavLink>
                    </div>
                </OurStory>
            </div>
            <Helmet>
                <title> Welcome </title> 
            </Helmet>
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`

    .img-box {
        position: relative;
        text-align: center;

        /* background-image: url('/assets/img/file.jpg'); */
        background-size: auto 100%;
        background-position: center center;
        background-repeat: no-repeat;
    }

    .img-box img {
        width: 100%;
        height: auto;
        text-align: center;
    }
    .img-box h2 {
        position: absolute;
        top: 27%;
        left: 26%;
        font-size: 33pt;
        color: black;
        font-family: itc-american-typewriter, serif;
        font-weight: 700;
        font-style: normal;
    }

    .logo {
            svg {
                height: 150px;
                position: absolute;
                top: 5%;
                left: 50%;
            }
    }

    

    .links {
        position: absolute;
        top: 65%;
        left: 50%;
        background-color: black;
        width: 150px;
        height: 50px;
        color: white;
        text-decoration: none;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
    }

`;