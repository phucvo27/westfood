import styled from 'styled-components';

export const Input = styled.input`

    background: #fbfbfb none repeat scroll 0 0;
    border: 0 none;
    color: #696969;
    height: 4.6rem;
    margin-bottom: 2rem;
    padding: 0 1.5rem;
    width: ${props => props.width ? props.width : '100%'};
    outline: none;

`