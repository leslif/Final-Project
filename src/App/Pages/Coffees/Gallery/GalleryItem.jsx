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
            <div className="category">{ item.category }</div>
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

    img { display: block; max-width: 100%; }

    .category {
        position: absolute;
        top: 0; right: 0; left: 0;
        background-color: rgba(202, 181, 165, .47);
        padding: 10px;
        font-size: 12px;
        text-align: right;
    }
    .title {
        position: absolute;
        bottom: 0; right: 0; left: 0;
        padding: 10px;
        font-size: 20px;
        text-align: center;
    }
`;