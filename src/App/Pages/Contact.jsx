import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import YouTube from './YouTube/YouTube.jsx';

const Contact = () => {

    return (
        <ContactStyled className='Contact'>
            <Helmet>
                <title> Contact </title>
            </Helmet>
            <YouTube />
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`
    
`;