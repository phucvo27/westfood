import styled from 'styled-components';

export const Grid = styled.div`

    width: ${props => props.width ? props.width : '100%'};
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 30px;

`