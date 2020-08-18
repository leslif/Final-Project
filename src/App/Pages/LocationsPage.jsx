import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import Locations from './Coffees/Locations.jsx';

const LocationsPage = () => {

    return (
        <LocationsPageStyled className='Locations'>
            <Helmet>
                <title> Locations </title>
            </Helmet>
            <div className="nested-wrapper">
                <Locations />
            </div>
        </LocationsPageStyled>
    );
}

export default LocationsPage;

const LocationsPageStyled = styled.div`
    
`;