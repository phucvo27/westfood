import styled from 'styled-components';

const color_yellow = '#D8C149';
const color_black = '#333';
const color_white = '#fff';

export const Wrapper = styled.div`

    margin-top: 7rem;

`
export const Section = styled.section`

    padding: 5rem 0 10rem;
    width: 80%;
    background-color: ${color_white};
    margin: 7rem auto;
    
`
export const TextBox = styled.div`

    color: ${color_black};
    font-size: 2rem;
    padding: 7rem;
    .headline {
        font-size: 3.2rem;
        font-weight: normal;
        margin-bottom: 2rem;
        @media screen and (max-width: 650px){
            font-size: 4.2rem;
            font-weight: bold
        }
    }
    span.bold {
        color: ${color_yellow};
        font-size: 2.2rem;
        @media screen and (max-width: 650px){
            font-size: 3rem;
            font-weight: bold
        }
    }
    @media screen and (max-width: 800px){
        order: 2;
    }
    @media screen and (max-width: 650px){
        font-size: 3rem
    }

`;
export const ImageBox = styled.div`

    width: 100%;
    padding: 0 4rem;
    img {
        width: 100%;
    }

    @media screen and (max-width: 800px){
        order: 1;
    }

`;