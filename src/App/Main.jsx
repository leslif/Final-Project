import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom'

import Home from './Pages/Home.jsx';
import Locations from './Pages/LocationsPage.jsx';
import OurStory from './Pages/OurStory.jsx';
import Menu from './Pages/Menu.jsx';

const Main = () => {
    return (
        <MainStyled>
            <Switch>
                <Route path='/ourstory' component={ OurStory } />
                <Route path='/locations' component={ Locations } />
                <Route path='/menu' component={ Menu } />
                <Route path='/' component={ Home } />
            </Switch>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`

`;