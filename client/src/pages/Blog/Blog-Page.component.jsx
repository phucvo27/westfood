import React from 'react';
import { Route } from 'react-router-dom';
import Blog from './Blog.component';
import SingleBlog from './Single-Blog.component';


const BlogPage = ({ match })=>{
    return (
        <React.Fragment>
            <Route
                    exact
                    path={`${match.path}`}
                    component={Blog}
                />
                <Route
                    path={`${match.path}/:blogID`}
                    component={SingleBlog}
                />
        </React.Fragment>
    )
}


export default BlogPage;