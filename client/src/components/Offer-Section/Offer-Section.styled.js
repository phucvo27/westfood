import styled from 'styled-components';

const yellow = '#D8C149'
const textColor = '#484743';

export const Wrapper = styled.div`

    width: 80%;
    margin: 0 auto;
`

export const Text = styled.div`

    text-align: left;
    color: ${textColor};
    display: flex;
    justify-content: center;
    align-items: center;


    .secondary-title {
        font-size: 2rem;
        text-transform: uppercase;

        @media screen and (max-width: 650px){
            font-size: 2.7rem;
        }
    }
    .main-title {
        font-size: 3.4rem;
        font-weight: 400;
        margin-bottom: 1.2rem;

        span {
            display: inline-block;
        }
        span.highlight {
            color: ${yellow};
            display: inline;
        }
        @media screen and (max-width: 650px){
            font-size: 4.2rem;
        }
    }
    p {
        font-size: 1.6rem;
        @media screen and (max-width: 650px){
            font-size: 2.2rem;
        }
    }


    @media screen and (max-width: 800px){
        order: 2;
    }

`
export const TextBox = styled.div`
    width: 75%;
    padding-left: 10rem;

    @media screen and (max-width: 800px){
        width: 100%;
        padding-left: 0;
    }
`


export const Image = styled.div`

    text-align: center;
    img {
        width: 100%;
    }

    @media screen and (max-width: 800px){
        order: 1;
        margin-bottom: 2rem;
    }

`

export const ButtonGroup = styled.div`

    padding: 2rem 0;
    margin-top: 1rem;

`