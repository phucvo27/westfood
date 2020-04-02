import React from 'react';
import { Wrapper, BlogImage, BlogText} from './Card-Blog.styled';
import { Button } from '../Button/Button.styled'
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
                <div>
                    <Button>Read more</Button>
                </div>
            </BlogText>
        </Wrapper>
    )
}

export default CardBlog;