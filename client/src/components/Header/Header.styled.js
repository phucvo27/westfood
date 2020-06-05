import styled from 'styled-components';
import bgImage from '../../assets/header-bg.png'

const color_yellow = '#D8C149';
const color_black = '#333';
const color_white = '#fff';
export const HeaderContainer = styled.header`

    width: 100vw;
    height: ${props => props.isMainPage ? '90vh' : '7rem'};
    background: ${props => props.isMainPage ? `url(${bgImage})` : `${color_white}`};
    background-size: cover;
    box-shadow: ${props => props.isMainPage ? 'none' : '0rem 1rem 3rem rgba(0,0,0,.05)'}
`
//height: ${props => props.isMainPage ? '7rem' : '100%'};
export const Navbar = styled.nav`

    height: 7rem;
    width: 100%;
    
    padding: ${props => props.isMainPage ? '7rem 2rem' : '0 0'};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    .logo {
        max-width: 20rem;
        padding-left: 4rem;
        
        img {
            width: 100%
        }
    }

    .navigation { 
        flex: 1;
        width: 75%;
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;

        .navigation__item {
            transition: all .2s;
            @media screen and (max-width: 650px){
                padding: 2rem 4rem;
                width: 100%;

                &:hover {
                    background-color: ${color_yellow};
                }
            }
        }
        .navigation__link {
            text-decoration: none;
            font-size: 1.6rem;
            font-weight: 700;
            text-transform: uppercase;
            display: inline-block;
            color: #444;
            transition: color .4s;

            position: relative;

            @media screen and (max-width: 900px){
                font-size: 2.7rem;
            }
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

            @media screen and (max-width: 650px){
                display: none;
            }
        }

        .navigation__link:hover {
            color: ${color_yellow};
            @media screen and (max-width: 650px){
                color: ${color_white};
            }
        }
        .navigation__link:hover::after {
            opacity: 1;
            visibility: visible;
            transform: scale(1);
        }

        .navigation__link.active {
            color: ${color_yellow};
            &::after {
                opacity: 1;
                visibility: visible;
                transform: scale(1);
            }
        }
        .navigation__item:not(:last-child){
            margin-right: 4rem;

            @media screen and (max-width: 650px){
                margin-right: 0;
                border-bottom: .1rem solid #f4f4f4;
            }
        }

        @media screen and (max-width: 650px){
            position: absolute;
            top: ${props => props.isMainPage ? '10rem' : '7rem'};
            left: 0;
            width: 100%;
            background-color: ${color_white};
            z-index: 999;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            display: none;
            &.active {

                display: flex;
            }
        }
    }
    @media screen and (max-width: 650px){
        &.active {
            background-color: ${color_white};
        }
    }
    
`

export const Burger = styled.div`
    position: absolute;
    top: 50%;
    right: 4rem;
    transform: translateY(-50%);
    height: 4rem;
    width: 4rem;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
    cursor: pointer;

    display: none;

    
    @media screen and (max-width: 650px){
        display: flex;
    }

`
export const Line = styled.div`
    height: .2rem;
    width: 100%;
    background-color: ${color_black};

    &:not(:last-child){
        margin-bottom: .1rem;
    }
`

export const MainContent = styled.div`

    max-width: 114rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    @media screen and (max-width: 900px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 650px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const ContentText = styled.div`
    align-self: center;

    @media screen and (max-width: 1200px){
        padding-left: 5rem;
    }
    @media screen and (max-width: 900px){
        padding-left: 0rem;
    }
    .headlines {
        font-weight: 300;
        span {
            display: block;
            font-size: 3.2rem;
            color: $color-black;
            line-height: 1.7;

            @media screen and (max-width: 800px){
                font-size: 2.8rem;
            }
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
        @media screen and (max-width: 900px){
            margin: auto;
            display: inline-block;
        }
        @media screen and (max-width: 650px){
            margin: auto;
            display: inline-block;
        }
    }
    p{
        color: ${color_black};
        font-size: 2.4rem;
        line-height: 1.7;
        letter-spacing: .05rem;

        @media screen and (max-width: 650px){
            padding: 1rem 2rem;
        }
        
    }

    @media screen and (max-width: 900px){
        order: 2;
        margin-top: 0rem;
        
        text-align: center;
    }
    @media screen and (max-width: 650px){
        order: 2;
        margin-top: 0rem;
        
        text-align: center;
    }
`

export const ContentImage = styled.div`

    img {
        width: 45rem;
        transform: scale(1) rotate(22deg);
    }

    @media screen and (max-width: 650px){
        order: 1;
        img {
            width: 35rem;
        }
    }
`