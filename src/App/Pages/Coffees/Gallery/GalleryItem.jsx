import React, { useState } from 'react';
import styled from 'styled-components';

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
            <div className="title">{ item.title }</div>
            <Lightbox show={ showLBox } hideAction={ turnOff }>
                <img src={ item.image } alt={ item.title }/>
                <h3>{ item.title }</h3>
                <div className='description'>
                    { item.description }
                </div>
                <div className='cost'>${ item.cost }</div>
            </Lightbox>
        </GalleryItemStyled>
    );
}

export default GalleryItem;

const GalleryItemStyled = styled.div`
    position: relative;
    margin: 20px;
    width: 25%;
    padding: 5px;
    margin: 21px;
    cursor: pointer;

    img { display: block; max-width: 100%; }

    .title {
        position: absolute;
        bottom: -20; right: 0; left: 0;
        padding: 10px;
        font-size: 20px;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
    }
`;