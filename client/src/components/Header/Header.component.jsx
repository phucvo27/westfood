import React from 'react';
import { HeaderContainer, Navbar, MainContent, ContentImage, ContentText, Burger, Line } from './Header.styled';
import { withRouter, NavLink } from 'react-router-dom';
import pineappleImage from '../../assets/pineapple.png';


const Header = ({ isMainPage })=>{

    const handleClickBurger = ()=>{
        console.log('clicked');
        const navigation = document.querySelector('.navigation');
        const nav = document.querySelector('nav');
        nav.classList.toggle('active');
        navigation.classList.toggle('active');
    }

    const renderNavMenu = ()=>{
        return (
            <ul className='navigation'>
                <li className='navigation__item'>
                    <NavLink exact className='navigation__link' to="/" activeClassName="active">Home</NavLink>
                </li>
                <li className='navigation__item'>
                    <NavLink exact className='navigation__link' to="/blogs" activeClassName="active">Blog</NavLink>
                </li>
                <li className='navigation__item'>
                    <NavLink exact className='navigation__link' to="/about" activeClassName="active">About US</NavLink>
                </li>
                <li className='navigation__item'>
                    <NavLink exact className='navigation__link' to="/contact" activeClassName="active">Contact US</NavLink>
                </li>
            </ul>
        )
    }
    if(isMainPage){
        return (
            <HeaderContainer isMainPage={isMainPage}>
                <Navbar isMainPage={isMainPage}>
                    <div className='logo'>
                        <a href='/'>
                            <img src="http://westfood.vn/wp-content/uploads/2017/09/logo.png" alt="logo-wf"/>
                        </a>
                    </div>
                    {renderNavMenu()}
                    <Burger isMainPage={isMainPage} onClick={handleClickBurger}>
                        <Line />
                        <Line />
                        <Line />
                    </Burger>
                </Navbar>
                
                <MainContent>
                    <ContentText>
                        <h3 className="headlines">
                            <span>Fresh. Healthy. Organic.</span>
                            <span className="highlight">Delicious fruits.</span>
                        </h3>
                        <div className="line"></div>
                        <p>
                            Fruits es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo
                            melon azuki lemon orange apples.
                        </p>
                    </ContentText>
                    <ContentImage>
                        <img src={pineappleImage} alt="pineapple-img"/>
                    </ContentImage>
                </MainContent>
            </HeaderContainer>
        )
    }else {
        return (
            <HeaderContainer isMainPage={isMainPage}>
                <Navbar isMainPage={isMainPage}>
                    <div className='logo'>
                    <a href='/'>
                        <img src="http://westfood.vn/wp-content/uploads/2017/09/logo.png" alt="logo-wf"/>
                    </a>
                    </div>
                    {
                        renderNavMenu()
                    }
                    <Burger isMainPage={isMainPage} onClick={handleClickBurger}>
                        <Line />
                        <Line />
                        <Line />
                    </Burger>
                </Navbar>
            </HeaderContainer>
        )
    }
}

export default withRouter(Header);