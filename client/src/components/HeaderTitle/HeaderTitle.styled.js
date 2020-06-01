import styled from 'styled-components';
import innerImage from '../../assets/bg-web.jpg';

//const innerImage = 'http://bdevs.net/theme/zomata/wp-content/uploads/2019/04/bg15.jpg';
//const innerImage = 'http://bdevs.net/theme/zomata/wp-content/uploads/2019/05/bg8.jpg';
export const HeaderTitle = styled.div`

    background: url(${innerImage});
    height: 40rem;
    background-size: cover;
    background-position: center bottom;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15rem 0;

    @media screen and (max-width: 350px){
        justify-content: center;
    }
`

export const ContentText = styled.div`

    width: 100%;
    margin-left: 20rem;
    color: #333;
    z-index: 2;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 350px){
        margin-left: 0rem;
    }
    .title {
        font-size: 4rem;
        margin-bottom: 2rem;
    }
    .subtitle {
        font-size: 1.8rem;
        font-style: italic;
    }
`

export const ContentImage = styled.div`

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    img {
        width: 100%;
    }
`