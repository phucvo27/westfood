import React from 'react';
import { Wrapper, LeftContent, RightContent } from './Layout-Blog.styled';
import Blog from '../Card-Blog/Card-Blog.component'
import Grid from '../Grid/Grid.component';

const LayoutBlog = () => {
    return (
        <Wrapper>
            <LeftContent>
                <div className='group'>
                    <h3>Recent Post</h3>
                    <p>Coconut improve heart and immunity.</p>
                </div>
                <div className='group'>
                    <h3>Achieve Post</h3>
                    <p>The Most Healthful Food You Can Eat.</p>
                </div>
            </LeftContent>
            <RightContent>
                <Grid>
                    <Blog 
                        imageUrl='https://cdn.shopify.com/s/files/1/0162/3932/9344/articles/5_370x267_crop_center.jpg?v=1547011327'
                    />
                    
                    <Blog 
                        imageUrl='https://cdn.shopify.com/s/files/1/0162/3932/9344/articles/2_370x267_crop_center.jpg?v=1547011786'
                    />
                    <Blog 
                        imageUrl='https://cdn.shopify.com/s/files/1/0162/3932/9344/articles/4_370x267_crop_center.jpg?v=1547011267'
                    />
                    <Blog 
                        imageUrl='https://cdn.shopify.com/s/files/1/0162/3932/9344/articles/3_370x267_crop_center.jpg?v=1547011788'
                    />
                    
                </Grid>
            </RightContent>
        </Wrapper>
    )

}

export default LayoutBlog;