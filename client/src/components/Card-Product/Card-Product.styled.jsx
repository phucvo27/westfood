import styled from 'styled-components';

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

    @media screen and (max-width: 650px){
        font-size: 3rem;
    }
`

export const CardBodyDescription = styled.div`
    font-size: 1.3rem;
    margin-bottom: 1rem;
    text-align: center;
    font-weight: normal;

    @media screen and (max-width: 650px){
        font-size: 2rem;
        margin-bottom: 2rem;
    }

`
export const CardBodyButton = styled.div`
    text-align: center;
    margin-top: 1.5rem;
`