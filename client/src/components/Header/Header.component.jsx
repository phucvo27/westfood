import React from 'react';
import { HeaderContainer, Navbar, MainContent, ContentImage, ContentText } from './Header.styled';
import { withRouter } from 'react-router-dom';
import pineappleImage from '../../assets/pineapple.png'
const Header = ({ isMainPage })=>{

    console.log(isMainPage);
    
    return (
        <HeaderContainer>
            <Navbar>
                <div className='logo'>
                    <img src="http://westfood.vn/wp-content/uploads/2017/09/logo.png" alt="logo-wf"/>
                </div>
                <ul className='navigation'>
                    <li className='navigation__item'>
                        <a className='navigation__link' href="/">Home</a>
                    </li>
                    <li className='navigation__item'>
                        <a className='navigation__link' href="/">Blog</a>
                    </li>
                    <li className='navigation__item'>
                        <a className='navigation__link' href="/">About US</a>
                    </li>
                    <li className='navigation__item'>
                        <a className='navigation__link' href="/">Contact US</a>
                    </li>
                </ul>
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
}

export default withRouter(Header);