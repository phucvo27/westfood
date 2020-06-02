import styled from 'styled-components';



export const Wrapper = styled.section`

    width: 70%;

    padding: 4rem 0;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 30% 70%;
    grid-column-gap: 3rem;

    @media screen and (max-width: 1200px){
        width: 90%;
        grid-template-columns: 20% 80%;
    }

    @media screen and (max-width: 800px){
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 900px){
        width: 90%;
    }
`

export const LeftContent = styled.div`

    .group {
        margin: 0rem 0 4rem;
    }
    h3 {
        font-size: 1.8rem;
        color: #333;
        text-transform: uppercase;
        margin-bottom: 2.1rem;
    }
    p {
        font-size: 1.2rem;
        color: #9D9D9D;
        margin-bottom: 2.1rem;
    }

    @media screen and (max-width: 900px){
        display: none;
    }

`

export const RightContent = styled.div`

    width: 100%;

`