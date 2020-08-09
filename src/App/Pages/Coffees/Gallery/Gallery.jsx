import React from 'react';
import styled from 'styled-components';
import GalleryItem from './GalleryItem.jsx';

const Gallery = ({ coffees, currCategory }) => {

    const renderGallery = () => {
        return coffees.packages
        .filter ((item, idx) => {
            return (currCategory === 'All' || item.category === currCategory);
        })
        .map((item, idx) => {
            return <GalleryItem key={idx} item={ item } />
        });
    }

    return (
        <GalleryStyled className='Gallery'>
            { renderGallery () }
        </GalleryStyled>
    );
}

export default Gallery;

const GalleryStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`;