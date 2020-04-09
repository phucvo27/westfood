import styled from 'styled-components';

const borderColor = '#e8e8e8'

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

        @media screen and (max-width: 650px){
            font-size: 2.8rem
        }

    }

    .post-meta {
        font-size: 1.2rem;
        color: #9D9D9D;
        margin-bottom: 2.1rem;

        @media screen and (max-width: 650px){
            font-size: 1.8rem
        }
    }

    p {
       font-size: 1.2rem;
       color: #9D9D9D;
       margin-bottom: 2.1rem; 
       @media screen and (max-width: 650px){
            font-size: 2.2rem
        }
    }

`