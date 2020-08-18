import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

const OurStory = () => {

    return (
        <OurStoryStyled className='OurStory'>
            <Helmet>
                <title> Our Story </title>
            </Helmet>
            Our Story 
        </OurStoryStyled>
    );
}

export default OurStory;

const OurStoryStyled = styled.div`
    
`;