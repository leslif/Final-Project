import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import OurStory from './Home/OurStory1.jsx';

import image from '../iced-coffee-hero-1.jpg';


import { ReactComponent as Logo } from '../../common/LOGO2.svg';


const Home = () => {

    return (
        <HomeStyled className='Home'>
            <div className='nested-wrapper'>
                <div className='img-box' style={ { backgroundImage: `url(${image})` } }>
                    <div className='logo'>
                        <Logo />
                    </div>
                    <h2 style={{letterSpacing: 5}}>relax. there's coffee</h2>
                </div>
            </div>
            <OurStory1 />
            <Helmet>
                <title> Welcome </title> 
            </Helmet>
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

    .img-box {
        height: 890px;
        position: relative;
        text-align: center;

        background-image: url('../../../public/assets/img/HomePageImages/iced-coffee-hero-1.jpg');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }

    /* .img-box img { */
        /* width: 100%; */
        /* height: auto; */
        /* text-align: center; */
    }
    .img-box h2 {
        /* top: 27%; */
        /* left: 26%; */
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

    

    .links {
        /* top: 65%; */
        /* left: 50%; */
        background-color: black;
        width: 150px;
        height: 50px;
        color: white;
        text-decoration: none;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
    }

    .OurStoryBox {
        height: 400px;
        position: relative;
        text-align: center;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }
    .OurStoryBox h2 {
        margin: 50px;
    }

    .OurStoryBox h1 {
        padding: 50px;
    }

`;