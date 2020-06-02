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
    justify-content: center;
    align-items: center;
    padding: 15rem 0;

    
`

export const ContentText = styled.div`

    color: #333;
    z-index: 2;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


    
    .title {
        font-size: 4rem;
        margin-bottom: 2rem;
    }
    .subtitle {
        font-size: 1.8rem;
        font-style: italic;
    }
    @media screen and (max-width: 1200px){
        .title {
            font-size: 4rem;
        }
        .subtitle {
            width: 80%;
            font-size: 2.2rem;
            text-align: center;
        }
    }
    @media screen and (max-width: 900px){
        .title {
            font-size: 4rem
        }
        .subtitle{
            width: 70%;
            font-size: 2.2rem;
            text-align: center;
        }
        
    }
    @media screen and (max-width: 650px){
        .title {
            font-size: 4rem;
        }
        .subtitle{
            width: 80%;
            font-size: 2.2rem;
            text-align: center;
        }
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