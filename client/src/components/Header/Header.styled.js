import styled from 'styled-components';
import bgImage from '../../assets/header-bg.png'

const color_yellow = '#D8C149';
const color_black = '#333';

export const HeaderContainer = styled.header`

    width: 100%;
    height: 90vh;
    background-image: url(${bgImage});
    background-size: cover;

`

export const Navbar = styled.nav`

    height: 7rem;
    
    
    padding: 7rem 2rem;
    display: flex;
    jusitfy-content: flex-start;
    align-items: center;

    .logo {
        max-width: 20rem;
        padding-left: 4rem;
        
        img {
            width: 100%
        }
    }

    .navigation { 
        flex: 1;
        max-width: 75%;
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;

        .navigation__link {
            text-decoration: none;
            font-size: 1.6rem;
            font-weight: 500;
            text-transform: uppercase;
            display: inline-block;
            color: #444;
            transition: color .4s;

            position: relative;
        }

        .navigation__link::after {
            position: absolute;
            display: block;
            content: '';
            left: 0;
            bottom: -.5rem;
            height: .2rem;
            width: 100%;
            background-color: ${color_yellow};

            opacity: 0;
            visibility: hidden;
            transform: scale(0);
            transform-origin: center;
            transition: all .4s;
        }

        .navigation__link:hover {
            color: ${color_yellow};
        }
        .navigation__link:hover::after {
            opacity: 1;
            visibility: visible;
            transform: scale(1);
        }

        .navigation__item:not(:last-child){
            margin-right: 4rem;
        }
    }
`


export const MainContent = styled.div`

    max-width: 114rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;

`

export const ContentText = styled.div`
    align-self: center;

    .headlines {
        font-weight: 300;
        span {
            display: block;
            font-size: 3.2rem;
            color: $color-black;
            line-height: 1.7;
        }
        span.highlight {
            color: ${color_yellow};
        }
    }
    .line {
        width: 5rem;
        height: .1rem;
        background-color: ${color_yellow};
        margin: 1rem 0;
    }
    p{
        color: ${color_black};
        font-size: 2.4rem;
        line-height: 1.7;
        letter-spacing: .05rem;
    }
`

export const ContentImage = styled.div`

    img {
        width: 45rem;
        transform: scale(1.3) rotate(22deg);
    }
`