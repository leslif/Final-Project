import React from 'react';
import styled from 'styled-components';

import Header from './Header.jsx';
import Navigation from './Nav.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

const App = () => {

    return (
        <AppStyled className='App'>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </AppStyled>
    );
}

export default App;

const AppStyled = styled.div`
    .nested-wrapper {
        max-width: 1200px;
        margin: auto;
        padding: 10px;
    }
`;