import React from 'react';
import styled from 'styled-components';

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
    
`;