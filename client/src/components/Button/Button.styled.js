import styled from 'styled-components';

const yellow = '#D8C149';

export const Wrapper = styled.div`

    margin-top: ${props => props.marginTop ? props.marginTop : '0rem'};
    text-align: ${props => props.isCenter ? 'center' : 'left'};

`;
export const Button = styled.button`

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

    @media screen and (max-width: 900px){
        font-size: 2.5rem;
        padding: 3rem 6rem;
    }

`