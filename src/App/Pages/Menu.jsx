import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import Coffees from './Coffees/Coffees.jsx';

const Menu = () => {

    return (
        <MenuStyled className='Menu'>
            <Helmet>
                <title> Menu </title>
            </Helmet>
            <div className="nested-wrapper">
                <Coffees />
            </div>
        </MenuStyled>
    );
}

export default Menu;

const MenuStyled = styled.div`
    
`;