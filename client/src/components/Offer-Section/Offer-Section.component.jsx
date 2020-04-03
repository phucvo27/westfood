import React from 'react';
import Grid from '../Grid/Grid.component';
import { Text, TextBox, Image, ButtonGroup, Wrapper, SectionTitle } from './Offer-Section.styled';
import { Button } from '../Button/Button.styled'
const OfferSection = ()=>{
    return (
        <Wrapper>
            <SectionTitle>
                <p className='secondary-title'>Sharing</p>
                <h3 className='main-title'>Organic Food. Best Recipe. Happy Life</h3>
                <div className='line'></div>
            </SectionTitle>
            <Grid>
                <Text>
                    <TextBox>
                        <p className='secondary-title'>WE OFFER YOU TO</p>
                        <h1 className='main-title'>
                            <span>Unlock your potential</span>
                            <span>with good <span className='highlight'>nutrition</span> </span>
                        </h1>
                        <p>
                            Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory garlic bell pepper napa cabbage lettuce tomato
                        </p>
                        <ButtonGroup>
                            <Button>
                                Go To Our Blogs
                            </Button>
                        </ButtonGroup>
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