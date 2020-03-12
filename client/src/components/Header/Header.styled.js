import styled from 'styled-components';
import bgImage from '../../assets/header-bg.png'

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
        max-width: 16rem;
        
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
        }

        .navigation__link:hover {
            color: #78a206;
        }

        .navigation__item:not(:last-child){
            margin-right: 4rem;
        }
    }
`