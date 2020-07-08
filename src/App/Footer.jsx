import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterStyled>
            <div className='nested-wrapper'>
            Footer
            </div>
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.footer`
    background-color: #C9B5A5;
    font-size: 50 px;
    `;