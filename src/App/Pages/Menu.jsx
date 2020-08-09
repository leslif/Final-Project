import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import CoffeesContainer from './Coffees/CoffeesContainer.jsx';

const Menu = () => {

    return (
        <MenuStyled className='Menu'>
            <Helmet>
                <title> Menu </title>
            </Helmet>
            <div className="nested-wrapper">
                <CoffeesContainer />
            </div>
        </MenuStyled>
    );
}

export default Menu;

const MenuStyled = styled.div`
    
`;