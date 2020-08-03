import React from 'react';
import styled from 'styled-components';

import { mq } from '../../../common/mediaQueries.js';

const StaffMember = ({product}) => {

    return (
        <StaffMemberStyled className='StaffMember'>
            <img src={ product.image } alt={ product.name }/>
            <div className="title">{ product.name }</div>
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