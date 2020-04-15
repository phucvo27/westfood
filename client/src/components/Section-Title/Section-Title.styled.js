import styled from 'styled-components';

const yellow = '#D8C149'
export const SectionTitle = styled.div`

    text-align: center;
    
    color: #333;
    margin-bottom: 4rem;
    p {
        font-size: 1.6rem;
        font-weight: 400;

        @media screen and (max-width: 650px){
            font-size: 2.2rem;
        }
    }
    .secondary-title {
        font-size: 2rem;
        font-style: italic;
        margin-bottom: 1rem;
        @media screen and (max-width: 650px){
            font-size: 3rem;
        }
    }

    .main-title {
        font-size: 3.2rem;
        font-weight: normal;
        margin-bottom: 1rem;

        @media screen and (max-width: 650px){
            font-size: 4.2rem;
        }
    }
    .line {
        width: 5rem;
        height: .1rem;
        background-color: ${yellow};
        margin: 1rem 0;
        display: inline-block;
    }
    

`
