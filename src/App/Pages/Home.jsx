import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import image from '../iced-coffee-hero-1.jpg';
import backgroundLayer from '../background-layer-1_1.jpg';

import { ReactComponent as Logo } from '../../common/LOGO2.svg';
import { NavLink } from 'react-router-dom';
import Slideshow from './Slideshow/Slideshow.jsx';

const Home = () => {

    return (
        <HomeStyled className='Home'>
            {/* <div className='nested-wrapper'> */}
                <div className='img-box' style={ { backgroundImage: `url(${image})` } }>
                    {/* <div className='img-box'> */}
                        <div className='logo'>
                            <Logo />
                        </div>
                        <h2 style={{letterSpacing: 5}}>relax. there's coffee</h2>
                    </div>
                {/* </div> */}

                <div className='img-box-2' style={ { backgroundImage: `url(${backgroundLayer})` } }>
                    <div className='text'>
                        <h1>OUR STORY</h1>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</h2>
                    </div>
                    <div className="links">
                        <NavLink className='ourStoryLink' to="/ourstory">LEARN MORE</NavLink>
                    </div>
                </div>

            <Helmet>
                <title> Welcome </title> 
            </Helmet>
            {/* </div> */}

            <Slideshow />
            <NavLink className='LocationsLink' to="/locations">OUR LOCATIONS</NavLink>

            <div className='img-box-3' style={ { backgroundImage: `url(${backgroundLayer})` } }>
                    <div className='text'>
                        <h1>OUR MENU</h1>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</h2>
                    </div>
                    <div className="menulink">
                        <NavLink className='MenuLink' to="/menu">MENU</NavLink>
                    </div>
                </div>

        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`

    a.ourStoryLink {
        display: inline-block;
        background-color: black;
        line-height: 50px;
        color: white;
        -webkit-text-decoration: none;
        text-decoration: none;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        letter-spacing: 3.5;
    }

    a.MenuLink {
        display: inline-block;
        background-color: black;
        line-height: 50px;
        color: white;
        -webkit-text-decoration: none;
        text-decoration: none;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        letter-spacing: 3.5;
    }

    a.LocationsLink {
        display: inline-block;
        background-color: black;
        line-height: 50px;
        color: white;
        -webkit-text-decoration: none;
        text-decoration: none;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-size: 10pt;
        letter-spacing: 3.5;
        width: 175px;
    }

    .img-box {
        height: 760px;
        position: relative;
        text-align: center;

        background-image: url('../../../public/assets/img/HomePageImages/iced-coffee-hero-1.jpg');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }

        
    .img-box h2 {
        font-size: 33pt;
        color: black;
        font-family: itc-american-typewriter, serif;
        font-weight: 550;
        font-style: normal;
        margin: 64px;
    }

    .logo {
            svg {
                height: 100px;
                margin: 20px;
                /* top: 5%; */
                /* left: 50%; */
            }
    }

    .img-box-2 {
        height: 360px;
        position: relative;
        text-align: center;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }

    .img-box-3 {
        height: 360px;
        position: relative;
        text-align: center;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }

    .header {
        font-size: 20pt;
        color: black;
        font-family: itc-american-typewriter, serif;
        padding: 75px;
        text-align: center;
        position: relative;
    }

    .text {
        margin: 0, 0, 0, 20;
    }

    .text h1 {
        font-size: 12pt;
        color: black;
        font-family: itc-american-typewriter, serif;
        font-weight: 600;
        padding: 20px;
        text-align: center;
        position: relative;
        margin: 0, 10, 10, 0;
    }
    .text h2 {
        font-size: 12pt;
        color: black;
        font-family: itc-american-typewriter, serif;
        font-weight: 400;
        padding: 0;
        text-align: center;
        position: relative;
    }

    .links {
        display: block;
        background-color: black;
        width: 150px;
        height: 50px;
        color: white;
        text-decoration: none;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-size: 10pt;
        margin-left: auto;
        margin-right: auto;
    }

    .menulink {
        background-color: black;
        width: 150px;
        height: 50px;
        color: white;
        text-decoration: none;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-size: 10pt;
        margin-left: auto;
        margin-right: auto;
    }

`;