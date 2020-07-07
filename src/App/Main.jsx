import React from 'react';
import styled from 'styled-components';

const Main = () => {
    return (
        <MainStyled>
            <h1>Page Title</h1>
            <h2>Subtitle</h2>
            <h3>Sub Sub Title</h3>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`
    h1 {
        background-color: #C9B5A5;
        font-size: 20px;
    }
    h2 {
        background-color: white;
        padding: 20px;
    }
    h3 {
        background-color: white;
        padding: 20px;
    }

`;