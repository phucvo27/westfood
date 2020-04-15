import React from 'react';
import Header from '../../components/Header/Header.component'
import LayoutBlog from '../../components/Layout-Blog/Layout-Blog.component';
import Footer from '../../components/Footer/Footer.component';
import HeaderTitle from '../../components/HeaderTitle/Header-Title.component';

const Blog = ()=>{

    return (
        <React.Fragment>
            <Header isMainPage={false} />
            <HeaderTitle
                title='Blog'
                subTitle='Podcasting operational change management inside of workflows to establish a framework. '
            />
            <LayoutBlog />
            <Footer />
        </React.Fragment>
    )
}


export default Blog;