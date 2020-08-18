import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';



const Menu = () => {

    return (
        <MenuStyled className='Menu'>
            <Helmet>
                <title> Menu </title>
            </Helmet>
        </MenuStyled>
    );
}

export default Menu;

const MenuStyled = styled.div`
    
`;