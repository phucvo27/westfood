import styled from 'styled-components';

const yellow = '#D8C149';

export const Wrapper = styled.div`

    width: 100%;
`
export const CardImage = styled.div`
    width: 100%;
    padding: 1rem;
    position: relative;
    cursor: pointer;
    img {
        width: 100%;
    }

    &::after{
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
    
        width: 100%;
        height: 100%;
        background-color: #333;
        opacity: 0;
        visibility: hidden;
        transition: opacity .4s, visibility .4s;
    }
    &:hover::after {
        opacity: .3;
        visibility: visible;
    }

`

export const CardBody = styled.div`


`
export const CardBodyTitle = styled.div`
    font-size: 1.67rem;
    color: #7e7b73;
    text-align: center;
    padding: 1rem 0;
    font-weight: normal;
`

export const CardBodyDescription = styled.div`
    font-size: 1.3rem;
    margin-bottom: 1rem;
    text-align: center;
    font-weight: normal;

`
export const CardBodyButton = styled.div`
    text-align: center;

    button {
        border: .1rem solid $color-yellow;
        padding: 1rem 5rem;
        font-size: 1.2rem;
        background-color: ${yellow};
        color: #fff;
        border: none;
        cursor: pointer;
        border-radius: .5rem;
        transition: background-color .4s, color .4s;
        
    }
    button:hover {
        background-color: transparent;
        color: ${yellow};
        border: .1rem solid ${yellow};
    }
`