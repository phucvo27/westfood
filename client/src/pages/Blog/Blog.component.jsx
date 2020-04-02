import React from 'react';
import Header from '../../components/Header/Header.component'
import LayoutBlog from '../../components/Layout-Blog/Layout-Blog.component';

const Blog = ()=>{

    return (
        <React.Fragment>
            <Header isMainPage={false} />

            <LayoutBlog />
        </React.Fragment>
    )
}


export default Blog;