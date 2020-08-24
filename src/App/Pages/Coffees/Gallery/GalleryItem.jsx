import React, { useState } from 'react';
import styled from 'styled-components';
import { mq } from '../../../../common/mediaQueries.js';

import Lightbox from './Lightbox.jsx';

const GalleryItem = ({ item }) => {

    const [ showLBox, showLboxUpdate ] = useState(false);

    const turnOn = () => {
        showLboxUpdate(true);
    }

    const turnOff = () => {
        showLboxUpdate(false);
    }

    return (
        <GalleryItemStyled className='GalleryItem'>
            <img 
                src={ item.image } 
                alt={ item.title }
                onClick={ turnOn }
            />
            <div className="title" style={{letterSpacing: 2}}>{ item.title }</div>
            <Lightbox show={ showLBox } hideAction={ turnOff }>
                <img src={ item.addressimage } alt={ item.title }/>
                <h3>{ item.title }</h3>
                <div className='description'>
                    { item.description }
                </div>
                <div className='address'>{ item.address }</div>
            </Lightbox>
        </GalleryItemStyled>
    );
}

export default GalleryItem;

const GalleryItemStyled = styled.div`
    
    position: relative;
    width: 150px;
    padding: 5px;
    margin: 5px;
    margin-top: 30px;

    @media ${mq.tablet} {
    margin: 20px;
    width: 25%;
    padding: 20px;
    margin: 21px;
    cursor: pointer;
    }

    img { display: block; max-width: 100%; }

    .title {
        position: absolute;
        /* bottom: -20; right: 0; left: 0; */
        bottom: 60; right: 0; left: 0;
        padding: 10px;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        /* background-color: black; */
        /* color: white; */
    }

    h3 {
        font-family: itc-american-typewriter, serif;
        font-weight: 400;
    }

    .description {
        font-family: itc-american-typewriter, serif;
        font-weight: 400;
    }

    .address {
        font-family: itc-american-typewriter, serif;
        font-weight: 400;
    }
`;