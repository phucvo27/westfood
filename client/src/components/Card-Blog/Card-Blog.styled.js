import styled from 'styled-components';

const borderColor = '#e8e8e8'
const yellow = '#D8C149';
export const Wrapper = styled.div`

    width: 100%;
    border: none;
    &:hover img {
        transform: scale(1.2)
    }
`

export const BlogImage = styled.div`

    overflow: hidden;
    border-radius: 1.5rem 1.5rem 0 0;
    border: none;
    cursor: pointer;
    img {
        display: block;
        width: 100%;
        transition: all 0.3s ease-in-out 0s;
    }

`
export const BlogText = styled.div`
    text-align: center;
    border-bottom: .1rem solid ${borderColor};
    border-left: .1rem solid ${borderColor};
    border-radius: 0 0 1.5rem 1.5rem;
    -webkit-border-radius: 0 0 1.5rem 1.5rem;
    -moz-border-radius: 0 0 1.5rem 1.5rem;
    border-right: .1rem solid ${borderColor};
    padding: 3rem 1.2rem 3.5rem;


    h4 {
        margin-bottom: .7rem;
        font-weight: 700;
        color: #202226;
        font-size: 1.8rem;
        text-transform: uppercase;

        @media screen and (max-width: 1200px){

        }
        @media screen and (max-width: 900px){
            font-size: 2.8rem
        }

        @media screen and (max-width: 650px){
            font-size: 2.8rem
        }

    }

    .post-meta {
        font-size: 1.2rem;
        color: #9D9D9D;
        margin-bottom: 2.1rem;

        @media screen and (max-width: 1200px){
            font-size: 1.4rem;
        }
        @media screen and (max-width: 900px){
            font-size: 1.8rem
        }
        @media screen and (max-width: 650px){
            font-size: 1.8rem
        }
    }

    p {
        font-size: 1.2rem;
        color: #9D9D9D;
        margin-bottom: 2.1rem; 
        @media screen and (max-width: 1200px){
            font-size: 1.6rem;
        }
        @media screen and (max-width: 900px){
            font-size: 2rem
        }
       @media screen and (max-width: 650px){
            font-size: 2.2rem
        }
    }

`

export const BlogButton = styled.a`

    display: inline-block;
    text-decoration: none;
    border: .1rem solid ${yellow};
    padding: 1rem 5rem;
    font-size: 1.2rem;
    background-color: ${yellow};
    color: #fff;
    cursor: pointer;
    border-radius: .5rem;
    transition: background-color .4s, color .4s;

    
    &:hover {
        background-color: transparent;
        color: ${yellow};
        border: .1rem solid ${yellow};
    }
    @media screen and (max-width: 1200px){
        font-size: 1.6rem;
    }
    @media screen and (max-width: 900px){
        font-size: 2rem
    }
   @media screen and (max-width: 650px){
        font-size: 2.2rem
    }

`