import styled from 'styled-components';
import pinIcon from '../../assets/pin.png';

export const Map = styled.section`

    width: 100%;
    height: 50rem;

`


export const Wrapper = styled.section`

    .mapboxgl-popup {
        max-width: 200px;
    }
    
    .mapboxgl-popup-content {
        text-align: center;
        font-family: 'Open Sans', sans-serif;
    }
    

    .marker {
        background-image: url(${pinIcon});
        background-size: contain;
        background-repeat: no-repeat;
        width: 30px;
        height: 35px;
        cursor: pointer;
    }

`
