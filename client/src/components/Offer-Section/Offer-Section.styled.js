import styled from 'styled-components';

const yellow = '#D8C149'
const textColor = '#484743';

export const Text = styled.div`

    text-align: left;
    color: ${textColor};
    display: flex;
    justify-content: center;
    align-items: center;


    .secondary-title {
        font-size: 2rem;
        text-transform: uppercase;
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
    }
    p {
        font-size: 1.6rem;
    }

`
export const TextBox = styled.div`
    width: 75%;
    padding-left: 10rem;
`


export const Image = styled.div`

    text-align: center;
    img {
        width: 50rem;
    }

`

export const ButtonGroup = styled.div`

    padding: 2rem 0;
    margin-top: 1rem;

`