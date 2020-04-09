import React from 'react';
import Header from '../../components/Header/Header.component'
import LayoutBlog from '../../components/Layout-Blog/Layout-Blog.component';
import Footer from '../../components/Footer/Footer.component';
import { HeaderTitle } from '../../components/HeaderTitle/HeaderTitle.styled';

const Blog = ()=>{

    return (
        <React.Fragment>
            <Header isMainPage={false} />
            <HeaderTitle>
                <h3>Our Blogs</h3>
            </HeaderTitle>
            <LayoutBlog />
            <Footer />
        </React.Fragment>
    )
}


export default Blog;