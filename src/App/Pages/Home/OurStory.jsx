import React from 'react';
import styled from 'styled-components';

const OurStory = ({children, imgSrc, title}) => {

    return (
        <OurStoryStyled className='OurStory'>
            <img src={ imgSrc } alt='concrete wall background' />
            <h3 style={{letterSpacing: 3}}>{ title }</h3>
            { children }
        </OurStoryStyled>
    );
}

export default OurStory;

const OurStoryStyled = styled.div`
    position: relative;

    img {
        width: 100%;
        height: auto;
    }

    h3 {
        position: absolute;
        top: 24%;
        left: 47%;
        font-size: 16pt;
        color: black;
        font-family: itc-american-typewriter, serif;
        font-weight: 700;
        font-style: normal;
        justify-content: center;
    }
    .text {
        font-family: 'Martel', serif;
        font-size: 14px;
        text-align: center;
        position: absolute;
        top: 40%;
        left: 33%;
        justify-content: center;
    }
`;