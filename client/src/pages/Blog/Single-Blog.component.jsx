import React from 'react';
import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';
import HeaderTitle from '../../components/HeaderTitle/Header-Title.component';
import { Wrapper } from './Single-Blog.styled';

const html = `<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam maxime repellendus dolore aut architecto delectus. Esse eaque a, sed laboriosam voluptate illum ex aliquid voluptatem? Quae dolorem veniam similique aliquid.</p>

<div class='image'>
    <img src="https://vtv1.mediacdn.vn/zoom/550_339/2019/8/17/huu-co-1-1566009425153206511120.jpg" alt=""/>
</div>
<p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, reprehenderit. Laudantium mollitia soluta asperiores similique ducimus amet temporibus consequatur libero. Labore non incidunt officiis soluta rem a placeat molestias quas.
</p>

<p class='quote'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua<p>
<p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, reprehenderit. Laudantium mollitia soluta asperiores similique ducimus amet temporibus consequatur libero. Labore non incidunt officiis soluta rem a placeat molestias quas.
</p>
`

class BlogDetails extends React.Component {



    componentDidMount(){
        console.log(this.props.match.params.blogID);
    }
    render(){
        
        return (
            <React.Fragment>
                <Header isMainPage={false} />
                <HeaderTitle
                    title='THE MOST HEALTHFUL FOOD YOU CAN EAT'
                />
                <Wrapper dangerouslySetInnerHTML={{__html: html}}>
                    
                </Wrapper>
                <Footer />
            </React.Fragment>
        )
    }
    
}

export default BlogDetails;