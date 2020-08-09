import React, { useState } from 'react';
import styled from 'styled-components';

import { mq } from '../../../common/mediaQueries.js';

import Lightbox from '../Coffees/Gallery/Lightbox.jsx';

const StaffMember = ({product}) => {

const [ showLBox, showLboxUpdate ] = useState(false);

const turnOn = () => {
    showLboxUpdate(true);
}

const turnOff = () => {
    showLboxUpdate(false);
}

    return (
        <StaffMemberStyled className='StaffMember'>
            <img src={ product.image } alt={ product.name }
            onClick={ turnOn }
            />
            <div className="title">{ product.name }</div>
            
            <Lightbox show={ showLBox } hideAction={ turnOff }>
                <img src={ product.image } alt={ product.name }/>
                <h3>{ product.name }</h3>
                <div className='description'>{ product.description }</div>
            </Lightbox>

        </StaffMemberStyled>
    );
}

export default StaffMember;

const StaffMemberStyled = styled.div`
    margin: 20px; 
    width: 140px;

    @media ${mq.tablet} {
        width: 240px;
    }

    @media ${mq.desktop} {
        width: 300px;
    }

    img {
        max-width: 100%;
        display: block;
    }

    .title {
        background-color: #9e806b;
        color: white;
        padding: 5px;
    }
`;