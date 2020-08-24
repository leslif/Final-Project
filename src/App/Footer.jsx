import React from 'react';
import styled from 'styled-components';

import EmailForm from './Pages/Email Sign Up/EmailForm.jsx';

const Footer = () => {
    return (
        <FooterStyled>
            {/* <div className='nested-wrapper'> */}
            <div className='Login Field'>
                    <EmailForm />
                </div>
            {/* </div> */}
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.footer`
    background-color: #C9B5A5;
    font-size: 50 px;
    padding: 10px;
    `;