import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderStyled>
            <div className='nested-wrapper'>
                <div className="row-container">
                    <div className="logo">
                        <img src="/assets/img/logo.png" alt="logo"/>
                    </div>
                    <div className="text">
                        <h2> Latterian </h2>
                        <h3> smile, there's coffee </h3>
                    </div>
                </div>
            </div>
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    background-color: #C9B5A5;
    font-size: 30px;

    .row-container {
        display: flex;
        justify-content: center;
    }

    .logo {
        color: white;
        margin-right: 10px;

        img {
            width: 80px;
            height: auto;
        }
    }

    .text {
        h2{
            font-size: 30px;
            margin: 0px;
            color: white;
        }
        h3 {
            font-size: 18px;
            margin: 0px;
            color: white;
        }
    }

`;