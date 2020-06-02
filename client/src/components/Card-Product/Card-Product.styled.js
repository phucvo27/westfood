import styled from 'styled-components';

export const Wrapper = styled.div`

    width: 100%;
    padding: .5rem;
    padding-bottom: 3rem;
    overflow: hidden;
    border-radius: .5rem;
    cursor: pointer;
    transition: all .4s;
    &:hover {
        box-shadow: 0rem 1rem 2rem rgba(0,0,0, .15);
    }
`
export const CardImage = styled.div`
    width: 100%;
    padding: 1rem;
    position: relative;
    cursor: pointer;
    img {
        width: 100%;
        transition: all .4s;
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
    &:hover img {
        transform: scale(1.2);
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
    @media screen and (max-width: 1200px){
        font-size: 3rem;
    }
    @media screen and (max-width: 900px){
        font-size: 3.7rem;
    }
    @media screen and (max-width: 650px){
        font-size: 3rem;
    }
`

export const CardBodyDescription = styled.div`
    font-size: 1.3rem;
    margin-bottom: 1rem;
    text-align: center;
    font-weight: normal;

    @media screen and (max-width: 1200px){
        font-size: 1.8rem;
    }
    @media screen and (max-width: 900px){
        font-size: 2.7rem;
        margin-bottom: 3rem;
    }
    @media screen and (max-width: 650px){
        font-size: 2rem;
        margin-bottom: 2rem;
    }

`
export const CardBodyButton = styled.div`
    text-align: center;
    margin-top: 1.5rem;
`