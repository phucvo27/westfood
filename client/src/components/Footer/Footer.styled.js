import styled from 'styled-components';


export const Wrapper = styled.section`

    background-image: url('https://cdn.shopify.com/s/files/1/0162/3932/9344/files/4.jpg?v=1546506413');
    background-position: top center;
    background-size: cover;
    margin-top: 5rem;
    
`
export const Container = styled.div`

    width: 80%;
    margin: 0 auto;
    padding: 15rem 0;

`
export const LeftContent = styled.div`

    p {
        font-size: 1.4rem;
        margin-bottom: 2rem;
        @media screen and (max-width: 900px){
            font-size: 2.5rem
        }
    }
`;

export const BoxAdress = styled.div`

    
    display: flex;
    padding: 1.2rem 0;
    font-size: 1.4rem;

    span.bold {
        font-weight: 700;
        padding-right: 1rem;
    }

    @media screen and (max-width: 900px) {
        padding: 0;
        font-size: 2.5rem;
    }
    @media screen and (max-width: 650px){
        font-size: 2.4rem;
        margin-bottom: 2rem;
    }

`

export const LogoImage = styled.div`

    margin-bottom: 3rem;

    img {
        width: 20rem;
    }

`
export const RightContent = styled.div`
    padding-left: 4rem;
    font-size: 1.4rem;

    span.bold {
        font-weight: 700;
        padding-right: 1rem;
    }

    @media screen and (max-width: 900px) {
        padding: 0;
        margin-top: 2rem;
    }
    @media screen and (max-width: 650px){
        font-size: 2.4rem;
        margin-bottom: 2rem;
    }
`;

export const Title = styled.h1`

    color: #222222;
    font-size: 2.4rem;
    margin-bottom: 3rem;
    text-transform: uppercase;

    @media screen and (max-width: 650px){
        font-size: 4.2rem;
        margin-bottom: 2rem;
    }
`;