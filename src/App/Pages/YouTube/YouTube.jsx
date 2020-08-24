import React from 'react';
import styled from 'styled-components';

import YouTube from 'react-youtube';

const opts = {
    height: '390',
    width: '640',
    playerVars: {
        autoplay: 0,
    },
};

const YouTube1 = () => {


    return (
        <YouTubeStyled 
            className='YouTube'
            videoID="M7lc1UVf-VE"
            opts={opts}
            onReady={this._onReady}
            >
        </YouTubeStyled>
        );
    }

export default YouTube;

const YouTubeStyled = styled.div`
    
`;