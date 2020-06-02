import React from 'react';
import { Wrapper, BlogImage, BlogText, BlogButton} from './Card-Blog.styled';
const CardBlog = ({ imageUrl })=>{
    return (
        <Wrapper>
            <BlogImage>
                <img src={imageUrl} alt='garden' />
            </BlogImage>
            <BlogText>
                <h4>The most healthful food you can eat.</h4>
                <div className='post-meta'>
                    <span>Post By: Naturecircle Admin
                    </span>
                    <span> - </span>
                    <span>08 Jan, 2019</span>
                </div>

                <p>
                    Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero...
                </p>
                <BlogButton text='Read More' isCenter={true} href='/blogs/hehehe'>Read more</BlogButton>
            </BlogText>
        </Wrapper>
    )
}

export default CardBlog;