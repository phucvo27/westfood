import styled from 'styled-components';


export const Title = styled.h1`

    color: #222222;
    font-size: 3rem;
    line-height: 2.2rem;
    margin-bottom: 5rem;
    text-transform: uppercase;
    text-align: ${props => props.isHeadTitle ? 'center' : 'left'};


    &.headTitle {
        height: 15rem;
        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 900px){
            display: none
        }
    }
    
`;

export const Section = styled.section`

    padding: 0rem 0rem 10rem;
    width: 84%;
    margin: 0 auto;
    @media screen and (max-width: 650px){
        width: 100%;
    }

`;
export const SectionMap = styled.section`

    width: 84%;
    margin: 5rem auto;

    @media screen and (max-width: 650px){
        width: 100%;
    }

`

export const LeftContent = styled.div`

    padding-top: 11rem;
    padding-left: 4.5rem;
    padding-right: 4.5rem;

    p {
        font-size: 1.2rem;
        color: #696969;
    }

    textarea {
        background: #fbfbfb none repeat scroll 0 0;
        border: 0 none;
        color: #696969;
        height: 15rem;
        margin-bottom: 2rem;
        width: 100%;
        outline: none;
        padding: 1.5rem;
        resize: none;
    }
`;

export const RightContent = styled.div`

    background: #f6f5f1 none repeat scroll 0 0;
    padding-top: 11rem;
    padding-left: 4.5rem;
    padding-right: 4.5rem;

    p {
        font-size: 1.2rem;
        color: #696969;
        margin-bottom: 3.6rem;
    }

    .box-address {
        border-top: 1px solid #ececeb;
        display: flex;
        padding: 1.2rem 0;
        font-size: 1.4rem;
        span.bold {
            font-weight: 700;
            padding-right: 1rem;
        }
    }

    @media screen and (max-width: 900px){
        display: none;
    }
`;

export const WorkTime = styled.div`

    padding-top: 2.6rem;
    padding-bottom: .6rem;
    h2 {
        color: #222222;
        font-size: 2.4rem;
        margin-bottom: .7rem;
    }
    span {
        font-size: 1.4rem;
    }
    span.bold {
        font-weight: 700;
        padding-right: 1rem;
    }

`