import React from 'react';
import Grid from '../Grid/Grid.component';
import { Text, TextBox, Image, Wrapper } from './Offer-Section.styled';
import Button from '../Button/Button.component';
import SectionTitle from '../Section-Title/Section-Title.component';
//<p className='secondary-title'>WE OFFER YOU TO</p>
const OfferSection = ()=>{
    return (
        <Wrapper>
            <SectionTitle>
                <p className='secondary-title'>Sharing</p>
                <h3 className='main-title'>CHĂM SÓC BẰNG YÊU THƯƠNG</h3>
                <div className='line'></div>
            </SectionTitle>
            <Grid>
                <Text>
                    <TextBox>
                        
                        <h1 className='main-title'>
                        VÀO BẾP CÙNG KHÓM MD2 - <span className='highlight'>WESTFOODS GOLD</span>
                        </h1>
                        <p>
                            Còn gì lý tưởng hơn chăm sóc bản thân và gia đình bằng những món ngon từ khóm? Westfoods hạnh phúc chia sẻ những công thức nấu ăn đơn giản, nhanh gọn mà vẫn đảm bảo được sự thơm ngon và dinh dưỡng cho từng bữa ăn của gia đình.
                        </p>
                        <Button 
                            text='Go To Our Blogs'
                            marginTop='3rem'
                            willNavigate='/blogs'
                        />
                    </TextBox>
                    
                </Text>
                <Image>
                    <img src='https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80' alt='pinapple' />
                </Image>
            </Grid>
        </Wrapper>
    )
}

export default OfferSection;
//https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80
//https://images.unsplash.com/photo-1523986371872-9d3ba2e2a389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80