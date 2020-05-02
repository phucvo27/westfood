import styled from 'styled-components';
//import innerImage from '../../assets/hero_inner.jpg';

//const innerImage = 'http://bdevs.net/theme/zomata/wp-content/uploads/2019/04/bg15.jpg';
const innerImage = 'http://bdevs.net/theme/zomata/wp-content/uploads/2019/05/bg8.jpg';
export const HeaderTitle = styled.div`

    background-image: url(${innerImage});
    background-position: top;
    height: 20rem;

    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15rem 0;

    &::after {
        content: '';
        display: none;
        position: absolute;

        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background-color: #333;
        opacity: .7;
        z-index: 1;
    }
    @media screen and (max-width: 350px){
        justify-content: center;
    }
`

export const Content = styled.div`

    width: 77rem;
    margin-left: 20rem;
    color: #333;
    z-index: 2;
    text-align: left;
    @media screen and (max-width: 350px){
        margin-left: 0rem;
    }
    .title {
        font-size: 2.7rem;
        margin-bottom: 2rem;
    }
    .subtitle {
        font-size: 1.4rem;
        font-style: italic;
    }
`