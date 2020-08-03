import React from 'react';
import styled from 'styled-components';
import StaffMember from './StaffMember.jsx';
import { productData } from './productData.js';

const Staff = () => {

    const renderMembers = () => {
        return productData.map((product, idx) => {
            return <StaffMember
                key={ idx }
                product={ product }
            />
        });
    }

    return (
        <StaffStyled className='Staff'>
            Our Coffee
            <div className='members'>
                { renderMembers () }
            </div>
        </StaffStyled>
    );
}

export default Staff;

const StaffStyled = styled.div`

    background-color: #C9B5A5;
    
    .members {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    
`;

