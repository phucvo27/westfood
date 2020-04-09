import React from 'react';
import { HeaderContainer, Navbar, MainContent, ContentImage, ContentText, Burger, Line } from './Header.styled';
import { withRouter } from 'react-router-dom';
import pineappleImage from '../../assets/pineapple.png';


const Header = ({ isMainPage })=>{

    const handleClickBurger = ()=>{
        console.log('clicked');
        const navigation = document.querySelector('.navigation');
        const nav = document.querySelector('nav');
        nav.classList.toggle('active');
        navigation.classList.toggle('active');
    }
    if(isMainPage){
        return (
            <HeaderContainer isMainPage={isMainPage}>
                <Navbar isMainPage={isMainPage}>
                    <div className='logo'>
                        <img src="http://westfood.vn/wp-content/uploads/2017/09/logo.png" alt="logo-wf"/>
                    </div>
                    <ul className='navigation'>
                        <li className='navigation__item'>
                            <a className='navigation__link' href="/">Home</a>
                        </li>
                        <li className='navigation__item'>
                            <a className='navigation__link' href="/blogs">Blog</a>
                        </li>
                        <li className='navigation__item'>
                            <a className='navigation__link' href="/about">About US</a>
                        </li>
                        <li className='navigation__item'>
                            <a className='navigation__link' href="/contact">Contact US</a>
                        </li>
                    </ul>
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
                        <img src="http://westfood.vn/wp-content/uploads/2017/09/logo.png" alt="logo-wf"/>
                    </div>
                    <ul className='navigation'>
                        <li className='navigation__item'>
                            <a className='navigation__link' href="/">Home</a>
                        </li>
                        <li className='navigation__item'>
                            <a className='navigation__link' href="/blogs">Blog</a>
                        </li>
                        <li className='navigation__item'>
                            <a className='navigation__link' href="/about">About US</a>
                        </li>
                        <li className='navigation__item'>
                            <a className='navigation__link' href="/contact">Contact US</a>
                        </li>
                    </ul>
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