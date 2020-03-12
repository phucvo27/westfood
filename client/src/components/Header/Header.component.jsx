import React from 'react';
import { HeaderContainer, Navbar } from './Header.styled';

const Header = ()=>{
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
        </HeaderContainer>
    )
}

export default Header;