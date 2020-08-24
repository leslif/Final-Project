import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import ImageBlock from '../about-us-background.png';
import BackgroundImage from '../background.jpg';
import { NavLink } from 'react-router-dom';


const OurStory = () => {

    return (
        <OurStoryStyled className='OurStory'>
            <Helmet>
                <title> Our Story </title>
            </Helmet>

            <div className='img-box' style={ { backgroundImage: `url(${ImageBlock})` } }>
                <div className='text'>
                    <h1 style={{letterSpacing: 4}}>ABOUT US</h1>
                </div>
            </div>

            <div className='img-box-2' style={ { backgroundImage: `url(${BackgroundImage})` } }>
                <div className='nested-wrapper'>
                    <div className='text2'>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
                        <div className="links">
                            <NavLink className='LocationsLink' to="/Locations">OUR LOCATIONS</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <iframe 
                title="title"
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/y2G6UUJjlro" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>

            <div className='img-box-3' style={ { backgroundImage: `url(${BackgroundImage})` } }>
                <div className='nested-wrapper'>
                    <div className='image-block'>
                        <img src url='../coffee-sapling.png' alt='coffee sapling'/>
                    </div>
                    <div className='quote-block'>
                        <h2>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</h2>
                    </div>
                </div>
            </div>

        </OurStoryStyled>
    );
}

export default OurStory;

const OurStoryStyled = styled.div`

    background-color: #C9B5A5;

    iframe {
        width: 100%;
        height: 400px;
    }

    .img-box {
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        text-align: center;
        position: relative;
        width: 100%;
        height: 500px;
    }
    h1 {
        font-size: 18pt;
        font-weight: 400;
        color: black;
        font-family: itc-american-typewriter, serif;
        padding: 20px;
        text-align: center;
        position: relative;
        color: white;
        background-color: #C9B5A5;
        width: 250px;
        /* margin-left: auto;
        margin-right: auto; */
        display: inline-block;
        margin-left: 50%;
        margin-top: 150px;
    }

    .img-box-2 {
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        position: relative;
        width: 100%;
        height: 700px;
    }

    h2 {
        font-size: 12pt;
        font-weight: 200;
        font-family: 'Martel', serif;
        text-align: center;
        position: relative;
        color: black;
        background-color: #ffffff59;
        width: 550px;
        height: 420px;
        display: inline-block;
        padding: 10%;
        margin-left: 30%;
        margin-top: 0px;
        position: relative;
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
        letter-spacing: 3.5;
        margin-bottom: 20px;
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

    .img-box-3 {
        display: flex;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        position: relative;
        width: 100%;
        height: 700px;
    }

    .image-block img {
        width: 400px;
        height: auto;
    }
`;