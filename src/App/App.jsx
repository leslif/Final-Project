import React from 'react';
import styled from 'styled-components';

import Header from './Header.jsx';
import Navigation from './Nav.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

const App = () => {

    return (
        <AppStyled className='App'>
            Latterian App 
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </AppStyled>
    );
}

export default App;

const AppStyled = styled.div`
    width: 300px;
    margin: 50px auto;
    border: solid 1px #333;
    padding: 20px;
    text-align: center;
`;