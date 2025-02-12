import styled from 'styled-components';
import marker from '../../assets/marker.png';

const Img = styled.img`
    width: 10px;
    height: 10px; 
`;

const LocationContainer = styled.p`
    display: flex;
    width: fit-content;
    justify-content: flex-start;
    align-items: center;
    font-size: .9em;
    margin-bottom: .5em;
    margin-top: .25em;

    & > * {
        margin-right: 5px;
    }

    & a {
        margin-left: 5px;
        font-size: .9em;
        color: gray;
    }
`;

function LocationHeader({ country, googleMapsLink }) {
    return (
        <LocationContainer>
            <Img src={marker} alt="Marker icon" />
            {country.toUpperCase()}
            <a href={googleMapsLink} target='_blank'>View on Google Maps</a>
        </LocationContainer>
    );
}

export default LocationHeader;