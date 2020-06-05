import styled from 'styled-components';


export const Wrapper = styled.section`

    width: 70%;
    margin: 5rem auto 10rem;

    
    font-size: 1.6rem;

    p {
        line-height: 1.7;
        margin-bottom: 3rem;
    }

    .image {
        width: 80%;
        margin: 5rem auto;
        img {
            width: 100%;
        }
    }

    .quote {
        width: 80%;
        margin: 5rem auto;
        backgroud-color: #f8f9fa;
        color: #333;
        border-left: .5rem solid #D8C149;
        padding: 1.5rem 0rem 1.5rem 4rem;
        font-size: 1.6rem;

        @media screen and (max-width: 900px){
            font-size: 2.5rem;
        }
        @media screen and (max-width: 650px){
            font-size: 2.7rem;
        }
    }

    
    
    
    @media screen and (max-width: 900px){
        font-size: 2.5rem;
    }
    @media screen and (max-width: 650px){
        font-size: 3rem
    }
    @media screen and (max-width: 350px){
        font-size: 2rem
    }
`