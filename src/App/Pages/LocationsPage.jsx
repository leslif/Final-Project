import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import BackgroundImage from '../background.jpg';

import Locations from './Coffees/Locations.jsx';

const LocationsPage = () => {

    return (
        <LocationsPageStyled className='Locations' style={ { backgroundImage: `url(${BackgroundImage})` } }>
            <Helmet>
                <title> Locations </title>
            </Helmet>
            {/* <div className="nested-wrapper"> */}
                <Locations />
            {/* </div> */}
        </LocationsPageStyled>
    );
}

export default LocationsPage;

const LocationsPageStyled = styled.div`
    
`;