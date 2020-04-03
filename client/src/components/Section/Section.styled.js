import styled from 'styled-components';


export const Wrapper = styled.section`

    padding: 17rem 0 10rem;
    width: 100%;
    background-color: ${props => props.bg ? props.bg : '#fff'};
    margin: ${props => props.margin ? `${props.margin} 0rem` : '0 0'}
`