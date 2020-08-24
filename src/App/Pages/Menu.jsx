import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { mq } from '../../common/mediaQueries.js';

import Tabbed from './MenuTabs/Tabbed.jsx';
import BackgroundImage from '../background.jpg';

const Menu = () => {

    return (
        <MenuStyled className='Menu' style={ { backgroundImage: `url(${BackgroundImage})` } }>
            <div className="nested-wrapper">
                    <Tabbed />
                </div>
            <Helmet>
                <title> Menu </title>
            </Helmet>
            
        </MenuStyled>
    );
}

export default Menu;

const MenuStyled = styled.div`
    .Menu {
        height: auto;
        width: 700px;
        }

@media ${mq.tablet} {
    .Menu {
        background-size: cover;
        background-position: center center;
        background-repeat: repeat;
        height: auto;
        width: 700px;
    }
}
`;