import styled from 'styled-components';

const yellow = '#D8C149'

export const Wrapper = styled.div`

    width: 80%;
    margin: 0 auto;
`

export const SectionTitle = styled.div`

    text-align: center;
    
    color: #333;
    margin-bottom: 4rem;
    p {
        font-size: 1.6rem;
        font-weight: 400;
    }
    .secondary-title {
        font-size: 2rem;
        font-style: italic;
        margin-bottom: 1rem;
    }

    .main-title {
        font-size: 3.2rem;
        font-weight: normal;
        margin-bottom: 1rem;
    }
    .line {
        width: 5rem;
        height: .1rem;
        background-color: ${yellow};
        margin: 1rem 0;
        display: inline-block;
    }
    

`
