import styled from 'styled-components';

const yellow = '#D8C149';

export const Button = styled.button`

    border: .1rem solid ${yellow};
    padding: 1rem 5rem;
    font-size: 1.2rem;
    background-color: ${yellow};
    color: #fff;
    cursor: pointer;
    border-radius: .5rem;
    transition: background-color .4s, color .4s;
    }
    &:hover {
        background-color: transparent;
        color: ${yellow};
        border: .1rem solid ${yellow};
    }

`